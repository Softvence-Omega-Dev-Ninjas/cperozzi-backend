# Stage 1: Build
FROM node:20 AS builder

WORKDIR /app

# Copy package files and pnpm config
COPY package*.json ./
COPY pnpm-lock.yaml* ./
COPY .npmrc* ./
COPY pnpm-workspace.yaml ./

# Install pnpm and configure it properly for Docker
RUN npm i -g pnpm@latest
RUN pnpm config set node-linker hoisted
RUN pnpm install --no-frozen-lockfile

# Copy prisma folder
COPY prisma ./prisma
COPY prisma.config.ts ./

# Copy source code
COPY . .

# Create a dummy .env file for prisma config
RUN echo "DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy" > .env

# Generate Prisma client using pnpm (this ensures proper module resolution)
RUN pnpm prisma:generate

# Verify the generation
RUN ls -la prisma/generated || true

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
