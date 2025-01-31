# AIWAV

AIWAV is a modern web and mobile platform that leverages cutting-edge AI technologies to deliver innovative solutions.

## Project Structure

```
AIWAV/
├── app/                    # Applications root
│   ├── cloud/             # Cloud & DevOps
│   │   └── infrastructure/# Infrastructure as Code
│   └── space/             # Frontend applications
│       ├── web/           # React web application
│       └── mobile/        # React Native mobile app
├── docs/                  # Project documentation
└── team/                  # Team information
```

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm 9 or higher
- AWS CLI configured
- Terraform 1.0 or higher

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/brad-klosterman/aiwav.git
   cd aiwav
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up infrastructure:
   ```bash
   cd app/cloud/infrastructure
   terraform init
   terraform apply
   ```

4. Start development servers:
   - Web application:
     ```bash
     npm run web
     ```
   - Mobile application:
     ```bash
     npm run mobile
     ```

## Documentation

- [Project Overview](docs/README.md)
- [Infrastructure Documentation](docs/infrastructure.md)
- [Monorepo Analysis](docs/monorepo.md)
- [Contributing Guidelines](docs/contributing.md)

## Team

See [team/README.md](team/README.md) for information about the team and roles.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.