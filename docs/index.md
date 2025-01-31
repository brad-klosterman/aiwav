---
title: Documentation Index
description: Main index for AIWAV project documentation
category: Documentation
last_updated: 2024-01-31
---

# AIWAV Documentation

Welcome to the AIWAV project documentation. This index provides a comprehensive overview of all documentation available in the repository.

## Documentation Structure

```
docs/
├── architecture/       # System architecture and design decisions
├── infrastructure/     # Cloud infrastructure and deployment
├── monorepo/           # Monorepo management and configuration
├── development/        # Development guides and standards
├── applications/       # Application-specific documentation
├── operations/         # Operations and maintenance
├── team/               # Team processes and guidelines
└── repo/               # Repository management
```

## Quick Links

### Getting Started
- [Project Overview](./overview.md)
- [Development Setup](./development/getting-started.md)
- [Contributing Guidelines](./repo/contributing.md)

### Architecture & Infrastructure
- [Architecture Overview](./architecture/overview.md)
- [Infrastructure Overview](./infrastructure/overview.md)
- [Monorepo Analysis](./repo/monorepo.md)

### Development
- [Coding Standards](./development/coding-standards.md)
- [Testing Guidelines](./development/testing.md)
- [CI/CD Workflows](./development/cicd.md)

### Applications
- [Web Application](./applications/web/README.md)
- [Mobile Application](./applications/mobile/README.md)
- [Shared Components](./applications/shared/README.md)

### API & Services
- [API Documentation](./api/README.md)
- [Authentication](./api/authentication.md)
- [Endpoints](./api/endpoints.md)

### Operations
- [Deployment Guide](./operations/deployment.md)
- [Monitoring](./operations/monitoring.md)
- [Security](./operations/security.md)

### Team
- [Team Structure](./team/structure.md)
- [Communication](./team/communication.md)
- [Processes](./team/processes.md)

## Documentation Standards

### File Naming Convention
- Use lowercase with hyphens for separation
- Group related documents in subdirectories
- Include category metadata in frontmatter

### Document Structure
1. **Frontmatter**
   ```yaml
   ---
   title: Document Title
   description: Brief description
   category: Category
   last_updated: YYYY-MM-DD
   ---
   ```

2. **Content Guidelines**
   - Clear headings and subheadings
   - Code examples where applicable
   - Links to related documents
   - References section when needed

### Maintenance
- Regular updates for accuracy
- Version control alignment
- Deprecation notices when needed
- Review cycle documentation

## Contributing to Documentation

1. **Adding New Documents**
   - Follow the naming convention
   - Use the standard frontmatter
   - Update this index if needed
   - Include in appropriate category

2. **Updating Existing Documents**
   - Update the `last_updated` date
   - Maintain consistent formatting
   - Preserve existing structure
   - Update related documents

3. **Review Process**
   - Technical accuracy check
   - Grammar and style review
   - Links verification
   - Format consistency

## Related Resources
- [GitHub Wiki](https://github.com/aiwav/wiki)
- [API Documentation](https://api.aiwav.com/docs)
- [Developer Portal](https://developers.aiwav.com)

## Support
For documentation-related questions or issues:
- Create an issue in the repository
- Contact the documentation team
- Join the #documentation channel in Slack 