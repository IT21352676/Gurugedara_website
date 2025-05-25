import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IconRocket } from "@tabler/icons-react";

function Landing() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const blinkingTextStyle: React.CSSProperties = {
    animation: "blink 1.2s infinite",
  };

  const keyframes = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }`;

  return (
    <>
      <style>{keyframes}</style>

      <div
        style={{
          width: windowDimensions.width,
          height: windowDimensions.height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconRocket color="#D1D5DB" size={80} style={blinkingTextStyle} />
      </div>
    </>
  );
}

export default Landing;
