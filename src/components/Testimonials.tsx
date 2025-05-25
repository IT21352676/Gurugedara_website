import { Text, Paper, Grid, Image } from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "@mantine/carousel";

function Testimonials() {
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const testimonials = [
    {
      image: require("../images/testimonials/fahid.png"),
      description:
        "“Hirusha was a pleasure to work with. He delivered a clean, well-structured fullstack solution with great attention to detail. Professional, communicative, and reliable throughout—highly recommended!.”",
      name: "Fahid Ibrahim",
      position: "Marketing & Customer Success Manager - Torchlabs Software",
    },
    {
      image: require("../images/testimonials/akila.png"),
      description:
        "“Hirusha delivered exceptional results as a full-stack developer. His technical expertise, professionalism, and problem-solving skills truly stood out. We were extremely satisfied with his work and will absolutely rehire him for future project-based needs. Highly recommended!.”",
      name: "Akila Kavinda",
      position: "Operations Manager - Torchlabs Software",
    },
    {
      image: require("../images/testimonials/venusha.png"),
      description:
        "“I’ve seen my brother grow into a talented full-stack developer with a sharp eye for design and detail. His passion, discipline, and ability to balance work and studies truly inspire me. I'm proud of the developer he’s become.”",
      name: "Venusha Dilshan",
      position: "Software Engineer - Syntax Genie",
    },
    {
      image: require("../images/testimonials/sumudu.png"),
      description:
        "“Hirusha is a dedicated and quick-learning individual with strong technical skills and a solid understanding of software development. He consistently approaches challenges with a problem-solving mindset, communicates effectively, and delivers high-quality work. I’ve been impressed by his growth and professionalism, and I’m confident he will be a valuable asset to any team.”",
      name: "Sumudu Madushan",
      position: "Software Engineer - Torchlabs Software",
    },
  ];

  return (
    <Paper
      bg={"#111827"}
      pl={isMobile ? 16 : 80}
      pr={isMobile ? 16 : 80}
      pt={isMobile ? 64 : 96}
      pb={isMobile ? 64 : 96}
      radius={0}
    >
      <Grid pl={isMobile ? 10 : 32} pr={isMobile ? 10 : 32}>
        <Grid.Col style={{ display: "flex", justifyContent: "center" }}>
          <Paper bg={"#374151"} pr={20} pl={20} pt={4} pb={4} radius={12}>
            <Text c={"#D1D5DB"} fz={14} fw={"normal"}>
              Testimonials
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col
          style={{ display: "flex", justifyContent: "center" }}
          mt={16}
          data-aos="fade-up"
        >
          <Text c={"#D1D5DB"} fz={20} fw={"normal"}>
            Nice things people have said about me:
          </Text>
        </Grid.Col>

        <Grid.Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 48,
          }}
          mt={48}
        >
          <Carousel
            withIndicators
            withControls={false}
            w={isMobile ? 350 : "auto"}
            slidesToScroll={isMobile ? 1 : 3}
            loop
            align="start"
            slideSize={isMobile ? "100%" : "33.333333%"}
            slideGap="md"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            {testimonials.map((testimonial, index) => (
              <Carousel.Slide key={index}>
                <Paper
                  shadow="xl"
                  bg={"#1F2937"}
                  radius={12}
                  p={48}
                  data-aos="fade-up"
                  h={"100%"}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 24,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Image src={testimonial.image} w={64} h={64} radius={50} />

                    <Text fw={400} fz={16} c={"#F9FAFB"} mt={24}>
                      {testimonial.description}
                    </Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Text fz={20} fw={600} c={"#F9FAFB"}>
                      {testimonial.name}
                    </Text>
                    <Text
                      fz={14}
                      fw={400}
                      c={"#F9FAFB"}
                      mt={4}
                      style={{ textAlign: "center" }}
                    >
                      {testimonial.position}
                    </Text>
                  </div>
                </Paper>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Testimonials;
