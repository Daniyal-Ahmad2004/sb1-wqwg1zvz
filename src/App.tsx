import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageUpload from './components/ImageUpload';
import ImagePreview from './components/ImagePreview';
import Results from './components/Results';
import AnalysisLoader from './components/AnalysisLoader';
import HistoryItem from './components/HistoryItem';
import InfoSection from './components/InfoSection';
import { detectDisease } from './utils/mockDetection';
import { DetectionResult } from './types';
import { Leaf } from 'lucide-react';

function App() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [analyzing, setAnalyzing] = useState<boolean>(false);
  const [analysisProgress, setAnalysisProgress] = useState<number>(0);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [history, setHistory] = useState<{result: DetectionResult, imageUrl: string}[]>([]);
  
  // Reset all states
  const handleReset = () => {
    if (selectedImage && result) {
      setHistory(prev => [...prev, { result, imageUrl }]);
    }
    
    setSelectedImage(null);
    setImageUrl('');
    setAnalyzing(false);
    setAnalysisProgress(0);
    setResult(null);
  };
  
  // Handle image selection
  const handleImageSelected = (file: File) => {
    setSelectedImage(file);
    setImageUrl(URL.createObjectURL(file));
  };
  
  // Start analysis
  const handleStartAnalysis = () => {
    if (!selectedImage) return;
    
    setAnalyzing(true);
    setAnalysisProgress(0);
    
    // Simulate progress animation
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
    
    // Call the mock detection function
    detectDisease(selectedImage).then(result => {
      clearInterval(interval);
      setAnalysisProgress(100);
      
      // Small delay to ensure the progress bar reaches 100%
      setTimeout(() => {
        setResult(result);
        setAnalyzing(false);
      }, 500);
    });
  };
  
  // Load history from local storage
  useEffect(() => {
    const savedHistory = localStorage.getItem('detectionHistory');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Failed to parse history:', error);
      }
    }
  }, []);
  
  // Save history to local storage
  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem('detectionHistory', JSON.stringify(history.slice(-10)));
    }
  }, [history]);
  
  // Select a history item
  const handleHistoryItemClick = (index: number) => {
    const item = history[index];
    setResult(item.result);
    setImageUrl(item.imageUrl);
    setSelectedImage(null); // We don't have the original file anymore
    setAnalyzing(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 bg-gradient-to-b from-green-800 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="h-12 w-12 text-green-300 mr-3" />
              <h1 className="text-4xl font-bold">RiceGuard</h1>
            </div>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
              Advanced AI-powered rice disease detection to protect your crops and maximize your yield.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-green-200 text-sm">
                Detects Rice Blast, Brown Spot, Bacterial Blight, and more with high accuracy
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {!selectedImage && !result ? (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload a Rice Plant Image</h2>
                    <p className="text-gray-600">
                      Take a clear photo of your rice plant showing the affected areas. For best results, ensure good lighting and focus.
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <ImageUpload onImageSelected={handleImageSelected} />
                  </div>
                </div>
              ) : selectedImage && !analyzing && !result ? (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your Image</h2>
                    <p className="text-gray-600">
                      This is the image that will be analyzed. If it's not clear, you can remove it and upload a better one.
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <ImagePreview 
                      image={selectedImage} 
                      imageUrl={imageUrl} 
                      onRemove={handleReset} 
                    />
                    
                    <div className="mt-6 flex justify-center">
                      <button
                        onClick={handleStartAnalysis}
                        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                      >
                        Start Analysis
                      </button>
                    </div>
                  </div>
                </div>
              ) : analyzing ? (
                <AnalysisLoader progress={analysisProgress} />
              ) : result ? (
                <Results 
                  result={result} 
                  originalImage={imageUrl} 
                  onReset={handleReset} 
                />
              ) : null}
              
              {/* History Section */}
              {history.length > 0 && !result && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Analyses</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {history.slice(-8).reverse().map((item, index) => (
                      <HistoryItem
                        key={index}
                        result={item.result}
                        imageUrl={item.imageUrl}
                        onClick={() => handleHistoryItemClick(history.length - 1 - index)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <InfoSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;