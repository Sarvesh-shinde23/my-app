"use client";
import React, { useState } from "react";
import Image from "next/image"; // Ensure you're using Next.js Image component
import { NavLink } from "./NavLink"; // Assumes NavLink is a child component
import { NavigationState } from "./types"; // Define NavigationState interface in ./types

const navLinks = [
  { text: "Home", width: "w-[58px]" },
  { text: "About", width: "w-[38px]" },
  { text: "Services", width: "w-[54px]" },
  { text: "Team", width: "w-[34px]" },
  { text: "Faq", width: "w-[20px]" },
  { text: "Pricing", width: "w-[44px]" },
  { text: "Contact", width: "w-[51px]" },
];

function NavigationBar() {
  const [state, setState] = useState<NavigationState>({
    activeLink: "Home",
  });

  const handleLinkClick = (text: string) => {
    setState({ activeLink: text });
  };

  return (
    <header className="flex flex-col items-center justify-center px-8 py-4 bg-white text-base leading-loose text-zinc-800 max-md:px-4">
      <div className="flex items-center justify-between w-full max-w-[1192px] max-md:flex-col max-md:gap-4">
        {/* Logo Section */}
        <Image
          loading="lazy"
          src="/OpenRainbow.png"
          alt="Company Logo"
          height={50}
          width={200}
          className="object-contain shrink-0 w-[276px] max-md:w-36"
        />

        {/* Navigation Links */}
        <nav
          className="flex flex-wrap items-center gap-6 px-4 my-auto bg-blend-normal max-md:justify-center max-sm:gap-4"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              text={link.text}
              width={`${link.width} max-sm:w-auto`}
              isActive={state.activeLink === link.text}
              onClick={() => handleLinkClick(link.text)}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}

export default NavigationBar;
