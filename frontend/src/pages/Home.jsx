import React from "react";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Rooms from "../sections/Rooms";
import Amenities from "../sections/Amenities";
import Gallery from "../sections/Gallery";
import Location from "../sections/Location";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import EnquireFab from "../sections/EnquireFab";

const Home = () => {
  return (
    <div className="bg-background text-ink min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <EnquireFab />
    </div>
  );
};

export default Home;
