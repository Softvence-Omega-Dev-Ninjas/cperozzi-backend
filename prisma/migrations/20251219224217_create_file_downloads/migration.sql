-- CreateTable
CREATE TABLE "file_downloads" (
    "id" UUID NOT NULL,
    "file_name" VARCHAR NOT NULL,
    "file_path" VARCHAR,
    "file_type" VARCHAR,
    "email" VARCHAR,
    "email_sent" BOOLEAN NOT NULL DEFAULT false,
    "email_sent_at" TIMESTAMP(3),
    "downloaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "file_downloads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "file_downloads_email_idx" ON "file_downloads"("email");

-- CreateIndex
CREATE INDEX "file_downloads_downloaded_at_idx" ON "file_downloads"("downloaded_at");
