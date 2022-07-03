import Hero from "./containers/Hero/Hero";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import House from "./containers/House/House";
import Getaway from "./containers/Getaway/Getaway";
import Banner from "./components/Banner/Banner";
import img from "./assets/images/img";
import Arrangements from "./containers/Arrangements/Arrangements";
import Escape from "./containers/Escape/Escape";
import Guests from "./containers/Guests/Guests";
import Together from "./containers/Together/Together";
import Contact from "./containers/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <House />
        <Getaway />
        <Banner image={img.kitchen} />
        <Arrangements />
        <Escape />
        <Guests />
        <Banner image={img.furniture} />
        <Together />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
