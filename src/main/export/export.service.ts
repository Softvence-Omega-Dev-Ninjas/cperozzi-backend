import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Document, HeadingLevel, Packer, Paragraph, TextRun } from "docx";
import PDFDocument from "pdfkit";
import { PrismaService } from "../../common/prisma/prisma.service";
import { ExportFormat } from "./dto/export-format.enum";

@Injectable()
export class ExportService {
    constructor(private readonly prisma: PrismaService) {}

    async exportProposal(id: string, format: ExportFormat = ExportFormat.PDF): Promise<Buffer> {
        try {
            const proposalDraft = await this.prisma.proposalDraft.findUnique({
                where: { id },
                include: {
                    organization: true,
                    grant: true,
                },
            });

            if (!proposalDraft) {
                throw new NotFoundException(`Proposal draft with ID ${id} not found`);
            }

            if (format === ExportFormat.PDF) {
                return this.generateProposalPDF(proposalDraft);
            } else if (format === ExportFormat.DOCX) {
                return await this.generateProposalDOCX(proposalDraft);
            } else {
                throw new BadRequestException(`Unsupported format: ${format}`);
            }
        } catch (error: any) {
            if (error instanceof NotFoundException || error instanceof BadRequestException) {
                throw error;
            }
            throw new BadRequestException(
                `Failed to export proposal: ${error?.message || "Unknown error"}`,
            );
        }
    }

    async exportLoi(id: string, format: ExportFormat = ExportFormat.PDF): Promise<Buffer> {
        try {
            const letterOfIntent = await this.prisma.letterOfIntent.findUnique({
                where: { id },
                include: {
                    organization: true,
                    grant: true,
                },
            });

            if (!letterOfIntent) {
                throw new NotFoundException(`Letter of intent with ID ${id} not found`);
            }

            if (format === ExportFormat.PDF) {
                return this.generateLoiPDF(letterOfIntent);
            } else if (format === ExportFormat.DOCX) {
                return await this.generateLoiDOCX(letterOfIntent);
            } else {
                throw new BadRequestException(`Unsupported format: ${format}`);
            }
        } catch (error: any) {
            if (error instanceof NotFoundException || error instanceof BadRequestException) {
                throw error;
            }
            throw new BadRequestException(
                `Failed to export letter of intent: ${error?.message || "Unknown error"}`,
            );
        }
    }

    private generateProposalPDF(proposalDraft: any): Promise<Buffer> {
        return new Promise((resolve, reject) => {
            try {
                const doc = new PDFDocument({ margin: 50 });
                const chunks: Buffer[] = [];

                doc.on("data", (chunk) => chunks.push(chunk));
                doc.on("end", () => resolve(Buffer.concat(chunks)));
                doc.on("error", (error) => reject(error));

                doc.fontSize(20).text("Proposal Draft", { align: "center" });
                doc.moveDown();

                doc.fontSize(14).text(
                    `Organization: ${proposalDraft.organization.organizationName}`,
                );
                doc.text(`Grant: ${proposalDraft.grant.funderName}`);
                doc.moveDown();

                if (proposalDraft.executiveSummary) {
                    doc.fontSize(16).text("Executive Summary", { underline: true });
                    doc.fontSize(12).text(proposalDraft.executiveSummary);
                    doc.moveDown();
                }

                if (proposalDraft.introductionToOrganization) {
                    doc.fontSize(16).text("Introduction to Organization", { underline: true });
                    doc.fontSize(12).text(proposalDraft.introductionToOrganization);
                    doc.moveDown();
                }

                if (proposalDraft.problemStatement) {
                    doc.fontSize(16).text("Problem Statement", { underline: true });
                    doc.fontSize(12).text(proposalDraft.problemStatement);
                    doc.moveDown();
                }

                if (proposalDraft.goalsAndObjectives) {
                    doc.fontSize(16).text("Goals and Objectives", { underline: true });
                    doc.fontSize(12).text(proposalDraft.goalsAndObjectives);
                    doc.moveDown();
                }

                if (proposalDraft.methodsAndActivities) {
                    doc.fontSize(16).text("Methods and Activities", { underline: true });
                    doc.fontSize(12).text(proposalDraft.methodsAndActivities);
                    doc.moveDown();
                }

                if (proposalDraft.evaluationPlan) {
                    doc.fontSize(16).text("Evaluation Plan", { underline: true });
                    doc.fontSize(12).text(proposalDraft.evaluationPlan);
                    doc.moveDown();
                }

                if (proposalDraft.sustainabilityPlan) {
                    doc.fontSize(16).text("Sustainability Plan", { underline: true });
                    doc.fontSize(12).text(proposalDraft.sustainabilityPlan);
                    doc.moveDown();
                }

                if (proposalDraft.budgetSummary) {
                    doc.fontSize(16).text("Budget Summary", { underline: true });
                    doc.fontSize(12).text(proposalDraft.budgetSummary);
                    doc.moveDown();
                }

                if (proposalDraft.conclusion) {
                    doc.fontSize(16).text("Conclusion", { underline: true });
                    doc.fontSize(12).text(proposalDraft.conclusion);
                }

                doc.end();
            } catch (error: any) {
                reject(error);
            }
        });
    }

    private async generateProposalDOCX(proposalDraft: any): Promise<Buffer> {
        try {
            const children: Paragraph[] = [];

            children.push(
                new Paragraph({
                    text: "Proposal Draft",
                    heading: HeadingLevel.TITLE,
                    alignment: "center",
                }),
            );

            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `Organization: ${proposalDraft.organization.organizationName}`,
                            bold: true,
                        }),
                    ],
                }),
            );
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `Grant: ${proposalDraft.grant.funderName}`,
                            bold: true,
                        }),
                    ],
                }),
            );

            if (proposalDraft.executiveSummary) {
                children.push(
                    new Paragraph({
                        text: "Executive Summary",
                        heading: HeadingLevel.HEADING_1,
                    }),
                );
                children.push(
                    new Paragraph({
                        children: [new TextRun({ text: proposalDraft.executiveSummary })],
                    }),
                );
            }

            if (proposalDraft.introductionToOrganization) {
                children.push(
                    new Paragraph({
                        text: "Introduction to Organization",
                        heading: HeadingLevel.HEADING_1,
                    }),
                );
                children.push(
                    new Paragraph({
                        children: [new TextRun(proposalDraft.introductionToOrganization)],
                    }),
                );
            }

            if (proposalDraft.problemStatement) {
                children.push(
                    new Paragraph({
                        text: "Problem Statement",
                        heading: HeadingLevel.HEADING_1,
                    }),
                );
                children.push(
                    new Paragraph({
                        children: [new TextRun(proposalDraft.problemStatement)],
                    }),
                );
            }

            if (proposalDraft.goalsAndObjectives) {
                children.push(
                    new Paragraph({
                        text: "Goals and Objectives",
                        heading: HeadingLevel.HEADING_1,
                    }),
                );
                children.push(
                    new Paragraph({
                        children: [new TextRun(proposalDraft.goalsAndObjectives)],
                    }),
                );
            }

            if (proposalDraft.methodsAndActivities) {
                children.push(
                    new Paragraph({
                        text: "Methods and Activities",
                        heading: HeadingLevel.HEADING_1,
                    }),
                );
                children.push(
                    new Paragraph({
                        children: [new TextRun(proposalDraft.methodsAndActivities)],
                    }),
                );
            }

            if (proposalDraft.evaluationPlan) {
                children.push(
                    new Paragraph({
                        text: "Evaluation Plan",
                        heading: HeadingLevel.HEADING_1,
                    }),
                );
                children.push(
                    new Paragraph({
                        children: [new TextRun(proposalDraft.evaluationPlan)],
                    }),
                );
            }

            if (proposalDraft.sustainabilityPlan) {
                children.push(
                    new Paragraph({
                        text: "Sustainability Plan",
                        heading: HeadingLevel.HEADING_1,
                    }),
                );
                children.push(
                    new Paragraph({
                        children: [new TextRun(proposalDraft.sustainabilityPlan)],
                    }),
                );
            }

            if (proposalDraft.budgetSummary) {
                children.push(
                    new Paragraph({
                        text: "Budget Summary",
                        heading: HeadingLevel.HEADING_1,
                    }),
                );
                children.push(
                    new Paragraph({
                        children: [new TextRun(proposalDraft.budgetSummary)],
                    }),
                );
            }

            if (proposalDraft.conclusion) {
                children.push(
                    new Paragraph({
                        text: "Conclusion",
                        heading: HeadingLevel.HEADING_1,
                    }),
                );
                children.push(
                    new Paragraph({
                        children: [new TextRun(proposalDraft.conclusion)],
                    }),
                );
            }

            const doc = new Document({
                sections: [
                    {
                        children,
                    },
                ],
            });

            return await Packer.toBuffer(doc);
        } catch (error: any) {
            throw new BadRequestException(
                `Failed to generate DOCX: ${error?.message || "Unknown error"}`,
            );
        }
    }

    private generateLoiPDF(letterOfIntent: any): Promise<Buffer> {
        return new Promise((resolve, reject) => {
            try {
                const doc = new PDFDocument({ margin: 50 });
                const chunks: Buffer[] = [];

                doc.on("data", (chunk) => chunks.push(chunk));
                doc.on("end", () => resolve(Buffer.concat(chunks)));
                doc.on("error", (error) => reject(error));

                doc.fontSize(20).text("Letter of Intent", { align: "center" });
                doc.moveDown();

                doc.fontSize(14).text(
                    `Organization: ${letterOfIntent.organization.organizationName}`,
                );
                doc.text(`Grant: ${letterOfIntent.grant.funderName}`);
                if (letterOfIntent.fundingRequest) {
                    doc.text(
                        `Funding Request: $${Number(letterOfIntent.fundingRequest).toLocaleString()}`,
                    );
                }
                doc.moveDown();

                if (letterOfIntent.introduction) {
                    doc.fontSize(16).text("Introduction", { underline: true });
                    doc.fontSize(12).text(letterOfIntent.introduction);
                    doc.moveDown();
                }

                if (letterOfIntent.organizationalSummary) {
                    doc.fontSize(16).text("Organizational Summary", { underline: true });
                    doc.fontSize(12).text(letterOfIntent.organizationalSummary);
                    doc.moveDown();
                }

                if (letterOfIntent.projectOverview) {
                    doc.fontSize(16).text("Project Overview", { underline: true });
                    doc.fontSize(12).text(letterOfIntent.projectOverview);
                    doc.moveDown();
                }

                if (letterOfIntent.closingStatement) {
                    doc.fontSize(16).text("Closing Statement", { underline: true });
                    doc.fontSize(12).text(letterOfIntent.closingStatement);
                }

                doc.end();
            } catch (error: any) {
                reject(error);
            }
        });
    }

    private async generateLoiDOCX(letterOfIntent: any): Promise<Buffer> {
        try {
            const children: Paragraph[] = [];

            children.push(
                new Paragraph({
                    text: "Letter of Intent",
                    heading: HeadingLevel.TITLE,
                    alignment: "center",
                }),
            );

            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `Organization: ${letterOfIntent.organization.organizationName}`,
                            bold: true,
                        }),
                    ],
                }),
            );
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `Grant: ${letterOfIntent.grant.funderName}`,
                            bold: true,
                        }),
                    ],
                }),
            );
            if (letterOfIntent.fundingRequest) {
                children.push(
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `Funding Request: $${Number(letterOfIntent.fundingRequest).toLocaleString()}`,
                                bold: true,
                            }),
                        ],
                    }),
                );
            }

            if (letterOfIntent.introduction) {
                children.push(
                    new Paragraph({
                        text: "Introduction",
                        heading: HeadingLevel.HEADING_1,
                    }),
                );
                children.push(
                    new Paragraph({
                        children: [new TextRun(letterOfIntent.introduction)],
                    }),
                );
            }

            if (letterOfIntent.organizationalSummary) {
                children.push(
                    new Paragraph({
                        text: "Organizational Summary",
                        heading: HeadingLevel.HEADING_1,
                    }),
                );
                children.push(
                    new Paragraph({
                        children: [new TextRun(letterOfIntent.organizationalSummary)],
                    }),
                );
            }

            if (letterOfIntent.projectOverview) {
                children.push(
                    new Paragraph({
                        text: "Project Overview",
                        heading: HeadingLevel.HEADING_1,
                    }),
                );
                children.push(
                    new Paragraph({
                        children: [new TextRun(letterOfIntent.projectOverview)],
                    }),
                );
            }

            if (letterOfIntent.closingStatement) {
                children.push(
                    new Paragraph({
                        text: "Closing Statement",
                        heading: HeadingLevel.HEADING_1,
                    }),
                );
                children.push(
                    new Paragraph({
                        children: [new TextRun(letterOfIntent.closingStatement)],
                    }),
                );
            }

            const doc = new Document({
                sections: [
                    {
                        children,
                    },
                ],
            });

            return await Packer.toBuffer(doc);
        } catch (error: any) {
            throw new BadRequestException(
                `Failed to generate DOCX: ${error?.message || "Unknown error"}`,
            );
        }
    }
}
