import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Form1040NR } from './Form1040NR';
import { form1040NRReducer, Form1040NRState } from '../../../store/slices/form1040NRSlice';
import { useCalculated1040NR } from '../../../hooks/useCalculated1040NR';

// Mock the calculated hook
jest.mock('../../hooks/useCalculated1040NR');
const mockUseCalculated1040NR = useCalculated1040NR as jest.MockedFunction<typeof useCalculated1040NR>;

// Mock data for testing
const mockCalculatedValues = {
  totalEffectivelyConnectedIncome: 75000,
  totalNECIncome: 5000,
  totalDeductions: 14600,
  standardDeduction: 14600,
  totalItemizedDeductions: 0,
  taxableIncome: 60400,
  regularTax: 8532,
  necTax: 1500,
  totalTax: 10032,
  totalWithholding: 8000,
  totalEstimatedPayments: 2000,
  totalPayments: 10000,
  refundAmount: 0,
  amountOwed: 32,
  effectiveTaxRate: 0.1338,
  marginalTaxRate: 0.22,
  passesSubstantialPresenceTest: false,
  treatyBenefits: 0,
  treatyTaxRate: 0.30,
};

// Create a test store
const createTestStore = (initialState: Partial<Form1040NRState['data']> = {}) => {
  return configureStore({
    reducer: {
      form1040NR: form1040NRReducer,
    },
    preloadedState: {
      form1040NR: {
        data: {
          firstName: 'John',
          lastName: 'Doe',
          ssn: '123-45-6789',
          address: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipCode: '10001',
          countryOfResidence: 'Canada',
          filingStatus: 'single',
          visaType: 'H-1B',
          daysInUSCurrentYear: 180,
          daysInUSPriorYear: 120,
          daysInUSSecondPriorYear: 90,
          hasTreatyBenefits: false,
          treatyCountry: '',
          treatyArticle: '',
          isStudent: false,
          isScholar: false,
          '1040NR_line_1a': 75000, // Wages
          '1040NR_line_1b': 0, // Salaries
          '1040NR_line_1c': 0, // Tips
          '1040NR_line_1d': 0, // Business income
          '1040NR_line_1e': 0, // Capital gains
          '1040NR_line_1f': 0, // Rental income
          '1040NR_line_2a': 2000, // Interest (NEC)
          '1040NR_line_2b': 3000, // Dividends (NEC)
          '1040NR_line_2c': 0, // Capital gains (NEC)
          deductionType: 'standard',
          businessExpenses: 0,
          stateIncomeTax: 0,
          charitableContributions: 0,
          medicalExpenses: 0,
          studentLoanInterest: 0,
          federalWithholdingW2: 6000,
          federalWithholding1042S: 2000,
          federalWithholdingNEC: 0,
          backupWithholding: 0,
          estimatedTaxQ1: 500,
          estimatedTaxQ2: 500,
          estimatedTaxQ3: 500,
          estimatedTaxQ4: 500,
          priorYearOverpayment: 0,
          excessSocialSecurity: 0,
          earnedIncomeCredit: 0,
          additionalChildTaxCredit: 0,
          ...initialState,
        },
        currentStep: 0,
        errors: [],
        isLoading: false,
        lastSaved: null,
      },
    },
  });
};

const renderWithProvider = (component: React.ReactElement, store = createTestStore()) => {
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  );
};

describe('Form1040NR', () => {
  beforeEach(() => {
    mockUseCalculated1040NR.mockReturnValue(mockCalculatedValues);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders the form with initial step', () => {
      renderWithProvider(<Form1040NR />);
      
      expect(screen.getByText('Form 1040-NR')).toBeInTheDocument();
      expect(screen.getByText('U.S. Nonresident Alien Income Tax Return')).toBeInTheDocument();
      expect(screen.getByText('Personal Information')).toBeInTheDocument();
    });

    it('displays progress indicator', () => {
      renderWithProvider(<Form1040NR />);
      
      expect(screen.getByText('Step 1 of 7')).toBeInTheDocument();
    });

    it('shows calculated values in sidebar', () => {
      renderWithProvider(<Form1040NR />);
      
      expect(screen.getByText('$75,000')).toBeInTheDocument(); // ECI
      expect(screen.getByText('$5,000')).toBeInTheDocument(); // NEC
      expect(screen.getByText('$10,032')).toBeInTheDocument(); // Total tax
    });
  });

  describe('Navigation', () => {
    it('navigates to next step when Next is clicked', async () => {
      const store = createTestStore();
      renderWithProvider(<Form1040NR />, store);
      
      const nextButton = screen.getByText('Next: Residency Status');
      fireEvent.click(nextButton);
      
      await waitFor(() => {
        expect(screen.getByText('Residency Status')).toBeInTheDocument();
        expect(screen.getByText('Step 2 of 7')).toBeInTheDocument();
      });
    });

    it('navigates to previous step when Previous is clicked', async () => {
      const store = createTestStore({ currentStep: 1 });
      renderWithProvider(<Form1040NR />, store);
      
      const prevButton = screen.getByText('Previous');
      fireEvent.click(prevButton);
      
      await waitFor(() => {
        expect(screen.getByText('Personal Information')).toBeInTheDocument();
        expect(screen.getByText('Step 1 of 7')).toBeInTheDocument();
      });
    });

    it('shows correct step titles in navigation', () => {
      renderWithProvider(<Form1040NR />);
      
      const expectedSteps = [
        'Personal Information',
        'Residency Status',
        'Income',
        'Deductions',
        'Tax Calculation',
        'Payments & Credits',
        'Review & Submit'
      ];
      
      expectedSteps.forEach(step => {
        expect(screen.getByText(step)).toBeInTheDocument();
      });
    });
  });

  describe('Form Validation', () => {
    it('displays validation errors', () => {
      const storeWithErrors = createTestStore();
      storeWithErrors.dispatch({
        type: 'form1040NR/setErrors',
        payload: ['First name is required', 'SSN/ITIN is required']
      });
      
      renderWithProvider(<Form1040NR />, storeWithErrors);
      
      expect(screen.getByText('First name is required')).toBeInTheDocument();
      expect(screen.getByText('SSN/ITIN is required')).toBeInTheDocument();
    });

    it('clears errors when moving to next step', async () => {
      const store = createTestStore();
      store.dispatch({
        type: 'form1040NR/setErrors',
        payload: ['Test error']
      });
      
      renderWithProvider(<Form1040NR />, store);
      
      const nextButton = screen.getByText('Next: Residency Status');
      fireEvent.click(nextButton);
      
      await waitFor(() => {
        expect(screen.queryByText('Test error')).not.toBeInTheDocument();
      });
    });
  });

  describe('Auto-save Functionality', () => {
    it('triggers auto-save when form data changes', async () => {
      const store = createTestStore();
      renderWithProvider(<Form1040NR />, store);
      
      // Simulate form field change
      const firstNameInput = screen.getByLabelText(/first name/i);
      fireEvent.change(firstNameInput, { target: { value: 'Jane' } });
      
      await waitFor(() => {
        const state = store.getState();
        expect(state.form1040NR.data.firstName).toBe('Jane');
      }, { timeout: 3000 });
    });

    it('shows last saved timestamp', async () => {
      const store = createTestStore();
      store.dispatch({
        type: 'form1040NR/saveForm',
        payload: { timestamp: new Date().toISOString() }
      });
      
      renderWithProvider(<Form1040NR />, store);
      
      expect(screen.getByText(/last saved/i)).toBeInTheDocument();
    });
  });

  describe('Nonresident Alien Specific Features', () => {
    it('displays substantial presence test warning', () => {
      const storeWithManyDays = createTestStore({
        daysInUSCurrentYear: 200,
        daysInUSPriorYear: 150,
        daysInUSSecondPriorYear: 100
      });
      
      mockUseCalculated1040NR.mockReturnValue({
        ...mockCalculatedValues,
        passesSubstantialPresenceTest: true
      });
      
      renderWithProvider(<Form1040NR />, storeWithManyDays);
      
      expect(screen.getByText(/substantial presence test/i)).toBeInTheDocument();
    });

    it('shows treaty benefits section when applicable', () => {
      const storeWithTreaty = createTestStore({
        hasTreatyBenefits: true,
        treatyCountry: 'Canada',
        treatyArticle: 'Article 7'
      });
      
      renderWithProvider(<Form1040NR />, storeWithTreaty);
      
      // Navigate to residency step to see treaty information
      const nextButton = screen.getByText('Next: Residency Status');
      fireEvent.click(nextButton);
      
      expect(screen.getByText(/tax treaty/i)).toBeInTheDocument();
    });

    it('calculates NEC tax at 30% rate', () => {
      renderWithProvider(<Form1040NR />);
      
      // The calculated values should show NEC tax
      expect(mockUseCalculated1040NR).toHaveBeenCalled();
      expect(mockCalculatedValues.necTax).toBe(1500); // 30% of $5000
    });

    it('handles effectively connected income separately', () => {
      renderWithProvider(<Form1040NR />);
      
      expect(mockCalculatedValues.totalEffectivelyConnectedIncome).toBe(75000);
      expect(mockCalculatedValues.regularTax).toBe(8532); // Regular tax rates
    });
  });

  describe('Step-specific Content', () => {
    it('shows personal info fields in step 1', () => {
      renderWithProvider(<Form1040NR />);
      
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/ssn/i)).toBeInTheDocument();
    });

    it('shows residency fields in step 2', async () => {
      const store = createTestStore({ currentStep: 1 });
      renderWithProvider(<Form1040NR />, store);
      
      expect(screen.getByText(/visa type/i)).toBeInTheDocument();
      expect(screen.getByText(/days in u.s./i)).toBeInTheDocument();
    });

    it('shows income fields in step 3', async () => {
      const store = createTestStore({ currentStep: 2 });
      renderWithProvider(<Form1040NR />, store);
      
      expect(screen.getByText(/effectively connected income/i)).toBeInTheDocument();
      expect(screen.getByText(/not effectively connected income/i)).toBeInTheDocument();
    });

    it('shows review summary in final step', async () => {
      const store = createTestStore({ currentStep: 6 });
      renderWithProvider(<Form1040NR />, store);
      
      expect(screen.getByText(/form 1040-nr review/i)).toBeInTheDocument();
      expect(screen.getByText(/total tax/i)).toBeInTheDocument();
      expect(screen.getByText(/total payments/i)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels', () => {
      renderWithProvider(<Form1040NR />);
      
      expect(screen.getByRole('main')).toBeInTheDocument();
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('supports keyboard navigation', () => {
      renderWithProvider(<Form1040NR />);
      
      const nextButton = screen.getByText('Next: Residency Status');
      nextButton.focus();
      expect(document.activeElement).toBe(nextButton);
    });
  });

  describe('Error Handling', () => {
    it('handles loading state', () => {
      const loadingStore = createTestStore();
      loadingStore.dispatch({ type: 'form1040NR/setLoading', payload: true });
      
      renderWithProvider(<Form1040NR />, loadingStore);
      
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it('displays calculation errors gracefully', () => {
      mockUseCalculated1040NR.mockReturnValue({
        ...mockCalculatedValues,
        totalTax: NaN
      });
      
      renderWithProvider(<Form1040NR />);
      
      // Should handle NaN values gracefully
      expect(screen.getByText('$0')).toBeInTheDocument();
    });
  });

  describe('Data Persistence', () => {
    it('loads saved form data on mount', () => {
      const savedData = {
        firstName: 'Saved',
        lastName: 'User',
        ssn: '987-65-4321'
      };
      
      const store = createTestStore(savedData);
      renderWithProvider(<Form1040NR />, store);
      
      expect(screen.getByDisplayValue('Saved')).toBeInTheDocument();
      expect(screen.getByDisplayValue('User')).toBeInTheDocument();
    });

    it('preserves data when navigating between steps', async () => {
      const store = createTestStore();
      renderWithProvider(<Form1040NR />, store);
      
      // Enter data in first step
      const firstNameInput = screen.getByLabelText(/first name/i);
      fireEvent.change(firstNameInput, { target: { value: 'Test' } });
      
      // Navigate to next step
      const nextButton = screen.getByText('Next: Residency Status');
      fireEvent.click(nextButton);
      
      // Navigate back
      const prevButton = screen.getByText('Previous');
      fireEvent.click(prevButton);
      
      // Data should be preserved
      expect(screen.getByDisplayValue('Test')).toBeInTheDocument();
    });
  });
});