import { AboutUs } from "@/components/About/Aboutus";
import MainBanner from "@/components/Banner/MainBanner";
import QuoteForm from "@/components/ContactForm.tsx/QuoteForm";
import QuoteSection from "@/components/ContactForm.tsx/QuoteSection";
import Partner from "@/components/Partners/Partner";
import ServicesSection from "@/components/Service/ServiceSection";
import React from "react";

export default function Home() {
  return (
    <>
    <MainBanner />
  
      <AboutUs />
   
     
      <QuoteSection />
      
    </>
  );
}
