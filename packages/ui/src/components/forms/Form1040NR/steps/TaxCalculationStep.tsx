import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import { Button } from '../../../ui/button';
import { Alert, AlertDescription } from '../../../ui/alert';
import { Separator } from '../../../ui/separator';
import { Badge } from '../../../ui/badge';
import { Progress } from '../../../ui/progress';
// import { ChevronLeft, ChevronRight, Calculator, TrendingUp, DollarSign, Info, AlertTriangle, FileText } from 'lucide-react';
import { updateField } from '../../../../store/slices/form1040NRSlice';
import { Calculated1040NRValues } from '../../../../hooks/useCalculated1040NR';

export interface TaxCalculationStepProps {
  data: any;
  calculated: Calculated1040NRValues;
  errors: string[];
  readOnly?: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

export const TaxCalculationStep: React.FC<TaxCalculationStepProps> = ({
  data,
  calculated,
  errors,
  readOnly = false,
  onNext,
  onPrevious,
}) => {
  const dispatch = useDispatch();

  const handleFieldChange = (field: string, value: any) => {
    if (!readOnly) {
      dispatch(updateField({ field, value }));
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${(value * 100).toFixed(1)}%`;
  };

  const isFormValid = () => {
    return true; // Tax calculation is mostly computed, minimal validation needed
  };

  return (
    <div className="space-y-6">
      {/* Tax Calculation Overview */}
      <Alert className="border-blue-200 bg-blue-50">
        <span className="text-blue-600">🧮</span>
        <AlertDescription className="text-blue-800">
          <strong>Dual Tax System:</strong> As a nonresident alien, you have two types of tax calculations: 
          regular tax rates on effectively connected income and flat 30% (or treaty rate) on 
          not effectively connected income.
        </AlertDescription>
      </Alert>

      {/* Taxable Income Calculation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="text-green-600">💰</span>
            <span>Taxable Income Calculation</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Effectively Connected Income</Label>
              <div className="text-lg font-semibold text-green-600">
                {formatCurrency(calculated.totalEffectivelyConnectedIncome)}
              </div>
              <p className="text-xs text-gray-600">Subject to regular tax rates</p>
            </div>
            <div className="space-y-2">
              <Label>Total Deductions</Label>
              <div className="text-lg font-semibold text-blue-600">
                -{formatCurrency(calculated.totalDeductions)}
              </div>
              <p className="text-xs text-gray-600">
                {data.deductionType === 'standard' ? 'Standard deduction' : 'Itemized deductions'}
              </p>
            </div>
          </div>

          <Separator />

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-blue-800">Taxable Income (ECI):</p>
                <p className="text-sm text-blue-600">Effectively Connected Income - Deductions</p>
              </div>
              <span className="text-2xl font-bold text-blue-700">
                {formatCurrency(calculated.taxableIncome)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tax on Effectively Connected Income */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="text-blue-600">🧮</span>
            <span>Tax on Effectively Connected Income</span>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Regular Rates
            </Badge>
          </CardTitle>
          <p className="text-sm text-gray-600">
            Calculated using the same tax brackets as U.S. residents.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Tax Brackets Visualization */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">2024 Tax Brackets ({data.filingStatus || 'Single'})</h4>
            <div className="space-y-2">
              {[
                { rate: 0.10, min: 0, max: data.filingStatus === 'marriedFilingJointly' ? 23200 : 11600, color: 'bg-green-200' },
                { rate: 0.12, min: data.filingStatus === 'marriedFilingJointly' ? 23200 : 11600, max: data.filingStatus === 'marriedFilingJointly' ? 94300 : 47150, color: 'bg-yellow-200' },
                { rate: 0.22, min: data.filingStatus === 'marriedFilingJointly' ? 94300 : 47150, max: data.filingStatus === 'marriedFilingJointly' ? 201050 : 100525, color: 'bg-orange-200' },
                { rate: 0.24, min: data.filingStatus === 'marriedFilingJointly' ? 201050 : 100525, max: data.filingStatus === 'marriedFilingJointly' ? 383900 : 191950, color: 'bg-red-200' },
                { rate: 0.32, min: data.filingStatus === 'marriedFilingJointly' ? 383900 : 191950, max: data.filingStatus === 'marriedFilingJointly' ? 487450 : 243725, color: 'bg-purple-200' },
                { rate: 0.35, min: data.filingStatus === 'marriedFilingJointly' ? 487450 : 243725, max: data.filingStatus === 'marriedFilingJointly' ? 731200 : 609350, color: 'bg-indigo-200' },
                { rate: 0.37, min: data.filingStatus === 'marriedFilingJointly' ? 731200 : 609350, max: Infinity, color: 'bg-gray-300' }
              ].map((bracket, index) => {
                const applicableIncome = Math.max(0, Math.min(calculated.taxableIncome, bracket.max) - bracket.min);
                const isApplicable = calculated.taxableIncome > bracket.min;
                
                return (
                  <div key={index} className={`p-3 rounded-lg border ${isApplicable ? bracket.color : 'bg-gray-50'}`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{formatPercentage(bracket.rate)}</span>
                        <span className="text-sm text-gray-600 ml-2">
                          {formatCurrency(bracket.min)} - {bracket.max === Infinity ? '∞' : formatCurrency(bracket.max)}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">
                          {isApplicable ? formatCurrency(applicableIncome * bracket.rate) : '$0'}
                        </div>
                        <div className="text-xs text-gray-600">
                          on {formatCurrency(applicableIncome)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Separator />

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-green-800">Tax on Effectively Connected Income:</span>
              <span className="text-xl font-bold text-green-700">
                {formatCurrency(calculated.regularTax)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-green-700">Effective Tax Rate:</span>
              <span className="font-medium text-green-600">
                {formatPercentage(calculated.effectiveTaxRate)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-green-700">Marginal Tax Rate:</span>
              <span className="font-medium text-green-600">
                {formatPercentage(calculated.marginalTaxRate)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tax on Not Effectively Connected Income */}
      {calculated.totalNECIncome > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
            <span className="text-orange-600">📈</span>
            <span>Tax on Not Effectively Connected Income</span>
              <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                30% Flat Rate
              </Badge>
            </CardTitle>
            <p className="text-sm text-gray-600">
              Income not connected to a U.S. trade or business is taxed at a flat 30% rate (or reduced treaty rate).
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Not Effectively Connected Income</Label>
                <div className="text-lg font-semibold text-orange-600">
                  {formatCurrency(calculated.totalNECIncome)}
                </div>
                <p className="text-xs text-gray-600">From Schedule NEC</p>
              </div>
              <div>
                <Label>Tax Rate Applied</Label>
                <div className="text-lg font-semibold text-orange-600">
                  30.0%
                </div>
                <p className="text-xs text-gray-600">Standard rate (or treaty rate)</p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-orange-800">Tax on NEC Income:</span>
                <span className="text-xl font-bold text-orange-700">
                  {formatCurrency(calculated.necTax)}
                </span>
              </div>
              <p className="text-sm text-orange-600 mt-1">
                This tax is typically withheld at the source
              </p>
            </div>

            {data.hasTreatyBenefits && (
              <Alert className="border-blue-200 bg-blue-50">
                <span className="text-blue-600">ℹ️</span>
                <AlertDescription className="text-blue-800">
                  <strong>Treaty Benefits:</strong> You indicated treaty benefits may apply. 
                  The actual tax rate may be reduced. Complete Schedule OI to claim treaty benefits.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      )}

      {/* Additional Taxes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="text-gray-600">📄</span>
            <span>Additional Taxes</span>
          </CardTitle>
          <p className="text-sm text-gray-600">
            Other taxes that may apply to your situation.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="selfEmploymentTax">Self-Employment Tax</Label>
              <Input
                id="selfEmploymentTax"
                type="number"
                min="0"
                step="0.01"
                value={data.selfEmploymentTax || ''}
                onChange={(e) => handleFieldChange('selfEmploymentTax', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
              <p className="text-xs text-gray-600 mt-1">
                From Schedule SE (if applicable)
              </p>
            </div>
            <div>
              <Label htmlFor="alternativeMinimumTax">Alternative Minimum Tax</Label>
              <Input
                id="alternativeMinimumTax"
                type="number"
                min="0"
                step="0.01"
                value={data.alternativeMinimumTax || ''}
                onChange={(e) => handleFieldChange('alternativeMinimumTax', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
              <p className="text-xs text-gray-600 mt-1">
                From Form 6251 (if applicable)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="additionalMedicareTax">Additional Medicare Tax</Label>
              <Input
                id="additionalMedicareTax"
                type="number"
                min="0"
                step="0.01"
                value={data.additionalMedicareTax || ''}
                onChange={(e) => handleFieldChange('additionalMedicareTax', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
              <p className="text-xs text-gray-600 mt-1">
                0.9% on wages over threshold
              </p>
            </div>
            <div>
              <Label htmlFor="netInvestmentIncomeTax">Net Investment Income Tax</Label>
              <Input
                id="netInvestmentIncomeTax"
                type="number"
                min="0"
                step="0.01"
                value={data.netInvestmentIncomeTax || ''}
                onChange={(e) => handleFieldChange('netInvestmentIncomeTax', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
              <p className="text-xs text-gray-600 mt-1">
                3.8% on investment income (if applicable)
              </p>
            </div>
          </div>

          <Alert className="border-yellow-200 bg-yellow-50">
            <span className="text-yellow-600">ℹ️</span>
            <AlertDescription className="text-yellow-800">
              <strong>Note:</strong> Some additional taxes may not apply to nonresident aliens or may have 
              different rules. Consult Publication 519 for specific guidance.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Total Tax Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Total Tax Calculation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Tax on Effectively Connected Income:</span>
              <span className="font-medium">{formatCurrency(calculated.regularTax)}</span>
            </div>
            {calculated.totalNECIncome > 0 && (
              <div className="flex justify-between">
                <span>Tax on Not Effectively Connected Income:</span>
                <span className="font-medium">{formatCurrency(calculated.necTax)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Self-Employment Tax:</span>
              <span className="font-medium">{formatCurrency(data.selfEmploymentTax || 0)}</span>
            </div>
            <div className="flex justify-between">
              <span>Alternative Minimum Tax:</span>
              <span className="font-medium">{formatCurrency(data.alternativeMinimumTax || 0)}</span>
            </div>
            <div className="flex justify-between">
              <span>Additional Medicare Tax:</span>
              <span className="font-medium">{formatCurrency(data.additionalMedicareTax || 0)}</span>
            </div>
            <div className="flex justify-between">
              <span>Net Investment Income Tax:</span>
              <span className="font-medium">{formatCurrency(data.netInvestmentIncomeTax || 0)}</span>
            </div>
            
            <Separator />
            
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-red-800">Total Tax:</span>
                <span className="text-2xl font-bold text-red-700">
                  {formatCurrency(calculated.totalTax)}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm mt-1">
                <span className="text-red-700">Overall Effective Rate:</span>
                <span className="font-medium text-red-600">
                  {formatPercentage(calculated.overallEffectiveRate)}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tax Planning Tips */}
      <Alert className="border-green-200 bg-green-50">
        <span className="text-green-600">ℹ️</span>
        <AlertDescription className="text-green-800">
          <strong>Tax Planning for Nonresident Aliens:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Consider timing of income recognition to manage tax brackets</li>
            <li>Maximize business deductions connected to effectively connected income</li>
            <li>Review tax treaty benefits that may reduce withholding rates</li>
            <li>Plan estimated tax payments if you have effectively connected income</li>
            <li>Consider the impact of the substantial presence test on future years</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={readOnly}
          className="flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Deductions</span>
        </Button>
        <Button
          onClick={onNext}
          disabled={!isFormValid() || readOnly}
          className="flex items-center space-x-2"
        >
          <span>Continue to Payments</span>
          <span>→</span>
        </Button>
      </div>
    </div>
  );
};

export default TaxCalculationStep;