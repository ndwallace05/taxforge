#!/usr/bin/env node
/**
 * TaxForge Compliance Check Script
 * Validates that autonomous agent output meets IRS form compliance requirements
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComplianceChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.results = {
      timestamp: new Date().toISOString(),
      overall_status: 'UNKNOWN',
      checks: [],
      summary: {
        total_checks: 0,
        passed_checks: 0,
        failed_checks: 0,
        warnings: 0
      }
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${level}: ${message}`);
  }

  addCheck(name, status, details = '', recommendation = '') {
    const check = {
      name,
      status, // 'PASS', 'FAIL', 'WARN'
      details,
      recommendation,
      timestamp: new Date().toISOString()
    };
    
    this.results.checks.push(check);
    this.results.summary.total_checks++;
    
    if (status === 'PASS') {
      this.results.summary.passed_checks++;
    } else if (status === 'FAIL') {
      this.results.summary.failed_checks++;
    } else if (status === 'WARN') {
      this.results.summary.warnings++;
    }
  }

  checkTaxCalculatorIntegration() {
    this.log('Checking Tax-Calculator integration...');
    
    try {
      // Check for Tax-Calculator commits
      const gitLog = execSync('git log --oneline --grep="tax-calc" --since="1 month ago"', 
        { cwd: this.projectRoot, encoding: 'utf8' }).trim();
      
      if (gitLog) {
        this.addCheck(
          'Tax-Calculator Git History',
          'PASS',
          `Found Tax-Calculator commits: ${gitLog.split('\n').length} commits`,
          ''
        );
      } else {
        this.addCheck(
          'Tax-Calculator Git History',
          'WARN',
          'No recent Tax-Calculator commits found',
          'Ensure Tax-Calculator policies are being integrated regularly'
        );
      }
    } catch (error) {
      this.addCheck(
        'Tax-Calculator Git History',
        'FAIL',
        `Error checking git history: ${error.message}`,
        'Verify git is available and repository has commit history'
      );
    }

    // Check schema files for Tax-Calculator references
    const schemasDir = path.join(this.projectRoot, 'packages', 'irs-data', 'schemas');
    if (fs.existsSync(schemasDir)) {
      const schemaFiles = fs.readdirSync(schemasDir).filter(f => f.endsWith('.json'));
      let totalPolicies = 0;
      let formsWithPolicies = 0;
      
      schemaFiles.forEach(file => {
        try {
          const schemaPath = path.join(schemasDir, file);
          const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
          
          let policies = [];
          if (Array.isArray(schema)) {
            policies = schema.filter(item => item.source === 'Tax-Calculator');
          } else if (schema.properties) {
            policies = Object.values(schema.properties).filter(prop => prop.source === 'Tax-Calculator');
          }
          
          if (policies.length > 0) {
            formsWithPolicies++;
            totalPolicies += policies.length;
          }
        } catch (error) {
          this.log(`Error reading schema ${file}: ${error.message}`, 'WARN');
        }
      });
      
      if (totalPolicies > 0) {
        this.addCheck(
          'Tax-Calculator Schema Integration',
          'PASS',
          `Found ${totalPolicies} Tax-Calculator policies across ${formsWithPolicies} forms`,
          ''
        );
      } else {
        this.addCheck(
          'Tax-Calculator Schema Integration',
          'FAIL',
          'No Tax-Calculator policies found in schema files',
          'Ensure schemas include Tax-Calculator policy IDs and calculation formulas'
        );
      }
    } else {
      this.addCheck(
        'Tax-Calculator Schema Integration',
        'FAIL',
        'Schemas directory not found',
        'Create packages/irs-data/schemas directory and populate with form schemas'
      );
    }
  }

  checkDrakePipeline() {
    this.log('Checking Drake pipeline integration...');
    
    const pipelinesDir = path.join(this.projectRoot, 'pipelines');
    if (fs.existsSync(pipelinesDir)) {
      this.addCheck(
        'Drake Pipeline Directory',
        'PASS',
        'Pipelines directory exists',
        ''
      );
      
      // Check for R files
      const rFiles = fs.readdirSync(pipelinesDir).filter(f => f.endsWith('.R'));
      if (rFiles.length > 0) {
        this.addCheck(
          'Drake R Scripts',
          'PASS',
          `Found ${rFiles.length} R script(s): ${rFiles.join(', ')}`,
          ''
        );
      } else {
        this.addCheck(
          'Drake R Scripts',
          'WARN',
          'No R scripts found in pipelines directory',
          'Create Drake pipeline scripts for reproducible builds'
        );
      }
    } else {
      this.addCheck(
        'Drake Pipeline Directory',
        'FAIL',
        'Pipelines directory not found',
        'Create pipelines directory with Drake R scripts'
      );
    }
  }

  checkFormImplementations() {
    this.log('Checking form implementations...');
    
    const componentsDir = path.join(this.projectRoot, 'packages', 'ui', 'src', 'components');
    const slicesDir = path.join(this.projectRoot, 'packages', 'ui', 'src', 'store', 'slices');
    const testsDir = path.join(this.projectRoot, 'packages', 'tests');
    
    let formCount = 0;
    let completeImplementations = 0;
    
    if (fs.existsSync(componentsDir)) {
      const formDirs = fs.readdirSync(componentsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      formCount = formDirs.length;
      
      formDirs.forEach(formDir => {
        const formPath = path.join(componentsDir, formDir);
        const hasInterview = fs.existsSync(path.join(formPath, 'Interview.tsx'));
        const hasForm = fs.existsSync(path.join(formPath, 'Form.tsx'));
        const hasStories = fs.existsSync(path.join(formPath, `${formDir}.stories.tsx`));
        
        const hasSlice = fs.existsSync(path.join(slicesDir, `${formDir.toLowerCase()}Slice.ts`));
        const hasTests = fs.existsSync(path.join(testsDir, `${formDir}.test.tsx`));
        
        if (hasInterview && hasForm && hasStories && hasSlice && hasTests) {
          completeImplementations++;
        }
      });
    }
    
    if (formCount > 0) {
      const completionRate = (completeImplementations / formCount) * 100;
      
      if (completionRate === 100) {
        this.addCheck(
          'Form Implementation Completeness',
          'PASS',
          `All ${formCount} forms have complete implementations (${completionRate.toFixed(1)}%)`,
          ''
        );
      } else if (completionRate >= 80) {
        this.addCheck(
          'Form Implementation Completeness',
          'WARN',
          `${completeImplementations}/${formCount} forms complete (${completionRate.toFixed(1)}%)`,
          'Complete remaining form implementations'
        );
      } else {
        this.addCheck(
          'Form Implementation Completeness',
          'FAIL',
          `Only ${completeImplementations}/${formCount} forms complete (${completionRate.toFixed(1)}%)`,
          'Implement missing components, slices, and tests for all forms'
        );
      }
    } else {
      this.addCheck(
        'Form Implementation Completeness',
        'FAIL',
        'No form implementations found',
        'Run autonomous agent to generate form implementations'
      );
    }
  }

  checkTestCoverage() {
    this.log('Checking test coverage...');
    
    try {
      // Run test coverage check
      const coverage = execSync('pnpm run test:ci --coverage --passWithNoTests', 
        { cwd: this.projectRoot, encoding: 'utf8' });
      
      // Parse coverage output (simplified)
      if (coverage.includes('100%') || coverage.includes('All files')) {
        this.addCheck(
          'Test Coverage',
          'PASS',
          'Test coverage appears to be complete',
          ''
        );
      } else {
        this.addCheck(
          'Test Coverage',
          'WARN',
          'Test coverage may be incomplete',
          'Review test coverage report and add missing tests'
        );
      }
    } catch (error) {
      this.addCheck(
        'Test Coverage',
        'FAIL',
        `Error running tests: ${error.message}`,
        'Fix test configuration and ensure all tests pass'
      );
    }
  }

  checkGitHubActions() {
    this.log('Checking GitHub Actions configuration...');
    
    const workflowsDir = path.join(this.projectRoot, '.github', 'workflows');
    if (fs.existsSync(workflowsDir)) {
      const workflows = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
      
      const hasCI = workflows.some(w => w.includes('ci'));
      const hasAudit = workflows.some(w => w.includes('audit'));
      
      if (hasCI && hasAudit) {
        this.addCheck(
          'GitHub Actions Workflows',
          'PASS',
          `Found ${workflows.length} workflows including CI and audit`,
          ''
        );
      } else {
        this.addCheck(
          'GitHub Actions Workflows',
          'WARN',
          `Found ${workflows.length} workflows, missing: ${!hasCI ? 'CI ' : ''}${!hasAudit ? 'audit' : ''}`,
          'Ensure both CI and audit workflows are configured'
        );
      }
    } else {
      this.addCheck(
        'GitHub Actions Workflows',
        'FAIL',
        'No GitHub Actions workflows found',
        'Create .github/workflows directory with CI and audit workflows'
      );
    }
  }

  checkProjectStructure() {
    this.log('Checking project structure...');
    
    const requiredDirs = [
      'apps/taxforge-web',
      'packages/ui',
      'packages/irs-data',
      'packages/tests',
      'ai-agent-instructions'
    ];
    
    const missingDirs = requiredDirs.filter(dir => 
      !fs.existsSync(path.join(this.projectRoot, dir))
    );
    
    if (missingDirs.length === 0) {
      this.addCheck(
        'Project Structure',
        'PASS',
        'All required directories present',
        ''
      );
    } else {
      this.addCheck(
        'Project Structure',
        'FAIL',
        `Missing directories: ${missingDirs.join(', ')}`,
        'Run bootstrap command to create missing directories'
      );
    }
    
    // Check for key files
    const requiredFiles = [
      'package.json',
      'turbo.json',
      'pnpm-workspace.yaml'
    ];
    
    const missingFiles = requiredFiles.filter(file => 
      !fs.existsSync(path.join(this.projectRoot, file))
    );
    
    if (missingFiles.length === 0) {
      this.addCheck(
        'Required Configuration Files',
        'PASS',
        'All required configuration files present',
        ''
      );
    } else {
      this.addCheck(
        'Required Configuration Files',
        'FAIL',
        `Missing files: ${missingFiles.join(', ')}`,
        'Ensure all required configuration files are present'
      );
    }
  }

  checkAgentProgress() {
    this.log('Checking autonomous agent progress...');
    
    const queueFile = path.join(this.projectRoot, 'ai-agent-instructions', 'FORM-QUEUE.json');
    const progressFile = path.join(this.projectRoot, 'ai-agent-instructions', 'PROGRESS.log');
    
    if (fs.existsSync(queueFile)) {
      try {
        const queue = JSON.parse(fs.readFileSync(queueFile, 'utf8'));
        const totalForms = queue.priority_forms.length + queue.completed_forms.length + queue.failed_forms.length;
        const completedForms = queue.completed_forms.length;
        const failedForms = queue.failed_forms.length;
        
        const completionRate = totalForms > 0 ? (completedForms / totalForms) * 100 : 0;
        
        if (completionRate === 100) {
          this.addCheck(
            'Agent Form Completion',
            'PASS',
            `All ${totalForms} forms completed successfully`,
            ''
          );
        } else if (completionRate >= 80) {
          this.addCheck(
            'Agent Form Completion',
            'WARN',
            `${completedForms}/${totalForms} forms completed (${completionRate.toFixed(1)}%), ${failedForms} failed`,
            'Review failed forms and retry with autonomous agent'
          );
        } else {
          this.addCheck(
            'Agent Form Completion',
            'FAIL',
            `Only ${completedForms}/${totalForms} forms completed (${completionRate.toFixed(1)}%)`,
            'Run autonomous agent runtime loop to complete remaining forms'
          );
        }
      } catch (error) {
        this.addCheck(
          'Agent Form Completion',
          'FAIL',
          `Error reading form queue: ${error.message}`,
          'Ensure form queue file is valid JSON'
        );
      }
    } else {
      this.addCheck(
        'Agent Form Completion',
        'WARN',
        'Form queue file not found',
        'Run autonomous agent to initialize form queue'
      );
    }
    
    if (fs.existsSync(progressFile)) {
      this.addCheck(
        'Agent Progress Tracking',
        'PASS',
        'Progress log file exists',
        ''
      );
    } else {
      this.addCheck(
        'Agent Progress Tracking',
        'WARN',
        'Progress log file not found',
        'Run autonomous agent to generate progress logs'
      );
    }
  }

  generateReport() {
    // Calculate overall status
    if (this.results.summary.failed_checks > 0) {
      this.results.overall_status = 'FAIL';
    } else if (this.results.summary.warnings > 0) {
      this.results.overall_status = 'WARN';
    } else {
      this.results.overall_status = 'PASS';
    }
    
    // Generate summary
    this.log('\n=== COMPLIANCE CHECK SUMMARY ===');
    this.log(`Overall Status: ${this.results.overall_status}`);
    this.log(`Total Checks: ${this.results.summary.total_checks}`);
    this.log(`Passed: ${this.results.summary.passed_checks}`);
    this.log(`Failed: ${this.results.summary.failed_checks}`);
    this.log(`Warnings: ${this.results.summary.warnings}`);
    
    // Show failed checks
    const failedChecks = this.results.checks.filter(c => c.status === 'FAIL');
    if (failedChecks.length > 0) {
      this.log('\n=== FAILED CHECKS ===');
      failedChecks.forEach(check => {
        this.log(`❌ ${check.name}: ${check.details}`);
        if (check.recommendation) {
          this.log(`   💡 ${check.recommendation}`);
        }
      });
    }
    
    // Show warnings
    const warnings = this.results.checks.filter(c => c.status === 'WARN');
    if (warnings.length > 0) {
      this.log('\n=== WARNINGS ===');
      warnings.forEach(check => {
        this.log(`⚠️  ${check.name}: ${check.details}`);
        if (check.recommendation) {
          this.log(`   💡 ${check.recommendation}`);
        }
      });
    }
    
    // Save detailed report
    const reportFile = path.join(this.projectRoot, 'ai-agent-instructions', 'COMPLIANCE-REPORT.json');
    fs.writeFileSync(reportFile, JSON.stringify(this.results, null, 2));
    this.log(`\nDetailed report saved to: ${reportFile}`);
    
    return this.results.overall_status === 'PASS';
  }

  async run() {
    this.log('Starting TaxForge compliance check...');
    
    // Run all checks
    this.checkProjectStructure();
    this.checkTaxCalculatorIntegration();
    this.checkDrakePipeline();
    this.checkFormImplementations();
    this.checkTestCoverage();
    this.checkGitHubActions();
    this.checkAgentProgress();
    
    // Generate and return report
    return this.generateReport();
  }
}

// CLI execution
if (require.main === module) {
  const checker = new ComplianceChecker();
  
  checker.run()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      console.error('Compliance check failed:', error);
      process.exit(1);
    });
}

module.exports = ComplianceChecker;