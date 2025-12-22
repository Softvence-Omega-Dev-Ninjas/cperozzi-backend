import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MailService } from "@softvence/mail";
import { TestEmailResponseDto } from "./dto/test-email-response.dto";
import { TemplateService } from "./template.service";

@Injectable()
export class AppMailService {
    private readonly logger = new Logger(AppMailService.name);
    private readonly fromAddress: string;

    constructor(
        private readonly mailService: MailService,
        private readonly configService: ConfigService,
        private readonly templateService: TemplateService,
    ) {
        const mailUser = this.configService.get<string>("MAIL_USER");
        const mailDisplayName = this.configService.get<string>("MAIL_DISPLAY_NAME") || "CPerozzi";

        let displayName = mailDisplayName;
        const mailFrom = this.configService.get<string>("MAIL_FROM");
        if (mailFrom && mailFrom.includes("<")) {
            const match = mailFrom.match(/^"?(.+?)"?\s*<(.+?)>$/);
            if (match) {
                displayName = match[1].trim() || mailDisplayName;
            }
        }

        this.fromAddress = `"${displayName}" <${mailUser}>`;
        this.logger.log(`📧 Mail service initialized with from address: ${this.fromAddress}`);
    }

    async sendFileDownloadEmail(to: string, fileName: string, filePath?: string): Promise<void> {
        try {
            const displayName = this.configService.get<string>("MAIL_DISPLAY_NAME") || "CPerozzi";
            const subject = `Your requested file: ${fileName}`;

            const { html, text } = this.templateService.renderEmail("file-download", {
                subject,
                displayName,
                fileName,
                filePath,
            });

            await this.mailService.send({
                from: this.fromAddress,
                to,
                subject,
                html,
                text,
            });

            this.logger.log(`Email sent successfully to ${to} for file ${fileName}`);
        } catch (error) {
            this.logger.error(`Failed to send email to ${to}:`, error);
            throw error;
        }
    }

    async testEmailConfiguration(testEmail?: string): Promise<TestEmailResponseDto> {
        const testEmailAddress = testEmail || "test@example.com";
        const timestamp = new Date();

        try {
            const displayName = this.configService.get<string>("MAIL_DISPLAY_NAME") || "CPerozzi";
            const subject = "Email Configuration Test - CPerozzi";

            const { html, text } = this.templateService.renderEmail("test-email", {
                subject,
                displayName,
                testTime: timestamp.toISOString(),
            });

            this.logger.log(`Sending test email from ${this.fromAddress} to ${testEmailAddress}`);
            await this.mailService.send({
                from: this.fromAddress,
                to: testEmailAddress,
                subject,
                html,
                text,
            });

            this.logger.log(`Test email sent successfully to ${testEmailAddress}`);

            return {
                success: true,
                message: "Email configuration is working correctly. Test email sent successfully.",
                testEmail: testEmailAddress,
                timestamp,
            };
        } catch (error: any) {
            const errorMessage = error?.message || "Unknown error occurred";
            this.logger.error(`Email configuration test failed:`, error);

            return {
                success: false,
                message: "Email configuration test failed",
                testEmail: testEmailAddress,
                error: errorMessage,
                timestamp,
            };
        }
    }
}
