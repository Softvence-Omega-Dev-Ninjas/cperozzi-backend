# Stage 1: Build
FROM node:20 AS builder

WORKDIR /app

# Copy package files and pnpm config
COPY package*.json ./
COPY pnpm-lock.yaml* ./
COPY .npmrc* ./
COPY pnpm-workspace.yaml ./

# Install deps
RUN npm i -g pnpm@latest && pnpm install

# Copy prisma folder
COPY prisma ./prisma
COPY prisma.config.ts ./

# Copy source code
COPY . .

# Generate Prisma client (DATABASE_URL is required by prisma.config.ts but not used during generation)
ENV DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy"
RUN pnpm prisma:generate

# Build the app
RUN pnpm build

# Stage 2: Run
FROM node:20-alpine

WORKDIR /app

# Copy build output & dependencies
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts

# Set production env
ENV NODE_ENV=production
EXPOSE 5053

CMD ["npm", "run", "start:docker"]
