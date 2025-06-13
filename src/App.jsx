import React from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import CategoryCarousel from "./components/CategoryCarousel";
import AboutSection from "./components/AboutSection";
import SeasonalIndulgencesCarousel from "./components/SeasonalIndulgencesCarousel";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      {/* Responsive container: padding changes by breakpoint, max width for large screens */}
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <Navbar />
        <HeroCarousel />
        <CategoryCarousel />
      </div>
        <SeasonalIndulgencesCarousel />
        <AboutSection />
      {/* Newsletter and Footer span full width, with responsive padding */}
      <div className="px-2 sm:px-4 md:px-6 lg:px-8">
        <NewsletterSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;

