import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative min-h-full">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-indigo-500 to-rose-400 dark:from-teal-900 dark:via-indigo-900 dark:to-rose-900 opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl relative">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Master Your Typing Journey</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Elevate your typing skills with real-time analytics and personalized progress tracking
          </p>
          <Link
            to="/test"
            className="inline-block px-8 py-4 text-lg font-medium text-white rounded-2xl bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-[0_10px_20px_rgba(79,70,229,0.2)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.3)] active:shadow-[0_5px_10px_rgba(79,70,229,0.2)] active:transform active:translate-y-1"
          >
            Start Typing Test
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-[0_20px_50px_rgba(8,112,184,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 hover:shadow-[0_30px_60px_rgba(8,112,184,0.15)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <div className="inline-block p-3 mb-4 rounded-2xl bg-gradient-to-br from-teal-500 to-indigo-500 text-white shadow-[0_10px_20px_rgba(79,70,229,0.2)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Features</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Real-time WPM calculation
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Accuracy tracking
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Progress visualization
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Dark mode support
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Responsive design
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-[0_20px_50px_rgba(8,112,184,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 hover:shadow-[0_30px_60px_rgba(8,112,184,0.15)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <div className="inline-block p-3 mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-rose-500 text-white shadow-[0_10px_20px_rgba(79,70,229,0.2)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">How to Use</h2>
            <ol className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="mr-2 font-medium">1.</span>
                Click on "Start Typing Test"
              </li>
              <li className="flex items-center">
                <span className="mr-2 font-medium">2.</span>
                Type the displayed text accurately
              </li>
              <li className="flex items-center">
                <span className="mr-2 font-medium">3.</span>
                View your WPM and accuracy in real-time
              </li>
              <li className="flex items-center">
                <span className="mr-2 font-medium">4.</span>
                Check your progress in the Progress section
              </li>
              <li className="flex items-center">
                <span className="mr-2 font-medium">5.</span>
                Practice regularly to improve!
              </li>
            </ol>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/progress"
            className="inline-flex items-center text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium group"
          >
            View Your Progress
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home; 