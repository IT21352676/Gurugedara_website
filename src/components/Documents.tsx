import {
  Title,
  Text,
  Paper,
  Grid,
  Image,
  Anchor,
  List,
  ThemeIcon,
} from "@mantine/core";
import {
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCircle,
  IconCircleFilled,
  IconMapPin,
  IconPointFilled,
} from "@tabler/icons-react";
import profile from "../images/profile/profile.jpg";
import { useMediaQuery } from "@mantine/hooks";
import "animate.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logoImage from "../images/logo.png";

function Documents() {
  const isMobile = useMediaQuery("(max-width: 850px)");

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
        <Grid.Col mt={80}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Text fz={20}>
              {" "}
              <ThemeIcon color="#CD5656" size={24} radius="xl" mr={5}>
                <IconCircleFilled size={10} />
              </ThemeIcon>
              Topic Assesment
            </Text>
            <Text fz={20}>
              {" "}
              <ThemeIcon color="#CD5656" size={24} radius="xl" mr={5}>
                <IconCircleFilled size={10} />
              </ThemeIcon>
              Project Charter
            </Text>
            <Text fz={20}>
              {" "}
              <ThemeIcon color="#CD5656" size={24} radius="xl" mr={5}>
                <IconCircleFilled size={10} />
              </ThemeIcon>
              Project Proposal
            </Text>
            <Text fz={20}>
              {" "}
              <ThemeIcon color="#CD5656" size={24} radius="xl" mr={5}>
                <IconCircleFilled size={10} />
              </ThemeIcon>
              Status Documents
            </Text>
            <Text fz={20}>
              {" "}
              <ThemeIcon color="#CD5656" size={24} radius="xl" mr={5}>
                <IconCircleFilled size={10} />
              </ThemeIcon>
              Research Paper
            </Text>
            <Text fz={20}>
              {" "}
              <ThemeIcon color="#CD5656" size={24} radius="xl" mr={5}>
                <IconCircleFilled size={10} />
              </ThemeIcon>
              Research Logobook
            </Text>
            <Text fz={20}>
              {" "}
              <ThemeIcon color="#CD5656" size={24} radius="xl" mr={5}>
                <IconCircleFilled size={10} />
              </ThemeIcon>
              Final report
            </Text>
            <Text fz={20}>
              {" "}
              <ThemeIcon color="#CD5656" size={24} radius="xl" mr={5}>
                <IconCircleFilled size={10} />
              </ThemeIcon>
              Research Poster
            </Text>
          </div>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Documents;
