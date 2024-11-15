import React from 'react';
import NextStepItem from './NextStepItem';
import ContactInfo from './ContactInfo';

interface NextStep {
  icon: string;
  text: string;
}

const nextSteps: NextStep[] = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d804439fcf4398c92442077358e9f944611d3d156cc209e23da6ccc3002a2c53?placeholderIfAbsent=true&apiKey=1e44f7d110ec4a3ab4b774737bf01988", text: "We'll prepare a proposal" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/83cb9b32e86373c737913d57cf6d3038a1f0c9e9f8e73e3b5ab026cc63526544?placeholderIfAbsent=true&apiKey=1e44f7d110ec4a3ab4b774737bf01988", text: "Together we discuss it" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92a65266fbc482464eae54814b48f63c64a78d89e5723c7edafc72d92c6a120b?placeholderIfAbsent=true&apiKey=1e44f7d110ec4a3ab4b774737bf01988", text: "Let's start a policy" },
];

function SatisfactionGuarantee() {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start px-12 py-20 mx-auto w-full text-xl leading-snug text-white rounded-xl bg-blue-950 bg-opacity-90 max-md:px-5 max-md:mt-2.5 max-md:max-w-full">
        <h2 className="self-stretch text-3xl max-md:mr-2.5 max-md:max-w-full">
          100% Satisfaction Guaranteed
        </h2>
        <p className="self-stretch mt-11 leading-9 max-md:mt-10 max-md:max-w-full">
          Lorem ipsum dolor sit amet eiusmod tempor labore <br />
          dolore magna aliqua. Ut enim ad minimo laboris ut <br />
          aliquip ex ea commodo consequat.
        </p>
        <h3 className="mt-16 text-3xl max-md:mt-10">
          What will be the next step?
        </h3>
        {nextSteps.map((step, index) => (
          <NextStepItem key={index} icon={step.icon} text={step.text} />
        ))}
        <h3 className="mt-16 text-3xl max-md:mt-10">Talk to an expert:</h3>
        <ContactInfo />
      </div>
    </div>
  );
}

export default SatisfactionGuarantee;
