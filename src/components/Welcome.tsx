import { Title } from "@mantine/core";
import { IconSquareRoundedArrowRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import "animate.css";
import { useMediaQuery } from "@mantine/hooks";

interface Props {
  setWelcome: (value: boolean) => void;
}

function Welcome({ setWelcome }: Props) {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleButton = (value: boolean) => {
    setWelcome(value);
  };
  const isMobile = useMediaQuery("(max-width: 850px)");

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

  const textStyle: React.CSSProperties = {
    overflow: "hidden",
    paddingRight: 20,
    borderRight: "2px solid #D1D5DB",
    whiteSpace: "nowrap",
    textShadow: " 0 0 10px silver",
    animation:
      " typewriter 2s steps(20, end) forwards, blinkCaret 0.75s step-end infinite",
  };

  const borderStyle: React.CSSProperties = {
    width: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to right, #FF0000, #FF4000, #FF8000, #FFBF00, #FFFF00, #BFFF00, #80FF00, #40FF00, #00FF00, #00FF40, #00FF80, #00FFBF, #00FFFF, #00BFFF, #0080FF, #0040FF, #0000FF, #4000FF, #8000FF, #BF00FF, #FF00FF, #FF00BF, #FF0080, #FF0040)",
    borderRadius: "50px",
    backgroundSize: "400% 400%",
    animation: "rainbowBorder 10s ease-in-out infinite",
    padding: 4,
  };

  const keyframes = `
  @keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blinkCaret {
  50% {
    border-color: transparent;
  }
}

@keyframes rainbowBorder {
  0% {
    background-position: 0% 50%;
    box-shadow: 0 0 10000px #FF0000;
  }
  5% {
    background-position: 5% 50%;
    box-shadow: 0 0 10000px #FF4000;
  }
  10% {
    background-position: 10% 50%;
    box-shadow: 0 0 10000px #FF8000;
  }
  15% {
    background-position: 15% 50%;
    box-shadow: 0 0 10000px #FFBF00;
  }
  20% {
    background-position: 20% 50%;
    box-shadow: 0 0 10000px #FFFF00;
  }
  25% {
    background-position: 25% 50%;
    box-shadow: 0 0 10000px #BFFF00;
  }
  30% {
    background-position: 30% 50%;
    box-shadow: 0 0 10000px #80FF00;
  }
  35% {
    background-position: 35% 50%;
    box-shadow: 0 0 10000px #40FF00;
  }
  40% {
    background-position: 40% 50%;
    box-shadow: 0 0 10000px #00FF00;
  }
  45% {
    background-position: 45% 50%;
    box-shadow: 0 0 10000px #00FF40;
  }
  50% {
    background-position: 50% 50%;
    box-shadow: 0 0 10000px #00FF80;
  }
  55% {
    background-position: 55% 50%;
    box-shadow: 0 0 10000px #00FFBF;
  }
  60% {
    background-position: 60% 50%;
    box-shadow: 0 0 10000px #00FFFF;
  }
  65% {
    background-position: 65% 50%;
    box-shadow: 0 0 10000px #00BFFF;
  }
  70% {
    background-position: 70% 50%;
    box-shadow: 0 0 10000px #0080FF;
  }
  75% {
    background-position: 75% 50%;
    box-shadow: 0 0 10000px #0040FF;
  }
  80% {
    background-position: 80% 50%;
    box-shadow: 0 0 10000px #0000FF;
  }
  85% {
    background-position: 85% 50%;
    box-shadow: 0 0 10000px #4000FF;
  }
  90% {
    background-position: 90% 50%;
    box-shadow: 0 0 10000px #8000FF;
  }
  95% {
    background-position: 95% 50%;
    box-shadow: 0 0 10000px #BF00FF;
  }
  100% {
    background-position: 100% 50%;
    box-shadow: 0 0 10000px #FF00FF;
  }
}


@keyframes startFade {
  0% {
    opacity: 0   
  }
  10% {
    opacity: 0  
  }
  20% {
    opacity: 0  
  }
  30% {
    opacity: 0  
  }
  40% {
    opacity: 0.1 
  }
  50% {
    opacity: 0.2  
  }
  60% {
    opacity: 0.4  
  }
  70% {
    opacity: 0.6  
  }
  80% {
    opacity: 0.8    
  }
  90% {
    opacity: 0.9  
  }
  100% {
    opacity: 1   
  }
    }

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          width: windowDimensions.width,
          height: windowDimensions.height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 48,
        }}
      >
        <div style={borderStyle}>
          <div
            style={{
              background: "#030712",
              padding: "10px 20px",
              borderRadius: "50px",
              color: "white",
            }}
          >
            <Title
              c={"#D1D5DB"}
              fz={isMobile ? 30 : 40}
              fw={600}
              style={textStyle}
            >
              “ Pixels tell stories ”
            </Title>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "end",
            gap: isMobile ? 5 : 10,
            cursor: "pointer",
            animation:
              "startFade 4s ease-in 0s forwards, bounce 2s ease-out 4s infinite",
          }}
          onClick={() => handleButton(false)}
        >
          <Title c={"#D1D5DB"} fz={isMobile ? 20 : 40} fw={600}>
            explore
          </Title>
          <IconSquareRoundedArrowRight
            color={"#D1D5DB"}
            size={isMobile ? 25 : 40}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </>
  );
}

export default Welcome;
