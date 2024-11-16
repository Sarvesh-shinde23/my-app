import React from 'react';
import Image from 'next/image'; // Importing the Next.js Image component
import SatisfactionGuarantee from './SatisfactionGuarantee';
import FreeQuoteForm from './FreeQuoteForm';

function QuoteSection() {
  return (
    <div className=" relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Background.png')" }}>
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <section className="overflow-hidden py-16 ">
          <div className="flex gap-1 max-md:flex-col">
            <SatisfactionGuarantee />
            <FreeQuoteForm />
          </div>
        </section>
      </div>
    </div>
  );
}

export default QuoteSection;
