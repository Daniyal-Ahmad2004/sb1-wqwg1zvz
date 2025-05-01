export interface Disease {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  treatment: string[];
  prevention: string[];
  severity: 'low' | 'medium' | 'high';
  imageUrl?: string;
}

export interface DetectionResult {
  disease: Disease | null;
  confidence: number;
  timestamp: string;
}