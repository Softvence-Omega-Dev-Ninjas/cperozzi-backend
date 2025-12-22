import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MailModule as SoftvenceMailModule } from "@softvence/mail";
import { AppMailService } from "./mail.service";
import { TemplateService } from "./template.service";

@Module({
    imports: [
        ConfigModule,
        SoftvenceMailModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => {
                const mailUser = configService.get<string>("MAIL_USER");
                let mailPass = configService.get<string>("MAIL_PASS") || "";
                mailPass = mailPass.replace(/^["']|["']$/g, "");
                const mailHost = configService.get<string>("MAIL_HOST");
                const mailPortStr = configService.get<string>("MAIL_PORT");
                const mailPort = mailPortStr ? parseInt(mailPortStr, 10) : 587;
                const mailSecure = configService.get<string>("MAIL_SECURE") === "true";
                const mailDisplayName =
                    configService.get<string>("MAIL_DISPLAY_NAME") || "CPerozzi";

                if (!mailUser) {
                    throw new Error("MAIL_USER is required for email configuration");
                }
                if (!mailPass) {
                    throw new Error("MAIL_PASS is required for email configuration");
                }

                let displayName = mailDisplayName;
                const mailFrom = configService.get<string>("MAIL_FROM");
                if (mailFrom && mailFrom.includes("<")) {
                    const match = mailFrom.match(/^"?(.+?)"?\s*<(.+?)>$/);
                    if (match) {
                        displayName = match[1].trim() || mailDisplayName;
                    }
                }

                const formattedFrom = `"${displayName}" <${mailUser}>`;
                const tlsOptions = {
                    rejectUnauthorized: false,
                    servername: mailHost,
                };

                console.info("📧 Mail Configuration:", {
                    host: mailHost,
                    port: mailPort,
                    secure: mailSecure,
                    user: mailUser,
                    from: formattedFrom,
                    tlsRejectUnauthorized: false,
                    nodeTlsRejectUnauthorized: process.env.NODE_TLS_REJECT_UNAUTHORIZED,
                    tlsOptions,
                });

                const transport = mailHost
                    ? {
                          host: mailHost,
                          port: mailPort,
                          secure: mailSecure,
                          auth: {
                              user: mailUser,
                              pass: mailPass,
                          },
                          tls: {
                              rejectUnauthorized: false,
                              checkServerIdentity: () => undefined,
                          },
                          requireTLS: !mailSecure,
                          connectionTimeout: 10000,
                          greetingTimeout: 10000,
                          socketTimeout: 10000,
                          debug: process.env.NODE_ENV === "development",
                          ignoreTLS: false,
                      }
                    : {
                          service: "gmail",
                          auth: {
                              user: mailUser,
                              pass: mailPass,
                          },
                          tls: {
                              rejectUnauthorized: false,
                          },
                      };

                return {
                    transport,
                    defaults: {
                        from: formattedFrom,
                    },
                };
            },
            inject: [ConfigService],
        }),
    ],
    providers: [AppMailService, TemplateService],
    exports: [AppMailService],
})
export class MailModule {}
