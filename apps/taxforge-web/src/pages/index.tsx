import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ChevronRightIcon, DocumentTextIcon, CalculatorIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>TaxForge - Professional Tax Preparation Software</title>
        <meta name="description" content="Professional tax preparation software for individuals and businesses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <h1 className="text-3xl font-bold text-gray-900">TaxForge</h1>
                <span className="ml-3 text-sm text-gray-500 bg-blue-100 px-2 py-1 rounded-full">Beta</span>
              </div>
              <nav className="flex space-x-8">
                <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Professional Tax Preparation
              <span className="block text-blue-600">Made Simple</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete your tax returns with confidence using our intuitive, step-by-step interface. 
              Built for accuracy, designed for ease of use.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/form1040"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Start Form 1040
                <ChevronRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors border border-gray-300">
                View Demo
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div id="features" className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <DocumentTextIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">IRS Forms</h3>
              </div>
              <p className="text-gray-600">
                Complete support for Form 1040 and related schedules. Stay compliant with the latest IRS requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <CalculatorIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Auto Calculations</h3>
              </div>
              <p className="text-gray-600">
                Automatic tax calculations, deduction optimization, and error checking to maximize your refund.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Secure & Private</h3>
              </div>
              <p className="text-gray-600">
                Bank-level security with local data storage. Your sensitive information never leaves your device.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of users who trust TaxForge for their tax preparation needs.
            </p>
            <Link 
              href="/form1040"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Start Your Tax Return
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">TaxForge</h4>
                <p className="text-gray-600">
                  Professional tax preparation software designed for accuracy and ease of use.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Forms</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><Link href="/form1040" className="hover:text-gray-900">Form 1040</Link></li>
                  <li><a href="#" className="hover:text-gray-900">Schedule A</a></li>
                  <li><a href="#" className="hover:text-gray-900">Schedule C</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Support</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                  <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                  <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-gray-900">Security</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-gray-500">
              © 2024 TaxForge. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;