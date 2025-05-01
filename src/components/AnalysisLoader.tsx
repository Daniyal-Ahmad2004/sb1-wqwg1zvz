import React from 'react';

interface AnalysisLoaderProps {
  progress: number;
}

const AnalysisLoader: React.FC<AnalysisLoaderProps> = ({ progress }) => {
  return (
    <div className="w-full p-6 rounded-lg bg-white shadow-md">
      <div className="text-center mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          Analyzing Rice Plant Image
        </h3>
        <p className="text-sm text-gray-500">
          Our AI is examining the image for disease patterns...
        </p>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div 
          className="bg-green-600 h-3 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between text-xs text-gray-500">
        <span>Initializing</span>
        <span>Processing</span>
        <span>Analysis</span>
        <span>Results</span>
      </div>
      
      <div className="mt-8 space-y-4">
        <div className="flex items-center">
          <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${progress >= 25 ? 'bg-green-500' : 'bg-gray-300'}`}>
            {progress >= 25 && (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            )}
          </div>
          <div className="flex-1">
            <p className={`text-sm font-medium ${progress >= 25 ? 'text-gray-900' : 'text-gray-500'}`}>
              Loading image data
            </p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${progress >= 50 ? 'bg-green-500' : 'bg-gray-300'}`}>
            {progress >= 50 && (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            )}
          </div>
          <div className="flex-1">
            <p className={`text-sm font-medium ${progress >= 50 ? 'text-gray-900' : 'text-gray-500'}`}>
              Preprocessing and feature extraction
            </p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${progress >= 75 ? 'bg-green-500' : 'bg-gray-300'}`}>
            {progress >= 75 && (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            )}
          </div>
          <div className="flex-1">
            <p className={`text-sm font-medium ${progress >= 75 ? 'text-gray-900' : 'text-gray-500'}`}>
              Running ML model classification
            </p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${progress >= 100 ? 'bg-green-500' : 'bg-gray-300'}`}>
            {progress >= 100 && (
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            )}
          </div>
          <div className="flex-1">
            <p className={`text-sm font-medium ${progress >= 100 ? 'text-gray-900' : 'text-gray-500'}`}>
              Generating disease analysis report
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisLoader;