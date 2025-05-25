import { Text, Paper, Grid, Image } from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import react from "../images/tech/icon-react.svg";
import express from "../images/tech/icon-express.svg";
import figma from "../images/tech/icon-figma.svg";
import git from "../images/tech/icon-git.svg";
import javascript from "../images/tech/icon-javscript.svg";
import typescript from "../images/tech/icon-typescript.svg";
import mongodb from "../images/tech/icon-mongodb.svg";
import nodejs from "../images/tech/icon-nodejs.svg";
import android from "../images/tech/icon-android.svg";
import docker from "../images/tech/icon-docker.svg";
import flutter from "../images/tech/icon-flutter.svg";
import github from "../images/tech/icon-github.svg";
import python from "../images/tech/icon-python.svg";
import kotlin from "../images/tech/icon-kotlin.svg";
import mui from "../images/tech/icon-mui.svg";
import supabase from "../images/tech/icon-supabase.svg";
import arduino from "../images/tech/icon-arduino.svg";
import c from "../images/tech/icon-c.svg";
import dart from "../images/tech/icon-dart.svg";
import discord from "../images/tech/icon-discord.svg";
import esp from "../images/tech/icon-esp.svg";
import opencv from "../images/tech/icon-opencv.svg";
import playwright from "../images/tech/icon-playwright.svg";
import springboot from "../images/tech/icon-springboot.svg";
import raspberry from "../images/tech/icon-raspberry.svg";
import nodered from "../images/tech/icon-nodered.svg";
import mqtt from "../images/tech/icon-mqtt.svg";

const icons = [
  { name: "React", icon: react },
  { name: "Express", icon: express },
  { name: "Figma", icon: figma },
  { name: "Git", icon: git },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "MongoDB", icon: mongodb },
  { name: "Node.js", icon: nodejs },
  { name: "Android", icon: android },
  { name: "Docker", icon: docker },
  { name: "Flutter", icon: flutter },
  { name: "GitHub", icon: github },
  { name: "Python", icon: python },
  { name: "MUI", icon: mui },
  { name: "Kotlin", icon: kotlin },
  { name: "Supabase", icon: supabase },
  { name: "C++", icon: c },
  { name: "Dart", icon: dart },
  { name: "Discord js", icon: discord },
  { name: "Esp", icon: esp },
  { name: "Open CV", icon: opencv },
  { name: "Arduino", icon: arduino },
  { name: "Play Wright", icon: playwright },
  { name: "Spring Boot", icon: springboot },
  { name: "Raspberry", icon: raspberry },
  { name: "Node Red", icon: nodered },
  { name: "MQTT", icon: mqtt },
];

function Skills() {
  const isMobile = useMediaQuery("(max-width: 850px)");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const [value, setValue] = useState(2);

  const calculateValue = () => {
    const width = window.innerWidth;

    if (width > 1400) return 1;
    if (width <= 1400 && width > 800) return 2;
    if (width <= 800 && width > 600) return 4;
    return 4;
  };

  useEffect(() => {
    const updateValue = () => {
      setValue(calculateValue());
    };

    updateValue();
    window.addEventListener("resize", updateValue);
    return () => window.removeEventListener("resize", updateValue);
  }, []);

  return (
    <Paper
      bg={"#030712"}
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
              Skills
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col
          style={{ display: "flex", justifyContent: "center" }}
          mt={16}
          data-aos="fade-up"
        >
          <Text c={"#D1D5DB"} fz={20} fw={"normal"}>
            The skills, tools and technologies I am really good at:
          </Text>
        </Grid.Col>

        <Grid.Col
          style={{ display: "flex", justifyContent: "center" }}
          mt={48}
          data-aos="fade-up"
        >
          <Grid align="center" justify="center">
            {icons.map((item) => (
              <Grid.Col
                p={20}
                key={item.name}
                span={value}
                style={{
                  display: "grid",
                  justifyItems: "center",
                }}
              >
                <Image src={item.icon} w={64} h={64} fit="fill" />

                <Text
                  fz={18}
                  fw={400}
                  c={"#D1D5DB"}
                  mt={8}
                  style={{ textAlign: "center" }}
                >
                  {item.name}
                </Text>
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Skills;
