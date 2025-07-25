import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import { Button } from '../../../ui/button';
import { Alert, AlertDescription } from '../../../ui/alert';
import { Separator } from '../../../ui/separator';
import { Badge } from '../../../ui/badge';
import { Checkbox } from '../../../ui/checkbox';
// import { ChevronLeft, ChevronRight, CreditCard, DollarSign, RefreshCw, AlertTriangle, Info, Calendar, Building } from 'lucide-react';
import { updateField } from '../../../../store/slices/form1040NRSlice';
import { Calculated1040NRValues } from '../../../../hooks/useCalculated1040NR';

export interface PaymentsStepProps {
  data: any;
  calculated: Calculated1040NRValues;
  errors: string[];
  readOnly?: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

export const PaymentsStep: React.FC<PaymentsStepProps> = ({
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
    return true; // Payments are optional, so form is always valid
  };

  return (
    <div className="space-y-6">
      {/* Payments Overview */}
      <Alert className="border-blue-200 bg-blue-50">
          <span className="text-blue-600">💳</span>
          <AlertDescription className="text-blue-800">
          <strong>Nonresident Alien Payments:</strong> Report all tax payments and withholdings from U.S. sources. 
          This includes federal income tax withheld from wages, estimated tax payments, and withholding on 
          not effectively connected income.
        </AlertDescription>
      </Alert>

      {/* Federal Income Tax Withheld */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="text-blue-600">🏢</span>
            <span>Federal Income Tax Withheld</span>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              From Forms W-2, 1042-S
            </Badge>
          </CardTitle>
          <p className="text-sm text-gray-600">
            Tax withheld from wages, scholarships, and other U.S. source income.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="federalWithholdingW2">From Wages (Form W-2, Box 2)</Label>
              <Input
                id="federalWithholdingW2"
                type="number"
                min="0"
                step="0.01"
                value={data.federalWithholdingW2 || ''}
                onChange={(e) => handleFieldChange('federalWithholdingW2', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
                className={errors.includes('federalWithholdingW2') ? 'border-red-500' : ''}
              />
              <p className="text-xs text-gray-600 mt-1">
                Federal income tax withheld from wages
              </p>
            </div>
            <div>
              <Label htmlFor="federalWithholding1042S">From Other Income (Form 1042-S)</Label>
              <Input
                id="federalWithholding1042S"
                type="number"
                min="0"
                step="0.01"
                value={data.federalWithholding1042S || ''}
                onChange={(e) => handleFieldChange('federalWithholding1042S', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
              <p className="text-xs text-gray-600 mt-1">
                Withholding on scholarships, dividends, etc.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="necWithholding">NEC Income Withholding</Label>
              <Input
                id="necWithholding"
                type="number"
                min="0"
                step="0.01"
                value={data.necWithholding || ''}
                onChange={(e) => handleFieldChange('necWithholding', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
              <p className="text-xs text-gray-600 mt-1">
                30% withholding on not effectively connected income
              </p>
            </div>
            <div>
              <Label htmlFor="backupWithholding">Backup Withholding</Label>
              <Input
                id="backupWithholding"
                type="number"
                min="0"
                step="0.01"
                value={data.backupWithholding || ''}
                onChange={(e) => handleFieldChange('backupWithholding', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
              <p className="text-xs text-gray-600 mt-1">
                24% backup withholding (if applicable)
              </p>
            </div>
          </div>

          <Separator />

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-green-800">Total Federal Withholding:</span>
              <span className="text-lg font-bold text-green-600">
                {formatCurrency(calculated.totalWithholding)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Estimated Tax Payments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
                <span className="text-blue-600">📅</span>
                <span>Estimated Tax Payments</span>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Quarterly
            </Badge>
          </CardTitle>
          <p className="text-sm text-gray-600">
            Estimated tax payments made during the tax year (Form 1040ES-NR).
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="estimatedQ1">1st Quarter (Due 4/15)</Label>
              <Input
                id="estimatedQ1"
                type="number"
                min="0"
                step="0.01"
                value={data.estimatedQ1 || ''}
                onChange={(e) => handleFieldChange('estimatedQ1', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
            </div>
            <div>
              <Label htmlFor="estimatedQ2">2nd Quarter (Due 6/15)</Label>
              <Input
                id="estimatedQ2"
                type="number"
                min="0"
                step="0.01"
                value={data.estimatedQ2 || ''}
                onChange={(e) => handleFieldChange('estimatedQ2', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="estimatedQ3">3rd Quarter (Due 9/15)</Label>
              <Input
                id="estimatedQ3"
                type="number"
                min="0"
                step="0.01"
                value={data.estimatedQ3 || ''}
                onChange={(e) => handleFieldChange('estimatedQ3', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
            </div>
            <div>
              <Label htmlFor="estimatedQ4">4th Quarter (Due 1/15)</Label>
              <Input
                id="estimatedQ4"
                type="number"
                min="0"
                step="0.01"
                value={data.estimatedQ4 || ''}
                onChange={(e) => handleFieldChange('estimatedQ4', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-blue-800">Total Estimated Payments:</span>
              <span className="text-lg font-bold text-blue-600">
                {formatCurrency(calculated.totalEstimatedPayments)}
              </span>
            </div>
          </div>

          <Alert className="border-yellow-200 bg-yellow-50">
            <span className="text-yellow-600">ℹ️</span>
            <AlertDescription className="text-yellow-800">
              <strong>Estimated Tax Requirements:</strong> If you have effectively connected income not subject 
              to withholding, you may need to make quarterly estimated tax payments to avoid penalties.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Other Payments and Credits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="text-blue-600">🔄</span>
            <span>Other Payments and Credits</span>
          </CardTitle>
          <p className="text-sm text-gray-600">
            Additional payments and refundable credits that may apply.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="priorYearOverpayment">Prior Year Overpayment Applied</Label>
              <Input
                id="priorYearOverpayment"
                type="number"
                min="0"
                step="0.01"
                value={data.priorYearOverpayment || ''}
                onChange={(e) => handleFieldChange('priorYearOverpayment', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
              <p className="text-xs text-gray-600 mt-1">
                Refund from prior year applied to current year
              </p>
            </div>
            <div>
              <Label htmlFor="excessSocialSecurity">Excess Social Security Tax</Label>
              <Input
                id="excessSocialSecurity"
                type="number"
                min="0"
                step="0.01"
                value={data.excessSocialSecurity || ''}
                onChange={(e) => handleFieldChange('excessSocialSecurity', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
              <p className="text-xs text-gray-600 mt-1">
                If you had multiple employers
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="earnedIncomeCredit">Earned Income Credit</Label>
              <Input
                id="earnedIncomeCredit"
                type="number"
                min="0"
                step="0.01"
                value={data.earnedIncomeCredit || ''}
                onChange={(e) => handleFieldChange('earnedIncomeCredit', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
              <p className="text-xs text-gray-600 mt-1">
                Generally not available to nonresident aliens
              </p>
            </div>
            <div>
              <Label htmlFor="additionalChildTaxCredit">Additional Child Tax Credit</Label>
              <Input
                id="additionalChildTaxCredit"
                type="number"
                min="0"
                step="0.01"
                value={data.additionalChildTaxCredit || ''}
                onChange={(e) => handleFieldChange('additionalChildTaxCredit', parseFloat(e.target.value) || 0)}
                placeholder="0.00"
                disabled={readOnly}
              />
              <p className="text-xs text-gray-600 mt-1">
                Limited availability for nonresident aliens
              </p>
            </div>
          </div>

          <Alert className="border-red-200 bg-red-50">
                <span>⚠️</span>
                <AlertDescription className="text-red-800">
              <strong>Credit Limitations:</strong> Most refundable credits available to U.S. residents 
              are not available to nonresident aliens. Only claim credits you are specifically eligible for.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Payment Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Total Payments Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Federal Income Tax Withheld:</span>
              <span className="font-medium">{formatCurrency(calculated.totalWithholding)}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax Payments:</span>
              <span className="font-medium">{formatCurrency(calculated.totalEstimatedPayments)}</span>
            </div>
            <div className="flex justify-between">
              <span>Prior Year Overpayment Applied:</span>
              <span className="font-medium">{formatCurrency(data.priorYearOverpayment || 0)}</span>
            </div>
            <div className="flex justify-between">
              <span>Other Credits and Payments:</span>
              <span className="font-medium">
                {formatCurrency(
                  (data.excessSocialSecurity || 0) + 
                  (data.earnedIncomeCredit || 0) + 
                  (data.additionalChildTaxCredit || 0)
                )}
              </span>
            </div>
            
            <Separator />
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-800">Total Payments:</span>
                <span className="text-2xl font-bold text-blue-700">
                  {formatCurrency(calculated.totalPayments)}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Refund or Amount Owed */}
      <Card>
        <CardHeader>
        <CardTitle className="flex items-center space-x-2">
                <span className="text-green-600">💰</span>
                <span>Refund or Payment Due</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-red-600 font-medium">Total Tax</p>
              <p className="text-2xl font-bold text-red-700">
                {formatCurrency(calculated.totalTax)}
              </p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-600 font-medium">Total Payments</p>
              <p className="text-2xl font-bold text-blue-700">
                {formatCurrency(calculated.totalPayments)}
              </p>
            </div>
          </div>

          {calculated.refundAmount > 0 ? (
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-green-600 text-2xl">🔄</span>
                <span className="text-lg font-semibold text-green-800">Refund Due</span>
              </div>
              <div className="text-3xl font-bold text-green-700 mb-2">
                {formatCurrency(calculated.refundAmount)}
              </div>
              <p className="text-sm text-green-600">
                You overpaid your taxes and are entitled to a refund
              </p>
            </div>
          ) : calculated.amountOwed > 0 ? (
            <div className="bg-red-50 p-6 rounded-lg text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-red-600 text-2xl">⚠️</span>
                <span className="text-lg font-semibold text-red-800">Amount Owed</span>
              </div>
              <div className="text-3xl font-bold text-red-700 mb-2">
                {formatCurrency(calculated.amountOwed)}
              </div>
              <p className="text-sm text-red-600">
                Additional tax payment required
              </p>
            </div>
          ) : (
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-lg font-semibold text-gray-800 mb-2">No Balance</div>
              <div className="text-2xl font-bold text-gray-700 mb-2">$0</div>
              <p className="text-sm text-gray-600">
                Your payments exactly match your tax liability
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Payment Options and Deadlines */}
      {calculated.amountOwed > 0 && (
        <Alert className="border-orange-200 bg-orange-50">
          <span className="text-orange-600">📅</span>
          <AlertDescription className="text-orange-800">
            <strong>Payment Due Date:</strong> For calendar year 2024, Form 1040-NR is due June 16, 2025 
            (or April 15, 2025 if you had wages subject to U.S. withholding). Payment options include:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Electronic payment through EFTPS or IRS Direct Pay</li>
              <li>Check or money order with Form 1040-V</li>
              <li>Installment agreement if you cannot pay in full</li>
            </ul>
          </AlertDescription>
        </Alert>
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
          <span>Back to Tax Calculation</span>
        </Button>
        <Button
          onClick={onNext}
          disabled={!isFormValid() || readOnly}
          className="flex items-center space-x-2"
        >
          <span>Continue to Review</span>
          <span>→</span>
        </Button>
      </div>
    </div>
  );
};

export default PaymentsStep;