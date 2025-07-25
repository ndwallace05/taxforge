const fs = require('fs');
const path = require('path');

// Read the IRS forms list
const formsListPath = path.join(__dirname, '..', 'ai-agent-instructions', 'IRS-FORMS-LIST.txt');
const queuePath = path.join(__dirname, '..', 'ai-agent-instructions', 'FORM-QUEUE.json');

function populateFormQueue() {
  console.log('Reading IRS forms list...');
  const formsListContent = fs.readFileSync(formsListPath, 'utf8');
  const formsList = formsListContent.trim().split('\n').filter(line => line.trim());
  
  console.log(`Found ${formsList.length} forms in IRS-FORMS-LIST.txt`);
  
  // Read existing queue to preserve completed forms
  let existingQueue = {
    completed_forms: [],
    failed_forms: []
  };
  
  if (fs.existsSync(queuePath)) {
    try {
      existingQueue = JSON.parse(fs.readFileSync(queuePath, 'utf8'));
      console.log(`Preserving ${existingQueue.completed_forms.length} completed forms`);
      console.log(`Preserving ${existingQueue.failed_forms.length} failed forms`);
    } catch (error) {
      console.log('Error reading existing queue, starting fresh:', error.message);
    }
  }
  
  // Get list of already processed forms
  const processedForms = new Set();
  existingQueue.completed_forms.forEach(form => processedForms.add(form.form_id));
  existingQueue.failed_forms.forEach(form => processedForms.add(form.form_id));
  
  // Create priority forms list with all remaining forms
  const priorityForms = [];
  let priority = 1;
  
  formsList.forEach(formId => {
    if (!processedForms.has(formId)) {
      // Determine complexity based on form type
      let complexity = 'medium';
      let estimatedLines = 30;
      let dependencies = [];
      
      if (formId.startsWith('Schedule-') || formId.includes('1040')) {
        complexity = 'high';
        estimatedLines = 50;
        if (formId !== '1040') {
          dependencies = ['1040'];
        }
      } else if (formId.startsWith('1099-') || formId.startsWith('W-')) {
        complexity = 'low';
        estimatedLines = 15;
      } else if (formId.startsWith('1120') || formId.startsWith('1065')) {
        complexity = 'high';
        estimatedLines = 80;
      }
      
      priorityForms.push({
        form_id: formId,
        name: getFormName(formId),
        priority: priority++,
        status: 'pending',
        estimated_lines: estimatedLines,
        complexity: complexity,
        dependencies: dependencies,
        last_attempt: null,
        retry_count: 0
      });
    }
  });
  
  // Create the complete queue
  const formQueue = {
    metadata: {
      created_at: new Date().toISOString(),
      last_updated: new Date().toISOString(),
      agent_version: '1.0.0',
      total_forms_target: formsList.length,
      completion_percentage: Math.round((existingQueue.completed_forms.length / formsList.length) * 100)
    },
    priority_forms: priorityForms,
    completed_forms: existingQueue.completed_forms || [],
    failed_forms: [], // Reset failed forms to retry them
    processing_stats: {
      total_processed: existingQueue.completed_forms.length,
      successful_completions: existingQueue.completed_forms.length,
      failed_attempts: 0,
      average_processing_time_minutes: 0,
      last_processing_session: null
    },
    agent_config: {
      max_retry_attempts: 3,
      retry_delay_minutes: 5,
      batch_size: 1,
      parallel_processing: false,
      auto_commit: true,
      snapshot_updates: true,
      validation_strict_mode: true
    },
    compliance_requirements: {
      tax_calculator_integration: true,
      drake_pipeline_validation: true,
      test_coverage_minimum: 100,
      storybook_stories_required: true,
      e_file_xml_validation: true,
      documentation_required: true
    }
  };
  
  // Write the updated queue
  fs.writeFileSync(queuePath, JSON.stringify(formQueue, null, 2));
  
  console.log(`\n✅ Form queue updated successfully!`);
  console.log(`📊 Total forms: ${formsList.length}`);
  console.log(`✅ Completed: ${existingQueue.completed_forms.length}`);
  console.log(`⏳ Pending: ${priorityForms.length}`);
  console.log(`🔄 Failed forms reset for retry`);
  console.log(`📈 Completion: ${Math.round((existingQueue.completed_forms.length / formsList.length) * 100)}%`);
}

function getFormName(formId) {
  const formNames = {
    '1040': 'U.S. Individual Income Tax Return',
    '1040-SR': 'U.S. Tax Return for Seniors',
    '1040-NR': 'U.S. Nonresident Alien Income Tax Return',
    '1040-X': 'Amended U.S. Individual Income Tax Return',
    '1040-V': 'Payment Voucher',
    '1040-ES': 'Estimated Tax for Individuals',
    'Schedule-A': 'Itemized Deductions',
    'Schedule-B': 'Interest and Ordinary Dividends',
    'Schedule-C': 'Profit or Loss From Business',
    'Schedule-D': 'Capital Gains and Losses',
    'Schedule-E': 'Supplemental Income and Loss',
    'Schedule-F': 'Profit or Loss From Farming',
    '1099-INT': 'Interest Income',
    '1099-DIV': 'Dividends and Distributions',
    '1099-MISC': 'Miscellaneous Income',
    '1099-NEC': 'Nonemployee Compensation',
    'W-2': 'Wage and Tax Statement',
    'W-4': 'Employee\'s Withholding Certificate',
    '941': 'Employer\'s Quarterly Federal Tax Return',
    '940': 'Employer\'s Annual Federal Unemployment (FUTA) Tax Return',
    '1065': 'U.S. Return of Partnership Income',
    '1120': 'U.S. Corporation Income Tax Return',
    '1120S': 'U.S. Income Tax Return for an S Corporation'
  };
  
  return formNames[formId] || `IRS Form ${formId}`;
}

if (require.main === module) {
  populateFormQueue();
}

module.exports = { populateFormQueue };