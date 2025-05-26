import { Text, Paper, Grid, Anchor, ThemeIcon } from "@mantine/core";
import { IconCircleFilled } from "@tabler/icons-react";

import { useMediaQuery } from "@mantine/hooks";
import "animate.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Documents() {
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
              Documents
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col mt={80} data-aos="fade-up">
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Anchor
              href="https://drive.google.com/drive/folders/1YHNJXvd883obT925hgkX-hRsM54YFc4k?usp=sharing"
              target="_blank"
            >
              <Text fz={20}>
                {" "}
                <ThemeIcon color="#CD5656" size={24} radius="xl" mr={5}>
                  <IconCircleFilled size={10} />
                </ThemeIcon>
                Project Charter
              </Text>
            </Anchor>
            <Anchor
              href="https://drive.google.com/drive/folders/1Y8s--xw9grwoaibhaLdQWO_6B-KyO4-j?usp=sharing"
              target="_blank"
            >
              <Text fz={20}>
                {" "}
                <ThemeIcon color="#CD5656" size={24} radius="xl" mr={5}>
                  <IconCircleFilled size={10} />
                </ThemeIcon>
                Project Proposal
              </Text>
            </Anchor>
            <Anchor
              href="https://drive.google.com/drive/folders/1AEobzoCmJK0rTkFqiDU9axtozSAhtNz_?usp=sharing"
              target="_blank"
            >
              <Text fz={20}>
                {" "}
                <ThemeIcon color="#CD5656" size={24} radius="xl" mr={5}>
                  <IconCircleFilled size={10} />
                </ThemeIcon>
                Check List Documents
              </Text>
            </Anchor>
            <Anchor
              href="https://drive.google.com/drive/folders/1OPdVUik2WdKZ-oqM1UwQJDX4hWn6jJeA?usp=sharing"
              target="_blank"
            >
              <Text fz={20}>
                {" "}
                <ThemeIcon color="#CD5656" size={24} radius="xl" mr={5}>
                  <IconCircleFilled size={10} />
                </ThemeIcon>
                Final Document
              </Text>
            </Anchor>
          </div>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Documents;
