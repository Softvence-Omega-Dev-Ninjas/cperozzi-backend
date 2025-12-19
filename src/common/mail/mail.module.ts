import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MailModule as SoftvenceMailModule } from "@softvence/mail";
import { AppMailService } from "./mail.service";

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
                const mailFrom = configService.get<string>("MAIL_FROM") || mailUser;
                const mailDisplayName =
                    configService.get<string>("MAIL_DISPLAY_NAME") || "CPerozzi";

                const formattedFrom =
                    mailFrom && mailFrom.includes("<")
                        ? mailFrom
                        : `"${mailDisplayName}" <${mailUser}>`;
                const tlsOptions = {
                    rejectUnauthorized: false,
                    servername: mailHost,
                };

                console.info("📧 Mail Configuration:", {
                    host: mailHost,
                    port: mailPort,
                    secure: mailSecure,
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
                              rejectUnauthorized: false, // Force false for self-signed certs
                          },
                      };

                return {
                    transport,
                    defaults: {
                        from: formattedFrom, // Use formatted from address that matches authenticated user
                    },
                };
            },
            inject: [ConfigService],
        }),
    ],
    providers: [AppMailService],
    exports: [AppMailService],
})
export class MailModule {}
