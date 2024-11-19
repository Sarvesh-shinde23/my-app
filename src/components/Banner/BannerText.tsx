import React from 'react';

interface BannerTextProps {
  title: string[];
  description: string[];
}

export function BannerText({ title, description }: BannerTextProps) {
  return (
    <section className="flex flex-col items-start w-[70%] max-md:ml-0 max-md:w-full">
      <h1 className="mt-44 text-3xl font-medium leading-[54px] text-neutral-800 max-md:mt-10 max-md:max-w-full">
        {title.map((line, index) => (
          <React.Fragment key={index}>
            {line}
          </React.Fragment>
        ))}
      </h1>
      <p className="self-start pb-10 mr-10 max-w-full text-base leading-7 bg-blend-normal min-h-[185px] text-slate-500 w-[576px] max-md:pb-24 max-md:mr-2.5 max-md:max-w-full">
        {description.map((line, index) => (
          <React.Fragment key={index}>
            {line}
          </React.Fragment>
        ))}
      </p>
    </section>
  );
}
