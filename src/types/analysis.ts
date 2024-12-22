export interface AnalysisResult {
  quality: 'Good' | 'Fair' | 'Poor';
  confidence: number;
  ripeness: 'Unripe' | 'Ripe' | 'Overripe';
  defects: string[];
  recommendations: string[];
  timestamp?: string;
}

export interface AnalysisHistory {
  id: string;
  imageUrl: string;
  result: AnalysisResult;
  createdAt: string;
}

export interface AnalysisStats {
  totalScans: number;
  averageQualityScore: number;
  processingTime: number;
  successRate: number;
}
