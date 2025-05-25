import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";

import Contact from "./components/Contact";
import BottomBar from "./components/BottomBar";
import AOS from "aos";

import Home from "./components/Home";
import Domain from "./components/Domain";
import Milestone from "./components/Milestone";
import Documents from "./components/Documents";
import Presentation from "./components/Presentation";
import About from "./components/About";
import Gallery from "./components/Gallery";

function App() {
  const homeRef = useRef(null);
  const domainRef = useRef(null);
  const milestoneRef = useRef(null);
  const documentRef = useRef(null);
  const presentationRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      AOS.refresh();
    }, 600);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  // useEffect(() => {
  //   if (devAuth) {
  //     setLoading(true);
  //     const timer = setTimeout(() => {
  //       setLoading(false);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [devAuth]);

  // if (loading) return <Landing />;

  return (
    <div>
      <>
        <div>
          <TopBar
            onNavigate={{
              home: () => handleScrollTo(homeRef),
              domain: () => handleScrollTo(domainRef),
              milestone: () => handleScrollTo(milestoneRef),
              document: () => handleScrollTo(documentRef),
              presentation: () => handleScrollTo(presentationRef),
              about: () => handleScrollTo(aboutRef),
              contact: () => handleScrollTo(contactRef),
            }}
          />
        </div>

        <div ref={domainRef}>
          <Home />
        </div>
        <div ref={domainRef}>
          <Domain />
        </div>
        <div ref={milestoneRef}>
          <Milestone />
        </div>
        <div>
          <Gallery />
        </div>
        <div ref={documentRef}>
          <Documents />
        </div>
        <div ref={presentationRef}>
          <Presentation />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <div>
          <BottomBar />
        </div>
      </>
    </div>
  );
}

export default App;
