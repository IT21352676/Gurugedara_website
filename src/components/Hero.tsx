import { Title, Text, Paper, Grid, Image, Anchor } from "@mantine/core";
import {
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMapPin,
  IconPointFilled,
} from "@tabler/icons-react";
import profile from "../images/profile/profile.jpg";
import { useMediaQuery } from "@mantine/hooks";
import "animate.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  const isMobile = useMediaQuery("(max-width: 850px)");

  const hero = {
    title: " Hi, I'm Hirusha",
    description:
      " I'm a full-stack developer focused on building fast, accessible, and responsive web applications. Currently a Junior Software Engineer at Torchlabs Software and pursuing my degree at SLIIT, I bring over a year of hands-on experience and a passion for creating meaningful digital experiences. I approach every project with curiosity, creativity, and a drive to learn and grow.",
    location: "Colombo, Sri Lanka",
    status: "Available for new projects",
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const keyframes = `
@keyframes waveHand {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}
  `;

  return (
    <>
      <style>{keyframes}</style>
      <Paper
        bg={"#030712"}
        pl={isMobile ? 16 : 80}
        pr={isMobile ? 16 : 80}
        pt={isMobile ? 64 : 96}
        pb={isMobile ? 64 : 96}
        radius={0}
      >
        <Grid pl={isMobile ? 10 : 32} pr={isMobile ? 10 : 32}>
          <Grid.Col
            span={isMobile ? 12 : 6}
            order={isMobile ? 2 : 1}
            mt={isMobile ? 48 : 0}
          >
            <div
              style={{
                justifySelf: "center",
                width: "90%",
              }}
            >
              <Title
                c={"#F9FAFB"}
                fw={isMobile ? "bold" : "bolder"}
                fz={isMobile ? 36 : 60}
                data-aos="fade-up"
              >
                <span style={{ color: "#D1D5DB" }}>{hero.title}</span>{" "}
                <span
                  style={{
                    display: "inline-block",
                    transformOrigin: "70% 70%",
                    animation: "waveHand 3s ease-in-out 1s infinite",
                  }}
                >
                  👋
                </span>
              </Title>
              <Text
                fz={16}
                fw={"normal"}
                c={"#D1D5DB"}
                mt={16}
                data-aos="fade-up"
              >
                {hero.description}
              </Text>

              <Text
                c={"#D1D5DB"}
                fw={"normal"}
                fz={"16"}
                mt={48}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
                data-aos="fade-up"
              >
                <IconMapPin />
                {hero.location}
              </Text>

              <Text
                mt={8}
                c={"#D1D5DB"}
                fw={"normal"}
                fz={"16"}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
                data-aos="fade-up"
              >
                <IconPointFilled color="#10B981" />
                {hero.status}
              </Text>

              <div
                style={{
                  display: "flex",
                  color: "#D1D5DB",
                  marginTop: 48,
                  gap: 4,
                }}
                data-aos="fade-up"
              >
                <Anchor
                  href={"https://github.com/IT21352676"}
                  c={"#D1D5DB"}
                  target="_blank"
                >
                  {" "}
                  <IconBrandGithub size={30} />
                </Anchor>

                <Anchor
                  href={"https://www.linkedin.com/in/hirusha-sasanka-hs67/"}
                  c={"#D1D5DB"}
                  target="_blank"
                >
                  {" "}
                  <IconBrandLinkedin size={30} />
                </Anchor>
                <Anchor
                  href={"https://hub.docker.com/u/hirushatorchlabs"}
                  c={"#D1D5DB"}
                  target="_blank"
                >
                  <IconBrandDocker size={30} />
                </Anchor>
                <Anchor
                  href={"https://www.figma.com/@hirusha1"}
                  c={"#D1D5DB"}
                  target="_blank"
                >
                  <IconBrandFigma size={30} />
                </Anchor>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col
            span={isMobile ? 12 : 6}
            order={isMobile ? 1 : 2}
            data-aos="fade-up"
            style={{ width: "70%" }}
          >
            <div
              style={{
                width: isMobile ? 340 : 400,
                height: isMobile ? 300 : 360,

                justifySelf: "center",
                display: "flex",
                flexDirection: "row",

                position: "relative",
                overflow: "visible",
              }}
            >
              <div
                style={{
                  width: 280,
                  height: isMobile ? 280 : 320,
                  backgroundColor: "#374151",
                  zIndex: 1,
                  position: "absolute",
                  borderBottomWidth: 8,
                  borderBottomStyle: "solid",
                  borderBottomColor: "#030712",
                  borderRightWidth: 8,
                  borderRightStyle: "solid",
                  borderRightColor: "#030712",
                  bottom: 0,
                  right: isMobile ? 25 : 0,
                }}
              >
                <Image
                  src={profile}
                  style={{
                    width: isMobile ? 240 : 280,
                    height: isMobile ? 280 : 320,
                    backgroundColor: "#1f2937",
                    zIndex: 0,
                    position: "absolute",
                    borderBottomWidth: 8,
                    borderBottomStyle: "solid",
                    borderBottomColor: "#030712",
                    borderRightWidth: 8,
                    borderRightStyle: "solid",
                    borderRightColor: "#030712",
                    borderLeftWidth: isMobile ? 8 : "none",
                    borderLeftStyle: isMobile ? "solid" : "none",
                    borderLeftColor: "#030712",

                    bottom: isMobile ? 15 : 35,
                    right: isMobile ? 15 : 35,
                  }}
                />
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Paper>
    </>
  );
}

export default Hero;
