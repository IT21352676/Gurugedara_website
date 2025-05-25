import { Title, Text, Paper, Grid, Image, List } from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profile2 from "../images/profile/profile2.jpg";

function About() {
  const isMobile = useMediaQuery("(max-width: 1000px)");

  const about = {
    title: "Curious about me? Here you have it:",
    description: [
      "I'm a passionate, self-proclaimed designer who specializes in fullstack development . I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.",
      " I currently work as a Junior Software Engineer at Torchlabs Software, where I actively contribute to developing feature-rich systems with modern front-end and back-end technologies.",
      " Alongside my professional career, I’m pursuing a BSc (Hons) in Information Technology at the Sri Lanka Institute of Information Technology (SLIIT). Balancing academics and industry work has shaped me into a disciplined, adaptable, and growth-driven developer.",
      "I began my journey as a web developer in 2022, and since then, I've continued to grow and evolve as a student as SLIIT, taking on new challenges and learning the latest technologies along the way. Now, in my early twenties,I'm building web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.",
    ],
    listTitle: "Finally, some quick bits about me.",
    list: ["BSc (hons) in Information Technology", "Electronic Enthusiast"],
    end: " One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉",
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

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
        <Grid.Col style={{ display: "flex", justifyContent: "center" }} mb={48}>
          <Paper bg={"#374151"} pr={20} pl={20} pt={4} pb={4} radius={12}>
            <Text c={"#D1D5DB"} fz={14} fw={"normal"}>
              About me
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col
          span={isMobile ? 12 : 6}
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
          }}
          data-aos="fade-up"
        >
          <div
            style={{
              width: isMobile ? 280 : 380,
              height: isMobile ? 380 : 460,
              justifySelf: isMobile ? "center" : "start",

              display: "flex",
              flexDirection: "row",
              position: "relative",
              overflow: "visible",
            }}
          >
            <div
              style={{
                width: isMobile ? 240 : 340,
                height: isMobile ? 360 : 420,
                backgroundColor: "#374151",
                zIndex: 1,
                position: "absolute",
                border: "8px solid #111827",
                bottom: 0,
                left: 15,
              }}
            >
              <Image
                src={profile2}
                style={{
                  width: isMobile ? 240 : 340,
                  height: isMobile ? 360 : 420,
                  backgroundColor: "#1f2937",
                  zIndex: 0,
                  position: "absolute",
                  border: "8px solid #111827",

                  bottom: isMobile ? 15 : 35,
                  left: isMobile ? 11 : 35,
                }}
              />
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 6}>
          <Title
            c={"#F9FAFB"}
            fz={isMobile ? 24 : 30}
            fw={"bold"}
            data-aos="fade-up"
          >
            {about.title}
          </Title>
          {about.description.map((item, index) => (
            <Text
              c={"#D1D5DB"}
              fz={16}
              fw={"normal"}
              mt={24}
              key={index}
              data-aos="fade-up"
            >
              {item}
            </Text>
          ))}
          <Text c={"#D1D5DB"} fz={16} fw={"normal"} mt={24} data-aos="fade-up">
            {about.listTitle}
          </Text>
          <List c={"#D1D5DB"} fz={16} fw={"normal"} mt={10} data-aos="fade-up">
            {about.list.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))}
          </List>
          <Text c={"#D1D5DB"} fz={16} fw={"normal"} mt={24} data-aos="fade-up">
            {about.end}
          </Text>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default About;
