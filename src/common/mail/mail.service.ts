import { Injectable, Logger } from "@nestjs/common";
import { MailService } from "@softvence/mail";
import { TestEmailResponseDto } from "./dto/test-email-response.dto";

@Injectable()
export class AppMailService {
    private readonly logger = new Logger(AppMailService.name);

    constructor(private readonly mailService: MailService) {}

    async sendFileDownloadEmail(to: string, fileName: string, filePath?: string): Promise<void> {
        try {
            const subject = `Your requested file: ${fileName}`;
            const htmlBody = `
                <html>
                    <body>
                        <h2>File Download</h2>
                        <p>Thank you for downloading <strong>${fileName}</strong>.</p>
                        ${filePath ? `<p>File path: ${filePath}</p>` : ""}
                        <p>Best regards,<br>CPerozzi Team</p>
                    </body>
                </html>
            `;
            const textBody = `Thank you for downloading ${fileName}.${filePath ? ` File path: ${filePath}` : ""}`;

            await this.mailService.send({
                to,
                subject,
                html: htmlBody,
                text: textBody,
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
            const subject = "Email Configuration Test - CPerozzi";
            const htmlBody = `
                <html>
                    <body>
                        <h2>Email Configuration Test</h2>
                        <p>This is a test email to verify that your email configuration is working correctly.</p>
                        <p><strong>Test Time:</strong> ${timestamp.toISOString()}</p>
                        <p>If you received this email, your SMTP configuration is working properly!</p>
                        <p>Best regards,<br>CPerozzi System</p>
                    </body>
                </html>
            `;
            const textBody = `This is a test email to verify that your email configuration is working correctly. Test Time: ${timestamp.toISOString()}`;

            await this.mailService.send({
                to: testEmailAddress,
                subject,
                html: htmlBody,
                text: textBody,
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
