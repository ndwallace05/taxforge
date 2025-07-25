import React from 'react';
import { Provider } from 'react-redux';
import { Form1040 } from '@taxforge/ui';
import { store } from '@taxforge/ui';
import Head from 'next/head';

const Form1040Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Form 1040 - TaxForge</title>
        <meta name="description" content="Complete your Form 1040 tax return with TaxForge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Provider store={store}>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold text-gray-900">TaxForge</h1>
                  <span className="ml-3 text-sm text-gray-500">Form 1040</span>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-gray-700">
                    Help
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    Save & Exit
                  </button>
                </div>
              </div>
            </div>
          </header>
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Form1040 />
          </main>
          
          <footer className="bg-white border-t mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div>
                  © 2024 TaxForge. All rights reserved.
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-gray-700">Privacy Policy</a>
                  <a href="#" className="hover:text-gray-700">Terms of Service</a>
                  <a href="#" className="hover:text-gray-700">Support</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Provider>
    </>
  );
};

export default Form1040Page;