import React from 'react';
import { DetectionResult } from '../types';
import { formatConfidence, getSeverityColor } from '../utils/mockDetection';
import { Clock } from 'lucide-react';

interface HistoryItemProps {
  result: DetectionResult;
  imageUrl: string;
  onClick: () => void;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ result, imageUrl, onClick }) => {
  if (!result.disease) return null;
  
  const disease = result.disease;
  const severityClass = getSeverityColor(disease.severity);
  const date = new Date(result.timestamp);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
        <img 
          src={imageUrl} 
          alt={disease.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium text-gray-900 truncate">
            {disease.name}
          </h4>
          <span className={`text-xs px-2 py-0.5 rounded-full ${severityClass}`}>
            {disease.severity.toUpperCase()}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{formattedDate}, {formattedTime}</span>
          </div>
          <span>{formatConfidence(result.confidence)}</span>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;