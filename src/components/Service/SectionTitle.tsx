import React from 'react';

const SectionTitle = () => {
  return (
    <div className="flex flex-col items-center px-20 w-full text-base leading-none bg-blend-normal text-neutral-800 max-md:px-5">
      <div className="flex flex-col items-center max-w-full w-[549px]">
        <h2 className="leading-loose text-indigo-500">Services</h2>
        <h3 className="mt-1.5 text-3xl font-medium max-md:max-w-full">
          We provide best service for you customers
        </h3>
        <div className="flex shrink-0 mt-4 bg-indigo-500 rounded-md bg-blend-normal h-[3px] w-[75px]" />
        <p className="self-stretch mt-5 leading-7 text-slate-500 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
