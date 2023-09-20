import React from "react";
import NavbarComp from "@/components/Navbar";
import SectionHome from "@/components/SectionsHome";
import SectionProduct from "@/components/SectionProduct";
import SectionAbout from "@/components/SectionAbout";
import SectionPricing from "@/components/SectionPricing";
import SectionInformation from "@/components/SectionInformation";
import Footer from "@/components/Footer";
import ContextComp from "@/components/ContextComp";
import SectionContact from "@/components/SectionContact";

export default function Home() {
  return (
    <main className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <ContextComp>
        <NavbarComp />
        <SectionHome />
        <SectionProduct />
        <SectionAbout />
        <SectionPricing />
        <SectionInformation />
        <SectionContact />
        <Footer />
      </ContextComp>
    </main>
  );
};
