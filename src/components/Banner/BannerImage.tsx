import Image from 'next/image';
import React from 'react';

interface BannerImageProps {
  src: string;
  alt: string;
  className?: string;
  height: number;
  width: number;
}

export function BannerImage({ src, alt, className, height, width }: BannerImageProps) {
  return (
    <Image
      loading="lazy"
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={`object-contain bg-blend-normal ${className || ''}`}
    />
  );
}
