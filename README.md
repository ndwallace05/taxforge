# TaxForge - Complete IRS Form Processing System

A production-grade tax preparation application that mirrors myTAXprepoffice.com, supporting **100% of IRS federal forms** with pixel-perfect UI components, comprehensive validation, and automated testing.

## 🏗️ Architecture

- **Monorepo**: TurboRepo with pnpm workspaces
- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: TailwindCSS 3.4 (no custom CSS)
- **State**: Redux Toolkit + React Hook Form + Zod
- **Storage**: IndexedDB via Dexie (auto-save every 3s)
- **Testing**: Jest + React Testing Library + Playwright
- **Accessibility**: WCAG 2.2 AA compliant

## 📁 Project Structure

```
├── apps/
│   └── taxforge-web/          # Next.js application
├── packages/
│   ├── ui/                    # Shared React components + Storybook
│   ├── irs-data/             # JSON schemas, Zod validation, XSD files
│   └── tests/                # Centralized test suite
├── ai-agent-instructions/     # Autonomous build tracking
│   ├── IRS-FORMS-LIST.txt    # Complete form queue
│   ├── PROGRESS.log          # Completion tracking
│   ├── BLOCKERS.log          # Issue resolution log
│   └── RUN.log               # Build execution log
└── docs/                     # Form-specific documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone and install
git clone <repository-url>
cd taxforge-monorepo
pnpm install

# Setup pre-commit hooks
pnpm prepare
```

### Development

```bash
# Start all development servers
pnpm dev

# Start specific services
pnpm dev --filter=taxforge-web    # Next.js app
pnpm storybook                    # Component library
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests in CI mode
pnpm test:ci

# Test specific form
pnpm run test:form -- 1040

# E2E tests
pnpm exec playwright test
```

### Building

```bash
# Build all packages
pnpm build

# Build for production
pnpm build --filter=taxforge-web
```

## 📋 Supported Forms

TaxForge supports **100% of IRS federal forms** organized by category:

- **Individual Core & Schedules**: 1040, 1040-SR, 1040-NR, Schedules A-SE, etc.
- **Business Entities**: 1065, 1120 series, 990 series, etc.
- **Payroll & Employment**: 940, 941, 943, 944, 945, etc.
- **Information Returns**: 1099 series, 1098 series, W-2, W-4, etc.
- **Credits & Deductions**: 1116, 2106, 3800, 4562, 6251, 8812, etc.
- **International**: 5471, 5472, 8865, 8870, etc.

[View complete list](./ai-agent-instructions/IRS-FORMS-LIST.txt)

## 🎨 Design System

### Visual DNA (myTAXprepoffice.com clone)

- **Top bar**: `#1e3a8a` (56px), white logo
- **Left sidebar**: `#f8fafc` (240px), `#e2e8f0` border
- **Main pane**: `#ffffff`, 24px padding, max-width 1280px
- **Form tabs**: Interview | Forms | Review | E-File | Signature
- **Accessibility**: Full keyboard navigation, ARIA labels

### Components

- Accordion form selectors with pill badges
- Inline editable client cards
- Collapsible fieldsets for complex forms
- Print-optimized stylesheets
- SSN/EIN masking (`XXX-XX-1234`)

## 🔄 Autonomous Build Process

TaxForge uses an autonomous agent system to build forms:

1. **Queue Processing**: Forms processed from `IRS-FORMS-LIST.txt`
2. **8-Step Pipeline**: Discovery → Schema → Redux → UI → Validation → Tests → XML → Docs
3. **Quality Gates**: 100% field coverage, passing tests, valid XML
4. **Auto-commit**: `feat(forms): {form} – 100% lines & tests ✔️`
5. **Progress Tracking**: Real-time logging in `ai-agent-instructions/`

### Manual Form Addition

```bash
# Set form environment variable
export FORM=1040

# Run the autonomous pipeline
pnpm run build:form -- 1040
```

## 🧪 Testing Strategy

- **Unit Tests**: 100% field coverage per form
- **Integration Tests**: Redux state management
- **E2E Tests**: Complete user workflows
- **Visual Tests**: Storybook + Chromatic
- **Accessibility Tests**: axe-core integration

## 📊 Data Sources

- **IRS MeF Business Rules 2024 v4.1**
- **IRS Fillable Forms JSON**: https://forms.irs.gov/pub/fillable-forms-json
- **Tax-Calculator**: https://github.com/PSLmodels/Tax-Calculator
- **Drake JSON Schema**: Cross-platform compatibility

## 🚢 Deployment

```bash
# Production build
pnpm build

# Run production server
pnpm start

# Docker deployment
docker build -t taxforge .
docker run -p 3000:3000 taxforge
```

## 📈 Monitoring

- **GitHub Actions**: Automated CI/CD
- **Codecov**: Test coverage reporting
- **Chromatic**: Visual regression testing
- **Performance**: Core Web Vitals tracking

## 🤝 Contributing

1. Forms are built autonomously via the agent system
2. Human review required only for PR merges
3. Follow conventional commits: `feat(forms): add {form}`
4. Ensure 100% test coverage before submission

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

---

**Built with ❤️ by TaxForge-Engineer**  
_Autonomous. Comprehensive. Production-ready._
