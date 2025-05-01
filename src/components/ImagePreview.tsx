import React from 'react';
import { X } from 'lucide-react';

interface ImagePreviewProps {
  image: File;
  imageUrl: string;
  onRemove: () => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ image, imageUrl, onRemove }) => {
  return (
    <div className="relative mt-4">
      <div className="group relative overflow-hidden rounded-lg shadow-md bg-white">
        <div className="flex justify-between items-center p-3 bg-gray-50 border-b">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
              <span className="text-green-600 text-xs font-medium">IMG</span>
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium text-gray-700 truncate" title={image.name}>
                {image.name}
              </p>
              <p className="text-xs text-gray-500">
                {(image.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>
          
          <button 
            onClick={onRemove}
            className="p-1 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Remove image"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        <div className="aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3">
          <img 
            src={imageUrl} 
            alt="Preview" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white text-sm font-medium">Uploaded image for analysis</p>
        </div>
      </div>
      
      <div className="mt-3 text-center">
        <p className="text-sm text-gray-500">
          This image will be analyzed to detect rice plant diseases
        </p>
      </div>
    </div>
  );
};

export default ImagePreview;