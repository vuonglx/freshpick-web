'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ImageUploader } from '@/components/features/image-uploader';
import { AnalysisResult } from '@/components/features/analysis-result';

export default function AnalysisPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setAnalysisResult(null);
  };

  const handleAnalysis = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      setAnalysisResult({
        quality: 'Good',
        confidence: 0.92,
        ripeness: 'Ripe',
        defects: [],
        recommendations: ['Ready for packaging', 'Store at room temperature']
      });
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Fruit Analysis
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Upload an image of a fruit for quality assessment
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Upload Image</h3>
          <ImageUploader onImageSelect={handleImageSelect} />
          {selectedImage && (
            <div className="mt-4">
              <Button
                onClick={handleAnalysis}
                disabled={isAnalyzing}
                className="w-full"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Image'}
              </Button>
            </div>
          )}
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Analysis Results
          </h3>
          {isAnalyzing ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
            </div>
          ) : (
            <AnalysisResult result={analysisResult} />
          )}
        </Card>
      </div>
    </div>
  );
}
