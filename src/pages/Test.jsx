import React from 'react';
import TypingBox from '../components/TypingBox';

function Test() {
  return (
    <div className="relative min-h-full">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-indigo-500 to-rose-400 dark:from-teal-900 dark:via-indigo-900 dark:to-rose-900 opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl relative">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-3 dark:text-white">Typing Test</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Test your typing speed and accuracy with our interactive typing test
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 transform hover:scale-102 transition-all duration-200 border border-gray-100 dark:border-gray-700 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
          <div className="flex items-center mb-6">
            <div className="inline-block p-3 mr-4 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold dark:text-white">Start Typing</h2>
          </div>
          
          <div className="flex flex-col items-center">
            <TypingBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test; 