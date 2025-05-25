import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import BottomBar from "./components/BottomBar";
import AOS from "aos";
import Landing from "./components/Landing";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Domain from "./components/Domain";
import Milestone from "./components/Milestone";

function App() {
  const [welcome, setWelcome] = useState(true);
  const [loading, setLoading] = useState(true);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const workRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const [devAuth, setDevAuth] = useState(false);

  // const [selectedDevTab, setSelectedDevTab] = useState(<UpdateAbout />);

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
      {/* {welcome && <Welcome setWelcome={setWelcome} />} */}

      <>
        <div>
          <TopBar
            onNavigate={{
              about: () => handleScrollTo(aboutRef),
              skills: () => handleScrollTo(skillsRef),
              experience: () => handleScrollTo(experienceRef),
              work: () => handleScrollTo(workRef),
              testimonials: () => handleScrollTo(testimonialsRef),
              contact: () => handleScrollTo(contactRef),
            }}
            //setWelcome={setWelcome}
          />
        </div>
        <div>
          <Home />
          <Domain />
          <Milestone />
        </div>
        <div ref={aboutRef}>{/* <About /> */}</div>
        <div ref={skillsRef}>{/* /<Skills /> */}</div>
        <div ref={experienceRef}>{/* <Experience /> */}</div>
        <div ref={workRef}>{/* <Work /> */}</div>
        <div ref={testimonialsRef}>{/* <Testimonials /> */}</div>
        <div ref={contactRef}>{/* <Contact /> */}</div>
        <div>{/* <BottomBar /> */}</div>
      </>

      {/* {devAuth && (
        <>
          <AdminTopBar
            setDevAuth={setDevAuth}
            onNavigate={{
              about: () => setSelectedDevTab(<UpdateAbout />),
              // skills: () => handleScrollTo(skillsRef),
              // experience: () => handleScrollTo(experienceRef),
              work: () => setSelectedDevTab(<UpdateWork />),
              // testimonials: () => handleScrollTo(testimonialsRef),
              // contact: () => handleScrollTo(contactRef),
            }}
          />
          {selectedDevTab}
        </>
      )} */}
    </div>
  );
}

export default App;
