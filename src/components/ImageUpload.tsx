import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface ImageUploadProps {
  onImageSelected: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected }) => {
  const [error, setError] = useState<string | null>(null);
  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null);
    
    if (acceptedFiles.length === 0) {
      return;
    }
    
    const file = acceptedFiles[0];
    
    // Check file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }
    
    onImageSelected(file);
  }, [onImageSelected]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    maxFiles: 1
  });
  
  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive 
            ? 'border-green-500 bg-green-50' 
            : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
        }`}
      >
        <input {...getInputProps()} />
        
        <div className="flex flex-col items-center justify-center space-y-3">
          {isDragActive ? (
            <>
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
                <Upload className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-lg font-medium text-green-600">Drop the image here...</p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <ImageIcon className="h-8 w-8 text-gray-500" />
              </div>
              <p className="text-lg font-medium text-gray-700">Drag & drop your rice plant image</p>
              <p className="text-sm text-gray-500">or click to select a file</p>
              <p className="text-xs text-gray-400 mt-2">Supported formats: JPEG, PNG, GIF, WebP</p>
              <p className="text-xs text-gray-400">Maximum size: 5MB</p>
            </>
          )}
        </div>
      </div>
      
      {error && (
        <div className="mt-2 bg-red-50 text-red-600 p-3 rounded-md flex items-center text-sm">
          <X className="h-4 w-4 mr-2 flex-shrink-0" />
          {error}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;