import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { Button } from '../../../ui/button';
import { Alert, AlertDescription } from '../../../ui/alert';
import { Separator } from '../../../ui/separator';
import { Badge } from '../../../ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../../ui/collapsible';
// import { 
//   ChevronLeft, 
//   ChevronDown, 
//   ChevronUp, 
//   FileText, 
//   User, 
//   DollarSign, 
//   Calculator, 
//   CreditCard, 
//   CheckCircle, 
//   AlertTriangle, 
//   Info,
//   Download,
//   Send
// } from 'lucide-react';
import { Calculated1040NRValues } from '../../../../hooks/useCalculated1040NR';

export interface ReviewStepProps {
  data: any;
  calculated: Calculated1040NRValues;
  errors: string[];
  readOnly?: boolean;
  onPrevious: () => void;
  onSubmit?: () => void;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({
  data,
  calculated,
  errors,
  readOnly = false,
  onPrevious,
  onSubmit,
}) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    personal: true,
    residency: false,
    income: true,
    deductions: false,
    tax: true,
    payments: true,
    summary: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
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

  const hasErrors = errors.length > 0;
  const isComplete = !hasErrors && calculated.totalEffectivelyConnectedIncome > 0;

  return (
    <div className="space-y-6">
      {/* Review Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Form 1040-NR Review</h2>
        <p className="text-gray-600">U.S. Nonresident Alien Income Tax Return</p>
        <p className="text-sm text-gray-500 mt-1">Tax Year 2024</p>
      </div>

      {/* Completion Status */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center space-x-4">
            {isComplete ? (
              <>
                <span className="text-green-500 text-4xl">✅</span>
                <div>
                  <p className="text-lg font-semibold text-green-700">Ready for Submission</p>
                  <p className="text-sm text-green-600">All required information has been provided</p>
                </div>
              </>
            ) : (
              <>
                <span className="text-yellow-500 text-4xl">⚠️</span>
                <div>
                  <p className="text-lg font-semibold text-yellow-700">Review Required</p>
                  <p className="text-sm text-yellow-600">
                    {hasErrors ? 'Please correct errors before submitting' : 'Please complete all required sections'}
                  </p>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Error Summary */}
      {hasErrors && (
        <Alert variant="destructive">
          <span>⚠️</span>
          <AlertDescription>
            <strong>Errors Found:</strong>
            <ul className="list-disc list-inside mt-2">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {/* Personal Information */}
      <Collapsible open={expandedSections.personal} onOpenChange={() => toggleSection('personal')}>
        <Card>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-gray-50">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">📄</span>
                  <span>Personal Information</span>
                </div>
                {expandedSections.personal ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Name</p>
                  <p className="text-gray-900">{data.firstName} {data.lastName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Filing Status</p>
                  <p className="text-gray-900">{data.filingStatus || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">SSN/ITIN</p>
                  <p className="text-gray-900">{data.ssn || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Country of Residence</p>
                  <p className="text-gray-900">{data.countryOfResidence || 'Not specified'}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm font-medium text-gray-700">U.S. Address</p>
                  <p className="text-gray-900">
                    {data.address}, {data.city}, {data.state} {data.zipCode}
                  </p>
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Residency Status */}
      <Collapsible open={expandedSections.residency} onOpenChange={() => toggleSection('residency')}>
        <Card>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-gray-50">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">📄</span>
                  <span>Residency Status</span>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    Nonresident Alien
                  </Badge>
                </div>
                {expandedSections.residency ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Visa Type</p>
                  <p className="text-gray-900">{data.visaType || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Days in U.S. (Current Year)</p>
                  <p className="text-gray-900">{data.daysInUSCurrentYear || 0} days</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Substantial Presence Test</p>
                  <p className="text-gray-900">
                    {calculated.passesSubstantialPresenceTest ? (
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        May Pass (Review Required)
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Does Not Pass
                      </Badge>
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Tax Treaty Benefits</p>
                  <p className="text-gray-900">
                    {data.hasTreatyBenefits ? (
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        Claimed
                      </Badge>
                    ) : (
                      'None claimed'
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Income Summary */}
      <Collapsible open={expandedSections.income} onOpenChange={() => toggleSection('income')}>
        <Card>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-gray-50">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">💰</span>
                  <span>Income Summary</span>
                  <Badge variant="outline">
                    {formatCurrency(calculated.totalEffectivelyConnectedIncome + calculated.totalNECIncome)}
                  </Badge>
                </div>
                {expandedSections.income ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm font-medium text-green-700">Effectively Connected Income</p>
                    <p className="text-2xl font-bold text-green-800">
                      {formatCurrency(calculated.totalEffectivelyConnectedIncome)}
                    </p>
                    <p className="text-xs text-green-600 mt-1">Subject to regular tax rates</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm font-medium text-orange-700">Not Effectively Connected Income</p>
                    <p className="text-2xl font-bold text-orange-800">
                      {formatCurrency(calculated.totalNECIncome)}
                    </p>
                    <p className="text-xs text-orange-600 mt-1">Subject to 30% flat rate</p>
                  </div>
                </div>
                
                {calculated.totalEffectivelyConnectedIncome > 0 && (
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">ECI Breakdown:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      {data['1040NR_line_1a'] > 0 && (
                        <div>
                          <p className="text-gray-600">Wages:</p>
                          <p className="font-medium">{formatCurrency(data['1040NR_line_1a'])}</p>
                        </div>
                      )}
                      {data['1040NR_line_1d'] > 0 && (
                        <div>
                          <p className="text-gray-600">Business:</p>
                          <p className="font-medium">{formatCurrency(data['1040NR_line_1d'])}</p>
                        </div>
                      )}
                      {data['1040NR_line_1f'] > 0 && (
                        <div>
                          <p className="text-gray-600">Rental:</p>
                          <p className="font-medium">{formatCurrency(data['1040NR_line_1f'])}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Deductions */}
      <Collapsible open={expandedSections.deductions} onOpenChange={() => toggleSection('deductions')}>
        <Card>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-gray-50">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                   <span className="text-purple-600">🧮</span>
                   <span>Deductions</span>
                  <Badge variant="outline">
                    {formatCurrency(calculated.totalDeductions)}
                  </Badge>
                </div>
                {expandedSections.deductions ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Deduction Type:</span>
                  <span className="font-medium capitalize">{data.deductionType || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Amount:</span>
                  <span className="font-medium">{formatCurrency(calculated.totalDeductions)}</span>
                </div>
                {data.deductionType === 'itemized' && calculated.totalItemizedDeductions > 0 && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">Itemized Breakdown:</p>
                    <div className="space-y-1 text-sm">
                      {(data.businessExpenses || 0) > 0 && (
                        <div className="flex justify-between">
                          <span>Business Expenses:</span>
                          <span>{formatCurrency(data.businessExpenses)}</span>
                        </div>
                      )}
                      {(data.stateIncomeTax || 0) > 0 && (
                        <div className="flex justify-between">
                          <span>State Income Tax:</span>
                          <span>{formatCurrency(data.stateIncomeTax)}</span>
                        </div>
                      )}
                      {(data.charitableContributions || 0) > 0 && (
                        <div className="flex justify-between">
                          <span>Charitable Contributions:</span>
                          <span>{formatCurrency(data.charitableContributions)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Tax Calculation */}
      <Collapsible open={expandedSections.tax} onOpenChange={() => toggleSection('tax')}>
        <Card>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-gray-50">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                   <span className="text-orange-600">🧮</span>
                   <span>Tax Calculation</span>
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    {formatCurrency(calculated.totalTax)}
                  </Badge>
                </div>
                {expandedSections.tax ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Taxable Income (ECI)</p>
                    <p className="text-lg font-semibold">{formatCurrency(calculated.taxableIncome)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Tax on ECI</p>
                    <p className="text-lg font-semibold text-green-600">{formatCurrency(calculated.regularTax)}</p>
                  </div>
                </div>
                
                {calculated.totalNECIncome > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">NEC Income</p>
                      <p className="text-lg font-semibold">{formatCurrency(calculated.totalNECIncome)}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Tax on NEC (30%)</p>
                      <p className="text-lg font-semibold text-orange-600">{formatCurrency(calculated.necTax)}</p>
                    </div>
                  </div>
                )}
                
                <Separator />
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Tax:</span>
                  <span className="text-xl font-bold text-red-600">{formatCurrency(calculated.totalTax)}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Effective Tax Rate:</p>
                    <p className="font-medium">{formatPercentage(calculated.effectiveTaxRate)}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Marginal Tax Rate:</p>
                    <p className="font-medium">{formatPercentage(calculated.marginalTaxRate)}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Payments */}
      <Collapsible open={expandedSections.payments} onOpenChange={() => toggleSection('payments')}>
        <Card>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-gray-50">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">💳</span>
                  <span>Payments & Withholding</span>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {formatCurrency(calculated.totalPayments)}
                  </Badge>
                </div>
                {expandedSections.payments ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Federal Withholding:</span>
                  <span className="font-medium">{formatCurrency(calculated.totalWithholding)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Estimated Payments:</span>
                  <span className="font-medium">{formatCurrency(calculated.totalEstimatedPayments)}</span>
                </div>
                {(data.priorYearOverpayment || 0) > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-700">Prior Year Overpayment:</span>
                    <span className="font-medium">{formatCurrency(data.priorYearOverpayment)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Payments:</span>
                  <span className="text-xl font-bold text-blue-600">{formatCurrency(calculated.totalPayments)}</span>
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Final Summary */}
      <Collapsible open={expandedSections.summary} onOpenChange={() => toggleSection('summary')}>
        <Card>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-gray-50">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✅</span>
                  <span>Final Summary</span>
                </div>
                {expandedSections.summary ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </CardTitle>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <div className="text-lg font-semibold text-green-800 mb-2">Refund Due</div>
                    <div className="text-3xl font-bold text-green-700">
                      {formatCurrency(calculated.refundAmount)}
                    </div>
                    <p className="text-sm text-green-600 mt-2">
                      You overpaid your taxes and are entitled to a refund
                    </p>
                  </div>
                ) : calculated.amountOwed > 0 ? (
                  <div className="bg-red-50 p-6 rounded-lg text-center">
                    <div className="text-lg font-semibold text-red-800 mb-2">Amount Owed</div>
                    <div className="text-3xl font-bold text-red-700">
                      {formatCurrency(calculated.amountOwed)}
                    </div>
                    <p className="text-sm text-red-600 mt-2">
                      Additional tax payment required by June 16, 2025
                    </p>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="text-lg font-semibold text-gray-800 mb-2">No Balance</div>
                    <div className="text-2xl font-bold text-gray-700">$0</div>
                    <p className="text-sm text-gray-600 mt-2">
                      Your payments exactly match your tax liability
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Important Notices */}
      <Alert className="border-yellow-200 bg-yellow-50">
        <span className="text-blue-600">ℹ️</span>
        <AlertDescription className="text-yellow-800">
          <strong>Important Filing Information:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Form 1040-NR is due June 16, 2025 for calendar year 2024 (April 15, 2025 if you had wages subject to withholding)</li>
            <li>File Schedule NEC if you have not effectively connected income</li>
            <li>File Schedule OI for additional information and treaty claims</li>
            <li>Keep copies of all supporting documents for your records</li>
            <li>Consider consulting a tax professional for complex situations</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Action Buttons */}
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={readOnly}
          className="flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Payments</span>
        </Button>
        
        <div className="flex space-x-3">
          <Button
            variant="outline"
            className="flex items-center space-x-2"
            disabled={!isComplete}
          >
            <span>📥</span>
            <span>Download PDF</span>
          </Button>
          
          {onSubmit && (
            <Button
              onClick={onSubmit}
              disabled={!isComplete || readOnly}
              className="flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Submit Return</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;