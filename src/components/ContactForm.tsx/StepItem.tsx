import React from 'react';

interface StepItemProps {
  icon: string;
  text: string;
}

function StepItem({ icon, text }: StepItemProps) {
  return (
    <div className="flex gap-5 mt-6 font-bold leading-normal">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-start aspect-[1.04] w-[23px]"
      />
      <div className="basis-auto">{text}</div>
    </div>
  );
}

export default StepItem;
