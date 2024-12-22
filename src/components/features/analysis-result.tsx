'use client';

import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

interface AnalysisResult {
  quality: string;
  confidence: number;
  defects: string[];
  ripeness: string;
  recommendations: string[];
}

interface AnalysisResultProps {
  result: AnalysisResult | null;
}

export function AnalysisResult({ result }: AnalysisResultProps) {
  if (!result) {
    return (
      <div className="text-center text-gray-500">
        <p>No analysis results yet. Upload and analyze an image to get started.</p>
      </div>
    );
  }

  const isGoodQuality = result.quality.toLowerCase() === 'good';

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        {isGoodQuality ? (
          <CheckCircleIcon className="h-8 w-8 text-green-500" />
        ) : (
          <ExclamationCircleIcon className="h-8 w-8 text-yellow-500" />
        )}
        <div>
          <h4 className="text-lg font-medium text-gray-900">
            Quality: {result.quality}
          </h4>
          <p className="text-sm text-gray-500">
            Confidence: {(result.confidence * 100).toFixed(1)}%
          </p>
        </div>
      </div>

      <div>
        <h4 className="font-medium text-gray-900 mb-2">Details</h4>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-500">Ripeness</dt>
            <dd className="mt-1 text-sm text-gray-900">{result.ripeness}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Defects Found</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {result.defects.length === 0 ? (
                'None detected'
              ) : (
                <ul className="list-disc pl-4">
                  {result.defects.map((defect, index) => (
                    <li key={index}>{defect}</li>
                  ))}
                </ul>
              )}
            </dd>
          </div>
        </dl>
      </div>

      <div>
        <h4 className="font-medium text-gray-900 mb-2">Recommendations</h4>
        <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
          {result.recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
