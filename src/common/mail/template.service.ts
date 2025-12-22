import { Injectable, Logger } from "@nestjs/common";
import { existsSync, readFileSync } from "fs";
import { join, resolve } from "path";

export interface TemplateData {
    [key: string]: any;
}

@Injectable()
export class TemplateService {
    private readonly logger = new Logger(TemplateService.name);
    private readonly templatesPath: string;

    constructor() {
        // Try to find templates directory in both development and production
        // In development: templates are in src/common/mail/templates
        // In production: templates should be in dist/common/mail/templates (after build)
        const cwd = process.cwd();
        const distPath = join(__dirname, "templates");
        const srcPath = resolve(cwd, "src", "common", "mail", "templates");
        const distPathFromCwd = resolve(cwd, "dist", "common", "mail", "templates");

        // Check which path exists (prioritize dist in production, src in development)
        if (existsSync(distPath)) {
            this.templatesPath = distPath;
        } else if (existsSync(distPathFromCwd)) {
            this.templatesPath = distPathFromCwd;
        } else if (existsSync(srcPath)) {
            this.templatesPath = srcPath;
        } else {
            // Fallback to src path (for development)
            this.templatesPath = srcPath;
            this.logger.warn(
                `Templates directory not found. Tried: ${distPath}, ${distPathFromCwd}, ${srcPath}`,
            );
        }

        this.logger.log(`📧 Template service initialized. Templates path: ${this.templatesPath}`);
    }

    /**
     * Load a template file
     */
    private loadTemplate(templateName: string, extension: string = "html"): string {
        try {
            const templatePath = join(this.templatesPath, `${templateName}.${extension}`);
            return readFileSync(templatePath, "utf-8");
        } catch (error) {
            this.logger.error(`Failed to load template: ${templateName}.${extension}`, error);
            throw new Error(`Template not found: ${templateName}.${extension}`);
        }
    }

    /**
     * Simple template renderer with variable substitution and conditionals
     */
    private renderTemplate(template: string, data: TemplateData): string {
        let rendered = template;

        // Handle conditionals: {{#if variable}}...{{/if}}
        const conditionalRegex = /\{\{#if\s+(\w+)\}\}([\s\S]*?)\{\{\/if\}\}/g;
        rendered = rendered.replace(conditionalRegex, (match, variable, content) => {
            return data[variable] ? content : "";
        });

        // Handle variable substitution: {{variable}}
        const variableRegex = /\{\{(\w+)\}\}/g;
        rendered = rendered.replace(variableRegex, (match, variable) => {
            return data[variable] !== undefined && data[variable] !== null
                ? String(data[variable])
                : "";
        });

        return rendered;
    }

    /**
     * Render an HTML email template
     */
    renderHtml(templateName: string, data: TemplateData): string {
        // Load base template
        const baseTemplate = this.loadTemplate("base", "html");

        // Load content template
        const contentTemplate = this.loadTemplate(templateName, "html");

        // Merge data with defaults
        const templateData: TemplateData = {
            subject: data.subject || "Email from CPerozzi",
            displayName: data.displayName || "CPerozzi",
            year: new Date().getFullYear(),
            content: this.renderTemplate(contentTemplate, data),
            ...data,
        };

        // Render the full template
        return this.renderTemplate(baseTemplate, templateData);
    }

    /**
     * Render a plain text email template
     */
    renderText(templateName: string, data: TemplateData): string {
        try {
            const textTemplatePath = join(this.templatesPath, "text", `${templateName}.txt`);
            const textTemplate = readFileSync(textTemplatePath, "utf-8");
            return this.renderTemplate(textTemplate, data);
        } catch (error) {
            this.logger.warn(`Text template not found for ${templateName}, generating from HTML`);
            // Fallback: generate text from HTML by stripping tags
            const html = this.renderHtml(templateName, data);
            return html
                .replace(/<[^>]*>/g, "")
                .replace(/\s+/g, " ")
                .trim();
        }
    }

    /**
     * Render both HTML and text versions of an email
     */
    renderEmail(templateName: string, data: TemplateData): { html: string; text: string } {
        return {
            html: this.renderHtml(templateName, data),
            text: this.renderText(templateName, data),
        };
    }
}
