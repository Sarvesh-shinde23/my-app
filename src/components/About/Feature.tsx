import * as React from "react";
import Image from "next/image"; // Import Image from 'next/image'
import { FeatureProps } from "./types"; // Ensure you have the correct types for the feature
import { ServiceList } from "./ServiceList"; // ServiceList for displaying items

interface ZigzagFeatureProps extends FeatureProps {
  index: number; // Add index prop to determine placement
  height: number; // Image height prop
  width: number; // Image width prop
}

export const ZigzagFeature = ({
  index,
  number,
  title,
  description,
  features,
  hasQuote,
  quoteText,
  imageSrc,
  imageAlt,
  height,
  width,
}: ZigzagFeatureProps) => {
  // Alternate alignment based on index
  const isImageLeft = index % 2 === 0;

  return (
    <div className={`flex flex-col max-md:flex-col ${isImageLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}>
      {/* Image Section */}
      {imageSrc && (
        <div className="flex flex-col w-full md:w-6/12 px-4 max-md:px-0">
          <Image
            loading="lazy"
            src={imageSrc}
            alt={imageAlt || "Image for feature"}
            height={height}
            width={width}
            className="object-contain w-full max-h-[450px] mx-auto" // Adjust image height & width for better responsiveness
          />
        </div>
      )}

      {/* Text Section */}
      <div className="flex flex-col w-full md:w-6/12 px-4 max-md:px-0">
        <div className="flex flex-col text-base text-slate-500">
          <div className="px-3 text-base font-black text-white bg-indigo-500 rounded-full h-[50px] leading-[50px] w-[50px] mb-6">
            .{number}
          </div>
          <h2 className="text-2xl font-medium text-neutral-800">{title}</h2>
          <p className="mt-3.5 leading-7">{description}</p>
          <ServiceList items={features} />
          {hasQuote && (
            <blockquote className="flex flex-col justify-center p-4 mt-6 bg-indigo-500 rounded-md bg-blend-normal">
              <p className="text-white">{quoteText}</p>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};
