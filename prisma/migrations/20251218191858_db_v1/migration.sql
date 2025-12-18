-- CreateTable
CREATE TABLE "grant_opportunities" (
    "id" UUID NOT NULL,
    "organization_id" UUID NOT NULL,
    "funder_name" VARCHAR NOT NULL,
    "focus_area" VARCHAR,
    "deadline" DATE,
    "amount_usd" DECIMAL(15,2),
    "eligibility" VARCHAR,
    "attachments_required" VARCHAR,
    "application_format" VARCHAR,
    "funder_profile_url" VARCHAR,
    "recip_gs_profile_link" VARCHAR,
    "source" VARCHAR,
    "internal_source_id" UUID,
    "grant_type" VARCHAR,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "grant_opportunities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "internal_grant_sources" (
    "id" UUID NOT NULL,
    "organization_id" UUID NOT NULL,
    "opportunity_text" TEXT,
    "opportunity_url" VARCHAR,
    "opportunity_pdf" VARCHAR,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "internal_grant_sources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "letters_of_intent" (
    "id" UUID NOT NULL,
    "organization_id" UUID NOT NULL,
    "grant_id" UUID NOT NULL,
    "introduction" TEXT,
    "organizational_summary" TEXT,
    "project_overview" TEXT,
    "funding_request" DECIMAL(15,2),
    "closing_statement" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "letters_of_intent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organizations" (
    "id" UUID NOT NULL,
    "organization_name" VARCHAR NOT NULL,
    "organization_website" VARCHAR,
    "mission_statement" TEXT,
    "refined_mission_statement" TEXT,
    "core_purpose" TEXT,
    "type_of_work" VARCHAR,
    "goals_aspirations" TEXT,
    "programs" TEXT,
    "achievements" TEXT,
    "budget" TEXT,
    "evaluation" TEXT,
    "no_of_grants" INTEGER,
    "shared_link" VARCHAR,
    "is_grant" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proposal_drafts" (
    "id" UUID NOT NULL,
    "organization_id" UUID NOT NULL,
    "grant_id" UUID NOT NULL,
    "executive_summary" TEXT,
    "introduction_to_organization" TEXT,
    "problem_statement" TEXT,
    "goals_and_objectives" TEXT,
    "methods_and_activities" TEXT,
    "evaluation_plan" TEXT,
    "sustainability_plan" TEXT,
    "budget_summary" TEXT,
    "conclusion" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "proposal_drafts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "readiness_scores" (
    "id" UUID NOT NULL,
    "organization_id" UUID NOT NULL,
    "grant_id" UUID NOT NULL,
    "readiness_score" INTEGER NOT NULL,
    "strengths" TEXT,
    "improvement_areas" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "readiness_scores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "grant_opportunities_organization_id_idx" ON "grant_opportunities"("organization_id");

-- CreateIndex
CREATE INDEX "grant_opportunities_internal_source_id_idx" ON "grant_opportunities"("internal_source_id");

-- CreateIndex
CREATE INDEX "internal_grant_sources_organization_id_idx" ON "internal_grant_sources"("organization_id");

-- CreateIndex
CREATE INDEX "letters_of_intent_organization_id_idx" ON "letters_of_intent"("organization_id");

-- CreateIndex
CREATE INDEX "letters_of_intent_grant_id_idx" ON "letters_of_intent"("grant_id");

-- CreateIndex
CREATE INDEX "proposal_drafts_organization_id_idx" ON "proposal_drafts"("organization_id");

-- CreateIndex
CREATE INDEX "proposal_drafts_grant_id_idx" ON "proposal_drafts"("grant_id");

-- CreateIndex
CREATE INDEX "readiness_scores_organization_id_idx" ON "readiness_scores"("organization_id");

-- CreateIndex
CREATE INDEX "readiness_scores_grant_id_idx" ON "readiness_scores"("grant_id");

-- AddForeignKey
ALTER TABLE "grant_opportunities" ADD CONSTRAINT "grant_opportunities_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grant_opportunities" ADD CONSTRAINT "grant_opportunities_internal_source_id_fkey" FOREIGN KEY ("internal_source_id") REFERENCES "internal_grant_sources"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internal_grant_sources" ADD CONSTRAINT "internal_grant_sources_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "letters_of_intent" ADD CONSTRAINT "letters_of_intent_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "letters_of_intent" ADD CONSTRAINT "letters_of_intent_grant_id_fkey" FOREIGN KEY ("grant_id") REFERENCES "grant_opportunities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proposal_drafts" ADD CONSTRAINT "proposal_drafts_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proposal_drafts" ADD CONSTRAINT "proposal_drafts_grant_id_fkey" FOREIGN KEY ("grant_id") REFERENCES "grant_opportunities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "readiness_scores" ADD CONSTRAINT "readiness_scores_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "readiness_scores" ADD CONSTRAINT "readiness_scores_grant_id_fkey" FOREIGN KEY ("grant_id") REFERENCES "grant_opportunities"("id") ON DELETE CASCADE ON UPDATE CASCADE;
