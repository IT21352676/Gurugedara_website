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
import homeImage from "../images/home.png";

function Home() {
  const isMobile = useMediaQuery("(max-width: 850px)");

  return (
    <Paper
      pl={isMobile ? 16 : 80}
      pr={isMobile ? 16 : 80}
      pt={isMobile ? 64 : 96}
      pb={isMobile ? 64 : 96}
      radius={0}
    >
      <Grid pl={isMobile ? 10 : 32} pr={isMobile ? 10 : 32} gutter={1}>
        <Grid.Col
          span={isMobile ? 12 : 6}
          style={{ display: "grid", justifyItems: "center" }}
        >
          <Image src={homeImage} w={"75%"} radius={20} />
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 6} mt={isMobile ? 40 : 80}>
          <Text
            fw={900}
            fz={isMobile ? 30 : 80}
            c={"#CD5656"}
            style={{ textAlign: "center" }}
          >
            Introducing
          </Text>
          <Text
            style={{ textAlign: "center" }}
            fw={400}
            fz={isMobile ? 20 : 40}
            c={"#CD5656"}
            mt={isMobile ? 40 : 40}
          >
            Lesson Delivery System for Primary School Students with Dyslexia and
            Dyscalculia in Sinhala
          </Text>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Home;
