import React from 'react';

interface ActionButton {
  text: string;
  className: string;
}

interface ActionButtonsProps {
  buttons: ActionButton[];
}

export function ActionButtons({ buttons }: ActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3.5 items-start ml-32 max-w-full bg-blend-normal min-h-[46px] w-[576px]">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`overflow-hidden px-7 py-3 rounded-md border border-solid ${button.className}`}
          tabIndex={0}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
}
