import * as React from "react";
import Image from "next/image";

// ServiceList Component
const ServiceList = ({ items }: { items: string[] }) => (
  <ul className="list-disc ml-4">
    {items.map((item, index) => (
      <li key={index} className="text-slate-500">
        {item}
      </li>
    ))}
  </ul>
);

// ServiceDetails Component
const ServiceDetails = ({ details }: { details: string[] }) => (
  <ul className="list-disc ml-4">
    {details.map((detail, index) => (
      <li key={index} className="text-slate-500">
        {detail}
      </li>
    ))}
  </ul>
);

export const AboutUs = () => {
  const serviceItems = [
    "Improved Performance",
    "Enhanced Security",
    "Cost Savings Solutions",
    "Reliability and Redundancy",
  ];

  const serviceDetails = [
    "Infrastructure Assessment",
    "Hardware and Software Upgrades",
    "Redundancy Solutions",
    "Security Enhancements",
    "Scalability and Optimization",
    "Optical Time Domain Reflectometry (OTDR)",
  ];

  return (
    <main className="flex flex-col bg-blend-normal px-5">
      <header className="items-center text-center mb-10">
        <h3 className="text-base leading-loose text-indigo-500">About Us</h3>
        <h1 className="mt-1.5 text-3xl font-medium leading-none text-neutral-800 max-md:text-2xl">
          We provide the best service for our customers
        </h1>
        <div className="flex shrink-0 mt-4 bg-indigo-500 rounded-md h-[3px] w-[75px] mx-auto" />
        <p className="mt-5 text-base leading-7 text-slate-500 max-md:text-sm">
          Our mission is to deliver exceptional IT services that empower your business to thrive in a rapidly evolving digital landscape.
        </p>
      </header>

      <div className="flex flex-col items-center mt-28 w-full max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-w-[1274px]">
          {/* Text Section */}
          <div className="flex flex-col w-[56%] max-md:w-full">
            <h3 className="ml-0 text-2xl font-medium leading-9 text-neutral-800">
              Innovative IT Services Tailored for Your Success
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-500 text-justify">
              At OpenRainbow, we deliver agile IT solutions to evolve your systems and optimize operations. By prioritizing your needs and tailoring our approach, we ensure enhanced security, performance, and growth opportunities. Whether it's cloud transitions or infrastructure upgrades, our strategies are crafted to meet your goals.
            </p>
            <div className="mt-5 w-full max-w-[474px]">
              <div className="flex gap-5 max-md:flex-col">
                <ServiceList items={serviceItems} />
                <ServiceDetails details={serviceDetails} />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex flex-col ml-4 w-[44%] max-md:w-full">
            <Image
              loading="lazy"
              src="/about/about1.png"
              alt="IT Services illustration"
              className="object-contain mx-4 w-full aspect-[1.27] max-md:mt-10 max-md:max-w-full"
              height={350}
              width={300}
              placeholder="blur"
              blurDataURL="/about/blur-placeholder.png"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
