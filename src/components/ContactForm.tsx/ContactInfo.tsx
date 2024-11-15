import React from 'react';

function ContactInfo() {
  return (
    
    <div className="flex gap-5 justify-between mt-9 max-w-full leading-loose text-sky-500 w-[318px]">
      <div className="flex gap-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa65e7fe8a267e6443b8e5adbc787cf12d1e5ca63555c4c0b8903ba1a8678eec?placeholderIfAbsent=true&apiKey=1e44f7d110ec4a3ab4b774737bf01988"
          alt="Phone Icon"
          className="object-contain shrink-0 aspect-[1.04] w-[23px]"
        />
        <div>0333 567 8900</div>
      </div>
      <div className="flex gap-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecfd74ea5650de0884067167417fd4093765969185e11972b39e859fe520993b?placeholderIfAbsent=true&apiKey=1e44f7d110ec4a3ab4b774737bf01988"
          alt="Chat Icon"
          className="object-contain shrink-0 aspect-[1.04] w-[23px]"
        />
        <div>Live Chat</div>
      </div>
    </div>
  );
}

export default ContactInfo;
