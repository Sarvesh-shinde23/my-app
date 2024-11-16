import * as React from "react";
import Image from "next/image";
import { ZigzagFeature } from "./Feature";

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

  const features = [
    {
      number: "01",
      title: "Client-Centered Approach",
      description:
        "We focus on understanding your unique needs and delivering customized IT solutions that align with your business goals.",
      features: [
        "Creative Design",
        "Retina Ready",
        "Modern Design",
        "Digital Marketing & Branding",
      ],
      imageSrc: "/about/about2.png",
      height: 250,
      width: 400,
      imageAlt: "Client-centered approach illustration",
    },
    {
      number: "02",
      title: "Full IT Lifecycle Services",
      description:
        "From planning to implementation and beyond, we support your IT journey with a full suite of lifecycle services.",
      features: [
        "Comprehensive Solutions",
        "Proactive Monitoring",
        "Efficient Implementation",
        "End-to-End Support",
      ],
      imageSrc: "/about/about3.png",
      height: 200,
      width: 400,
      imageAlt: "IT Lifecycle Services illustration",
    },
    {
      number: "03",
      title: "Tailored Solutions",
      description:
        "We design scalable and flexible IT solutions to adapt to your evolving business needs.",
      features: [],
      hasQuote: true,
      quoteText:
        "Tailoring solutions to your specific challenges is our commitment to your success.",
      imageSrc: "/about/about4.png",
      height: 200,
      width: 300,
      imageAlt: "Tailored Solutions illustration",
    },
    {
      number: "04",
      title: "Expertise and Innovation",
      description:
        "Leverage our expertise and innovative strategies to stay ahead in the ever-changing tech landscape.",
      features: [],
      hasQuote: true,
      quoteText:
        "Innovation drives us to create impactful IT solutions for a brighter future.",
      imageSrc: "/about/zig5.png",
      height: 200,
      width: 300,
      imageAlt: "Expertise and Innovation illustration",
    },
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

      <div className=" flex flex-col items-center mt-28 w-full max-md:mt-10">
  <div className="flex gap-5 max-md:flex-col max-w-[1274px] ">
    {/* Text Section */}


    <div className="flex flex-col w-[56%] max-md:w-full">
      <h3 className="ml-0 text-2xl font-medium leading-9 text-neutral-800">
        Innovative IT Services Tailored for Your Success
      </h3>
      <p className="mt-4 text-base leading-7 text-slate-500 text-justify">
        At OpenRainbow, we deliver agile IT solutions to evolve your systems and optimize operations. By prioritizing your needs and tailoring our approach, we ensure enhanced security, performance, and growth opportunities. Whether it's cloud transitions or infrastructure upgrades, our strategies are crafted to meet your goals.
      </p>
      <div className="mt-5  w-full max-w-[474px]">
        <div className="flex gap-5 max-md:flex-col">
          <ServiceList items={serviceItems} />
          <ServiceDetails details={serviceDetails} />
        </div>
      </div>
    </div>

  
    {/* Image Section */}
    <div className="flex flex-col ml-4 w-[44%]  max-md:w-full">
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




      <section className="w-full flex flex-col gap-10 max-md:gap-5 mt-20">
        {features.length > 0 ? (
          features.map((feature, index) => (
            <ZigzagFeature key={index} index={index} {...feature} />
          ))
        ) : (
          <p className="text-center text-slate-500">
            No features available at the moment.
          </p>
        )}
      </section>
    </main>
  );
};
