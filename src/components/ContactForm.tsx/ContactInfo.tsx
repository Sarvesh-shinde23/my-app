import React from 'react';

function ContactInfo() {
  return (
    
    <div className="flex gap-5 justify-between mt-9 max-w-full leading-loose text-sky-500 w-[318px]">
      <div className="flex gap-2.5">
        <img
          loading="lazy"
          src="/phone-icon.svg"
          alt="Phone Icon"
          className="object-contain shrink-0 aspect-[1.04] w-[23px]"
        />
        <div>0333 567 8900</div>
      </div>
      <div className="flex gap-2.5">
        <img
          loading="lazy"
          src="/chat-icon.svg"
          alt="Chat Icon"
          className="object-contain shrink-0 aspect-[1.04] w-[23px]"
        />
        <div>Live Chat</div>
      </div>
    </div>
  );
}

export default ContactInfo;
