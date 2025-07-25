import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import { Button } from '../../../ui/button';
import { Alert, AlertDescription } from '../../../ui/alert';
import { Separator } from '../../../ui/separator';
import { Badge } from '../../../ui/badge';
import { RadioGroup, RadioGroupItem } from '../../../ui/radio-group';
import { Checkbox } from '../../../ui/checkbox';
// import { ChevronLeft, ChevronRight, Calculator, Receipt, Home, Heart, GraduationCap, Info, AlertTriangle } from 'lucide-react';
import { updateField } from '../../../../store/slices/form1040NRSlice';
import { Calculated1040NRValues } from '../../../../hooks/useCalculated1040NR';

export interface DeductionsStepProps {
  data: any;
  calculated: Calculated1040NRValues;
  errors: string[];
  readOnly?: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

export const DeductionsStep: React.FC<DeductionsStepProps> = ({
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

  const isFormValid = () => {
    return data.deductionType === 'standard' || data.deductionType === 'itemized';
  };

  return (
    <div className="space-y-6">
      {/* Deductions Overview */}
      <Alert className="border-blue-200 bg-blue-50">
        <span className="text-blue-600">🧮</span>
        <AlertDescription className="text-blue-800">
          <strong>Nonresident Alien Deductions:</strong> As a nonresident alien, your deduction options are 
          limited compared to U.S. residents. You can only claim deductions that are connected to your 
          effectively connected income.
        </AlertDescription>
      </Alert>

      {/* Deduction Type Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Choose Your Deduction Method</CardTitle>
          <p className="text-sm text-gray-600">
            Select either the standard deduction or itemize your deductions. You cannot use both.
          </p>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={data.deductionType || ''}
            onValueChange={(value) => handleFieldChange('deductionType', value)}
            disabled={readOnly}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
              <RadioGroupItem value="standard" id="standard" />
              <div className="flex-1">
                <Label htmlFor="standard" className="font-medium cursor-pointer">
                  Standard Deduction
                </Label>
                <p className="text-sm text-gray-600">
                  {formatCurrency(calculated.standardDeduction)} for {data.filingStatus || 'your filing status'}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Recommended for most nonresident aliens with limited U.S. deductions
                </p>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Simpler
              </Badge>
            </div>
            <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
              <RadioGroupItem value="itemized" id="itemized" />
              <div className="flex-1">
                <Label htmlFor="itemized" className="font-medium cursor-pointer">
                  Itemized Deductions
                </Label>
                <p className="text-sm text-gray-600">
                  Claim specific deductions if they exceed the standard deduction
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Only deductions connected to effectively connected income are allowed
                </p>
              </div>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Detailed
              </Badge>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Standard Deduction Details */}
      {data.deductionType === 'standard' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
            <span className="text-blue-600">🧮</span>
            <span>Standard Deduction</span>
          </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-green-800">Your Standard Deduction:</p>
                  <p className="text-sm text-green-600">
                    Filing Status: {data.filingStatus || 'Not selected'}
                  </p>
                </div>
                <span className="text-2xl font-bold text-green-700">
                  {formatCurrency(calculated.standardDeduction)}
                </span>
              </div>
            </div>

            <Alert className="mt-4 border-yellow-200 bg-yellow-50">
              <span className="text-yellow-600">ℹ️</span>
              <AlertDescription className="text-yellow-800">
                <strong>Note:</strong> The standard deduction for nonresident aliens is limited and may be 
                different from the amounts available to U.S. residents. Some nonresident aliens may not 
                be eligible for the standard deduction.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      {/* Itemized Deductions */}
      {data.deductionType === 'itemized' && (
        <div className="space-y-6">
          {/* Business Deductions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
              <span className="text-green-600">🧾</span>
              <span>Business Deductions</span>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Allowed
                </Badge>
              </CardTitle>
              <p className="text-sm text-gray-600">
                Deductions directly connected to your effectively connected income.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="businessExpenses">Business Expenses</Label>
                  <Input
                    id="businessExpenses"
                    type="number"
                    min="0"
                    step="0.01"
                    value={data.businessExpenses || ''}
                    onChange={(e) => handleFieldChange('businessExpenses', parseFloat(e.target.value) || 0)}
                    placeholder="0.00"
                    disabled={readOnly}
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    Office supplies, equipment, etc.
                  </p>
                </div>
                <div>
                  <Label htmlFor="professionalFees">Professional Fees</Label>
                  <Input
                    id="professionalFees"
                    type="number"
                    min="0"
                    step="0.01"
                    value={data.professionalFees || ''}
                    onChange={(e) => handleFieldChange('professionalFees', parseFloat(e.target.value) || 0)}
                    placeholder="0.00"
                    disabled={readOnly}
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    Legal, accounting, consulting
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="travelExpenses">Business Travel</Label>
                  <Input
                    id="travelExpenses"
                    type="number"
                    min="0"
                    step="0.01"
                    value={data.travelExpenses || ''}
                    onChange={(e) => handleFieldChange('travelExpenses', parseFloat(e.target.value) || 0)}
                    placeholder="0.00"
                    disabled={readOnly}
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    Business-related travel only
                  </p>
                </div>
                <div>
                  <Label htmlFor="depreciation">Depreciation</Label>
                  <Input
                    id="depreciation"
                    type="number"
                    min="0"
                    step="0.01"
                    value={data.depreciation || ''}
                    onChange={(e) => handleFieldChange('depreciation', parseFloat(e.target.value) || 0)}
                    placeholder="0.00"
                    disabled={readOnly}
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    Business assets depreciation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* State and Local Taxes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
              <span className="text-blue-600">🏠</span>
              <span>State and Local Taxes</span>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Limited
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="stateIncomeTax">State Income Tax</Label>
                  <Input
                    id="stateIncomeTax"
                    type="number"
                    min="0"
                    step="0.01"
                    value={data.stateIncomeTax || ''}
                    onChange={(e) => handleFieldChange('stateIncomeTax', parseFloat(e.target.value) || 0)}
                    placeholder="0.00"
                    disabled={readOnly}
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    On effectively connected income only
                  </p>
                </div>
                <div>
                  <Label htmlFor="realEstateTax">Real Estate Tax</Label>
                  <Input
                    id="realEstateTax"
                    type="number"
                    min="0"
                    step="0.01"
                    value={data.realEstateTax || ''}
                    onChange={(e) => handleFieldChange('realEstateTax', parseFloat(e.target.value) || 0)}
                    placeholder="0.00"
                    disabled={readOnly}
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    On U.S. real property only
                  </p>
                </div>
              </div>

              <Alert className="border-yellow-200 bg-yellow-50">
                <span className="text-yellow-600">ℹ️</span>
                <AlertDescription className="text-yellow-800">
                  <strong>SALT Deduction Limit:</strong> State and local tax deductions are limited to $10,000 
                  total ($5,000 if married filing separately).
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Limited Personal Deductions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
              <span className="text-red-600">❤️</span>
              <span>Limited Personal Deductions</span>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                  Restricted
                </Badge>
              </CardTitle>
              <p className="text-sm text-gray-600">
                Very limited personal deductions are available to nonresident aliens.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="charitableContributions">Charitable Contributions</Label>
                  <Input
                    id="charitableContributions"
                    type="number"
                    min="0"
                    step="0.01"
                    value={data.charitableContributions || ''}
                    onChange={(e) => handleFieldChange('charitableContributions', parseFloat(e.target.value) || 0)}
                    placeholder="0.00"
                    disabled={readOnly}
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    To U.S. charities only, limited
                  </p>
                </div>
                <div>
                  <Label htmlFor="casualtyLosses">Casualty and Theft Losses</Label>
                  <Input
                    id="casualtyLosses"
                    type="number"
                    min="0"
                    step="0.01"
                    value={data.casualtyLosses || ''}
                    onChange={(e) => handleFieldChange('casualtyLosses', parseFloat(e.target.value) || 0)}
                    placeholder="0.00"
                    disabled={readOnly}
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    From federally declared disasters
                  </p>
                </div>
              </div>

              <Alert className="border-red-200 bg-red-50">
                <span>⚠️</span>
                <AlertDescription className="text-red-800">
                  <strong>Important Limitations:</strong> Most personal deductions available to U.S. residents 
                  (such as mortgage interest, medical expenses, and miscellaneous deductions) are NOT available 
                  to nonresident aliens.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Student/Scholar Special Deductions */}
          {(data.visaType === 'F-1' || data.visaType === 'J-1' || data.visaType === 'M-1') && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                <span className="text-blue-600">🎓</span>
                <span>Student/Scholar Deductions</span>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    Special Rules
                  </Badge>
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Special deductions may be available for students and scholars.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="studentLoanInterest">Student Loan Interest</Label>
                    <Input
                      id="studentLoanInterest"
                      type="number"
                      min="0"
                      step="0.01"
                      value={data.studentLoanInterest || ''}
                      onChange={(e) => handleFieldChange('studentLoanInterest', parseFloat(e.target.value) || 0)}
                      placeholder="0.00"
                      disabled={readOnly}
                    />
                    <p className="text-xs text-gray-600 mt-1">
                      Limited to $2,500 per year
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="tuitionFees">Tuition and Fees</Label>
                    <Input
                      id="tuitionFees"
                      type="number"
                      min="0"
                      step="0.01"
                      value={data.tuitionFees || ''}
                      onChange={(e) => handleFieldChange('tuitionFees', parseFloat(e.target.value) || 0)}
                      placeholder="0.00"
                      disabled={readOnly}
                    />
                    <p className="text-xs text-gray-600 mt-1">
                      Qualified education expenses
                    </p>
                  </div>
                </div>

                <Alert className="border-blue-200 bg-blue-50">
                  <span className="text-blue-600">ℹ️</span>
                  <AlertDescription className="text-blue-800">
                    <strong>Student Benefits:</strong> Some education-related deductions may be available 
                    to nonresident alien students. Consult Publication 519 for specific rules.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          )}

          {/* Itemized Deductions Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Itemized Deductions Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Business Expenses:</span>
                  <span>{formatCurrency((data.businessExpenses || 0) + (data.professionalFees || 0) + (data.travelExpenses || 0) + (data.depreciation || 0))}</span>
                </div>
                <div className="flex justify-between">
                  <span>State and Local Taxes:</span>
                  <span>{formatCurrency(Math.min(10000, (data.stateIncomeTax || 0) + (data.realEstateTax || 0)))}</span>
                </div>
                <div className="flex justify-between">
                  <span>Charitable Contributions:</span>
                  <span>{formatCurrency(data.charitableContributions || 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Other Deductions:</span>
                  <span>{formatCurrency((data.casualtyLosses || 0) + (data.studentLoanInterest || 0) + (data.tuitionFees || 0))}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Itemized Deductions:</span>
                  <span>{formatCurrency(calculated.totalItemizedDeductions)}</span>
                </div>
              </div>

              {calculated.totalItemizedDeductions < calculated.standardDeduction && (
                <Alert className="mt-4 border-yellow-200 bg-yellow-50">
                  <span className="text-yellow-600">ℹ️</span>
                  <AlertDescription className="text-yellow-800">
                    <strong>Recommendation:</strong> Your itemized deductions ({formatCurrency(calculated.totalItemizedDeductions)}) 
                    are less than the standard deduction ({formatCurrency(calculated.standardDeduction)}). 
                    Consider using the standard deduction instead.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Final Deduction Amount */}
      {data.deductionType && (
        <Card>
          <CardHeader>
            <CardTitle>Your Deduction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-blue-800">
                    {data.deductionType === 'standard' ? 'Standard Deduction' : 'Itemized Deductions'}
                  </p>
                  <p className="text-sm text-blue-600">
                    This amount will reduce your taxable income
                  </p>
                </div>
                <span className="text-2xl font-bold text-blue-700">
                  {formatCurrency(calculated.totalDeductions)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={readOnly}
          className="flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Income</span>
        </Button>
        <Button
          onClick={onNext}
          disabled={!isFormValid() || readOnly}
          className="flex items-center space-x-2"
        >
          <span>Continue to Tax Calculation</span>
          <span>→</span>
        </Button>
      </div>
    </div>
  );
};

export default DeductionsStep;