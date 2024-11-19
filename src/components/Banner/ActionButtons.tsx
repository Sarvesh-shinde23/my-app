import React from "react";
import Image from "next/image"; // Importing Image from Next.js

interface ActionLogo {
  src: string; // Image source
  alt: string; // Alt text for accessibility
  className?: string; // Optional styles
  height?: number; // Optional height
  width?: number; // Optional width
}


interface ActionLogosProps {
  logos: ActionLogo[]; // List of logos
}

export function ActionLogos({ logos }: ActionLogosProps) {
  return (
    <div className="flex flex-wrap gap-3.5 items-start ml-20 max-w-full bg-blend-normal min-h-[46px] w-[576px]">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          height={logo.height || 50} // Default height if not provided
          width={logo.width || 50} // Default width if not provided
          className={`rounded-md ${logo.className || ""}`} // Safe usage of optional className
        />
      ))}
    </div>
  );
}

