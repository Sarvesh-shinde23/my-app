import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <article className="flex overflow-hidden grow shrink py-8 pr-8 bg-white rounded-md bg-blend-normal min-w-[240px] shadow-[0px_2px_20px_rgba(0,0,0,0.06)] w-[298px] max-md:pr-5">
      <div className="flex flex-col grow shrink-0 items-start ml-8 basis-0 w-fit">
        <div className={`flex shrink-0 bg-indigo-500 bg-blend-normal h-[65px] rounded-[50px] w-[65px] ${icon}`} />
        <h4 className="mt-6 text-xl font-medium leading-none text-neutral-800">{title}</h4>
        <p className="flex flex-col self-stretch pr-3.5 mt-4 ml-0 text-base leading-7 bg-blend-normal min-h-[81px] text-slate-500 max-md:pb-24">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;
