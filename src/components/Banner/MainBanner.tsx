"use client";
import React from "react";
import { BannerImage } from "./BannerImage";
import { BannerText } from "./BannerText";
import { ActionLogos } from "./ActionButtons";

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
      <section className="w-full">
        <div className="flex flex-col md:flex-row">
          <section className="w-full md:w-6/12">
            <div className="flex flex-col w-full md:mt-12 px-4">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-[32%]">
                  <BannerImage
                    src="/hero/hero1.png"
                    alt="IT Strategy Illustration"
                    height={100}
                    width={100}
                    className="w-full aspect-[0.74] object-cover"
                  />
                </div>
                <BannerText title={titleLines} description={descriptionLines} />
              </div>
            </div>
          </section>

          <section className="flex flex-col w-full md:w-6/12 md:ml-5 px-4">
            <div className="flex flex-col w-full bg-indigo-500 rounded-none bg-blend-normal pt-10 pb-16 md:pt-48 md:pb-24">
              <BannerImage
                src="/hero/hero2.png"
                alt="Creative Background"
                height={500}
                width={500}
                className="w-full aspect-[1.23] object-cover"
              />
            </div>
          </section>
        </div>
      </section>

      <section className="w-full bg-blend-normal">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-4/5 md:mr-5 px-4">
            <div className="flex flex-col w-full text-base leading-loose text-white">
              <ActionLogos logos={actionLogos} />
              <BannerImage
                src="/hero/hero3.png"
                alt="Pattern Design"
                height={22}
                width={22}
                className="w-full aspect-[14.29] mt-10 md:mt-14"
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/5 px-4">
            <BannerImage
              src="/hero/hero4.png"
              alt="Decorative Pattern"
              height={22}
              width={22}
              className="w-full aspect-[0.89] mt-4"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainBanner;
