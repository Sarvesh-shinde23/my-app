import React from 'react';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "icofont-ruler-pencil",
    title: "Infrastructure Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: "icofont-laptop-alt",
    title: "Managed Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: "icofont-brand-designfloat",
    title: "Professional Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const ServicesSection = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-28 bg-blue-50 bg-blend-normal max-md:px-5 max-md:pb-24">
      <div className="flex flex-col px-3 w-full bg-blend-normal max-w-[1200px] min-h-[556px] max-md:pb-24 max-md:max-w-full">
        <SectionTitle />
        <div className="flex overflow-hidden flex-col mt-16 w-full bg-blend-normal max-w-[1176px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-8 items-start pb-8 w-full bg-blend-normal min-h-[300px] max-md:max-w-full">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
