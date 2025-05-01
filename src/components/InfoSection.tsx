import React from 'react';
import { BookOpen, Activity, ShieldAlert, Microscope } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Advanced Rice Disease Detection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Microscope className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-600">
              Our advanced machine learning algorithms can detect various rice diseases with high accuracy from a single image.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <ShieldAlert className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Early Detection</h3>
            <p className="text-gray-600">
              Identify diseases in their early stages to prevent spread and minimize crop damage and economic losses.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Info</h3>
            <p className="text-gray-600">
              Get detailed information about detected diseases, including symptoms, treatments, and prevention strategies.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Actionable Insights</h3>
            <p className="text-gray-600">
              Receive practical treatment recommendations and preventive measures based on the specific detected disease.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
              <p className="text-gray-600 mb-6">
                RiceGuard uses state-of-the-art deep learning technology to identify rice plant diseases from images with high accuracy.
              </p>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Upload Image</h4>
                    <p className="text-gray-600">Take a clear photo of the affected rice plant and upload it to our system.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">AI Analysis</h4>
                    <p className="text-gray-600">Our ML model processes the image to identify disease patterns and symptoms.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Get Results</h4>
                    <p className="text-gray-600">Receive detailed analysis with disease identification and management recommendations.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-medium">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Take Action</h4>
                    <p className="text-gray-600">Implement the suggested treatments and preventive measures to protect your crop.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-green-50 flex items-center justify-center p-8">
              <img 
                src="https://images.pexels.com/photos/7101182/pexels-photo-7101182.jpeg" 
                alt="Rice field" 
                className="rounded-lg shadow-md max-h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;