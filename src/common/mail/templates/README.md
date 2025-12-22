# Email Templates

This directory contains HTML and text email templates for the CPerozzi application.

## Structure

```
templates/
├── base.html              # Base template with header, footer, and styling
├── test-email.html        # Test email configuration template
├── file-download.html     # File download confirmation template
└── text/                  # Plain text versions
    ├── test-email.txt
    └── file-download.txt
```

## Template Variables

Templates use a simple variable substitution syntax: `{{variableName}}`

### Base Template Variables

- `{{subject}}` - Email subject
- `{{displayName}}` - Company/application display name
- `{{year}}` - Current year
- `{{content}}` - Main email content (injected from specific templates)

### Test Email Template Variables

- `{{testTime}}` - ISO timestamp of the test

### File Download Template Variables

- `{{fileName}}` - Name of the downloaded file
- `{{filePath}}` - Optional file path (conditional: `{{#if filePath}}...{{/if}}`)

## Adding New Templates

1. Create an HTML template file in this directory (e.g., `welcome.html`)
2. Create a corresponding text template in `text/welcome.txt`
3. Use the template in `mail.service.ts`:

```typescript
const { html, text } = this.templateService.renderEmail("welcome", {
    subject: "Welcome!",
    displayName: "CPerozzi",
    userName: "John Doe",
});
```

## Template Syntax

- Variables: `{{variableName}}`
- Conditionals: `{{#if variableName}}...content...{{/if}}`

## Styling

The base template includes responsive CSS styling that works across email clients. The design uses a modern gradient header and clean, readable content area.
