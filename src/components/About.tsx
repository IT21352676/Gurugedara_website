import { Text, Paper, Grid, Image, Anchor } from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";
import "animate.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import supervisorImage from "../images/Jenny img.jpeg";
import coSupervisorImage from "../images/Vishan img.jpg";
import amilaImage from "../images/Amila img.jpg";
import buthmiImage from "../images/B img.jpg";
import dulangaImage from "../images/Dulanga img.jpg";
import hirushaImage from "../images/hirusha.jpg";
import externalImage from "../images/Kanthi-Fonseka.png";

function About() {
  const isMobile = useMediaQuery("(max-width: 850px)");
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <Paper
      pl={isMobile ? 16 : 80}
      pr={isMobile ? 16 : 80}
      pt={isMobile ? 64 : 96}
      pb={isMobile ? 64 : 96}
      radius={0}
    >
      <Grid pl={isMobile ? 10 : 32} pr={isMobile ? 10 : 32}>
        <Grid.Col style={{ display: "flex", justifyContent: "center" }}>
          <Paper bg={"#CD5656"} pr={20} pl={20} pt={4} pb={4} radius={12}>
            <Text c={"#ffffff"} fz={14} fw={"normal"}>
              About
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col
          style={{ display: "flex", justifyContent: "center" }}
          mt={80}
          data-aos="fade-up"
        >
          <Text fz={30} fw={500}>
            Our team
          </Text>
        </Grid.Col>
        <Grid.Col
          mt={80}
          style={{ display: "flex", justifyContent: "space-evenly" }}
          data-aos="fade-up"
        >
          <Paper
            miw={350}
            h={300}
            p={30}
            radius={20}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #CD5656",
            }}
          >
            <Image src={supervisorImage} alt="supervisor" w={150} h={150} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text fz={30} fw={500}>
                Supervisor
              </Text>
              <Text fz={20} fw={400}>
                Ms. Jenny Kishara
              </Text>
              <Anchor target="_blank" href="jenny.k@sliit.lk">
                jenny.k@sliit.lk
              </Anchor>
            </div>
          </Paper>
          <Paper
            miw={350}
            h={300}
            p={30}
            radius={20}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #CD5656",
            }}
          >
            <Image
              src={coSupervisorImage}
              alt="co-supervisor"
              w={150}
              h={150}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text fz={30} fw={500}>
                Co-supervisor
              </Text>
              <Text fz={20} fw={400}>
                Mr. Vishan Jayasinghearachchi
              </Text>
              <Anchor target="_blank" href="vishan.j@sliit.lk">
                vishan.j@sliit.lk
              </Anchor>
            </div>
          </Paper>
          <Paper
            miw={350}
            h={300}
            p={30}
            radius={20}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #CD5656",
            }}
          >
            <Image
              src={externalImage}
              alt="external-supervisor"
              w={150}
              h={150}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text fz={30} fw={500}>
                External supervisor
              </Text>
              <Text fz={20} fw={400}>
                Dr. Kanthi Patabandige
              </Text>
            </div>
          </Paper>
        </Grid.Col>
        <Grid.Col
          mt={80}
          style={{ display: "flex", justifyContent: "space-evenly" }}
          data-aos="fade-up"
        >
          <Paper
            miw={350}
            h={300}
            p={30}
            radius={20}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #CD5656",
            }}
          >
            <Image src={dulangaImage} alt="leader" w={150} h={150} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text fz={30} fw={500}>
                Team leader
              </Text>
              <Text fz={20} fw={400}>
                Chamodi W.A.K.D
              </Text>
              <Anchor target="_blank" href="it21223426@my.sliit.lk">
                it21223426@my.sliit.lk
              </Anchor>
            </div>
          </Paper>
          <Paper
            miw={350}
            h={300}
            p={30}
            radius={20}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #CD5656",
            }}
          >
            <Image src={hirushaImage} alt="member-hirusha" w={150} h={150} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text fz={30} fw={500}>
                Member
              </Text>
              <Text fz={20} fw={400}>
                Sasanka S.G.H.K
              </Text>
              <Anchor target="_blank" href="it21352676@my.sliit.lk">
                it21352676@my.sliit.lk
              </Anchor>
            </div>
          </Paper>
          <Paper
            miw={350}
            h={300}
            p={30}
            radius={20}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #CD5656",
            }}
          >
            <Image src={amilaImage} alt="member-amila" w={150} h={150} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text fz={30} fw={500}>
                Member
              </Text>
              <Text fz={20} fw={400}>
                L.P.A.Thushantha
              </Text>
              <Anchor target="_blank" href="it21229770@my.sliit.lk">
                it21229770@my.sliit.lk
              </Anchor>
            </div>
          </Paper>

          <Paper
            miw={350}
            h={300}
            p={30}
            radius={20}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #CD5656",
            }}
          >
            <Image src={buthmiImage} alt="member-amila" w={150} h={150} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text fz={30} fw={500}>
                Member
              </Text>
              <Text fz={20} fw={400}>
                Wickramasinghe B.K
              </Text>
              <Anchor target="_blank" href="it21290442@my.sliit.lk">
                it21290442@my.sliit.lk
              </Anchor>
            </div>
          </Paper>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default About;
