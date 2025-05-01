import { Disease, DetectionResult } from '../types';
import { getRandomDisease, getHealthyResult } from '../data/diseases';

// Simulates the ML model detection process
export const detectDisease = (imageFile: File): Promise<DetectionResult> => {
  return new Promise((resolve) => {
    // Simulate processing time
    const processingTime = 1500 + Math.random() * 1500;
    
    setTimeout(() => {
      // 70% chance of detecting a disease, 30% chance of healthy
      const isHealthy = Math.random() > 0.7;
      
      const result: DetectionResult = {
        disease: isHealthy ? getHealthyResult() : getRandomDisease(),
        confidence: 70 + Math.random() * 25, // Random confidence between 70-95%
        timestamp: new Date().toISOString()
      };
      
      resolve(result);
    }, processingTime);
  });
};

// Generate a shareable link for the result
export const generateShareLink = (result: DetectionResult): string => {
  const baseUrl = window.location.origin;
  const diseaseId = result.disease?.id || 'unknown';
  const confidence = Math.round(result.confidence);
  
  return `${baseUrl}?disease=${diseaseId}&confidence=${confidence}`;
};

// Format confidence percentage
export const formatConfidence = (confidence: number): string => {
  return `${Math.round(confidence)}%`;
};

// Get severity color based on disease severity
export const getSeverityColor = (severity: 'low' | 'medium' | 'high'): string => {
  switch (severity) {
    case 'low':
      return 'bg-green-100 text-green-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'high':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};