'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface CarouselProps {
  images: string[];
}

export function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use a fallback image if no images are provided
  const displayImages = images.length > 0 ? images : ['/placeholder-app.png'];

  useEffect(() => {
    if (displayImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % displayImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [displayImages.length]);

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % displayImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + displayImages.length) % displayImages.length);
  };

  return (
    <div className="relative group">
      <div className="relative h-[400px] overflow-hidden rounded-lg">
        {displayImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {displayImages.length > 1 && (
        <>
          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 text-gray-800 hover:bg-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 text-gray-800 hover:bg-white focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {displayImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
