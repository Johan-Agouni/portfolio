"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function ClientLayout() {
  // Initialize smooth scroll
  useSmoothScroll();

  // Hide default cursor on desktop
  useEffect(() => {
    if (window.matchMedia("(hover: hover)").matches) {
      document.body.style.cursor = "none";
    }
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <Manifesto />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
