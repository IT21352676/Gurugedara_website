import { Text, Paper, Grid, Image, List } from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import torchlabs from "../images/experience/torchlabs.svg";

function Experience() {
  const isMobile = useMediaQuery("(max-width: 1000px)");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const experiences = [
    {
      image: torchlabs,
      title: "Junior Software Engineer",
      description: [
        "Leading the development of scalable web applications using React.js, TypeScript, and modern UI frameworks.",
        "Contributing to backend architecture using Node.js, Express.js, and integrating MongoDB for data persistence.",
        "Collaborating in cross-functional teams to deliver features, resolve bugs, and improve overall system performance.",
        "Implementing secure authentication flows, API integrations, and maintaining high code quality through reviews and testing.",
        "Taking ownership of modules, mentoring interns, and actively participating in product planning and technical discussions.",
      ],
      date: "April 2025 – Present",
    },
    {
      image: torchlabs,
      title: "Intern Software Engineer",
      description: [
        "Developed and maintained user interfaces using React.js and TypeScript following responsive design principles.",
        "Collaborated with backend developers to build RESTful APIs using Node.js and Express.js.",
        " Participated in daily standups, sprint planning, and code reviews as part of an Agile development team.",
        "Gained exposure to CI/CD pipelines and DevOps practices.",
        "Collaborated closely with designers, senior developers, and project managers",
      ],
      date: " Oct 2024 - April 2025",
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
              Experience
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col
          style={{ display: "flex", justifyContent: "center" }}
          mt={16}
          data-aos="fade-up"
        >
          <Text c={"#D1D5DB"} fz={20} fw={"normal"}>
            Here is a quick summary of my most recent experiences:
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
          {experiences.map((experience, index) => (
            <Paper
              shadow="xl"
              bg={"#1F2937"}
              radius={12}
              p={32}
              key={index}
              w={isMobile ? "90%" : "70%"}
              data-aos="fade-up"
            >
              <Grid gutter={20}>
                <Grid.Col
                  span={isMobile ? 12 : 3}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: isMobile ? "start" : "center",
                    alignItems: isMobile ? "start" : "center",
                  }}
                >
                  <Image src={experience.image} w={"50%"} />
                </Grid.Col>
                <Grid.Col span={isMobile ? 12 : 6}>
                  <Text fw={600} fz={20} c={"#F9FAFB"}>
                    {experience.title}
                  </Text>

                  <List fz={16} fw={400} c={"#F9FAFB"} mt={16}>
                    {experience.description.map((item, idx) => (
                      <List.Item key={idx}>{item}</List.Item>
                    ))}
                  </List>
                </Grid.Col>
                <Grid.Col
                  span={isMobile ? 12 : 3}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: isMobile ? "end" : "center",
                    alignItems: isMobile ? "end" : "center",
                  }}
                >
                  <Text fz={16} fw={400} c={"#F9FAFB"}>
                    {experience.date}
                  </Text>
                </Grid.Col>
              </Grid>
            </Paper>
          ))}
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Experience;
