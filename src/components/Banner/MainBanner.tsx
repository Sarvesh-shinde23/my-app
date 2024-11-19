"use client";
import React from "react";
import { BannerImage } from "./BannerImage";
import { BannerText } from "./BannerText";
import { ActionLogos } from "./ActionButtons";
import Image from "next/image";

const MainBanner = () => {
  const titleLines = [
    "Power Up Your IT Strategy:",
    "From Design to Maintenance,",
    "We've Got You Covered",
  ];

  const descriptionLines = [
    "At OpenRainbow IT, we offer a full spectrum of IT services from initial design to",
    "ongoing maintenance. Whether building a new network, managing existing systems,",
    "or creating a tailored business case, we deliver top-tier results at every stage.",
    "Start a project with us or let us step in wherever you need — our quality, flexibility,",
    "and expertise ensure your systems run smoothly and effectively, every time.",
  ];

  const actionLogos = [
    { src: "/OpenRainbow.png", alt: "Logo 1", height: 100, width: 280 },
  ];
  
  return (
    <main className="flex flex-col bg-blue-50 bg-blend-normal">
      <section className="z-10 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section className=" w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-3 max-md:max-w-full">
              <div className="z-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                    <BannerImage
                      src="/hero/hero1.png" // Updated to start with a leading slash
                      alt="IT Strategy Illustration"
                      height={100}
                      width={100}
                      className="grow w-full aspect-[0.74]"
                    />
                  </div>
                  <BannerText
                    title={titleLines}
                    description={descriptionLines}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start px-5 pt-48 pb-24 w-full bg-indigo-500 rounded-none bg-blend-normal max-md:pt-24 max-md:mt-3 max-md:max-w-full">
              <BannerImage
                src="/hero/hero2.png" // Updated to start with a leading slash
                alt="Creative Background"
                height={500}
                width={500}
                className="max-w-full aspect-[1.23] w-[560px]"
              />
            </div>
          </section>
        </div>
      </section>

      <section className="w-full bg-blend-normal max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col mt-1.5 mr-0 w-full text-base leading-loose text-white max-md:max-w-full">
            <ActionLogos logos={actionLogos} />
              <BannerImage
                src="/hero/hero3.png"
                alt="Pattern Design"
                height={22}
                width={22}
                className="mt-14 w-full aspect-[14.29] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
            <BannerImage
              src="/hero/hero4.png"
              alt="Decorative Pattern"
              height={22}
              width={22}
              className="grow shrink-0 mt-0 max-w-full aspect-[0.89] w-[350px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainBanner;
