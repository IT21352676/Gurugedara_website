import {
  Title,
  Text,
  Paper,
  Grid,
  Image,
  Anchor,
  List,
  ThemeIcon,
  NavLink,
  Button,
} from "@mantine/core";
import { IconCircleFilled, IconPresentation } from "@tabler/icons-react";
import profile from "../images/profile/profile.jpg";
import { useMediaQuery } from "@mantine/hooks";
import "animate.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logoImage from "../images/logo.png";

function Presentation() {
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
        <Grid.Col
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper bg={"#CD5656"} pr={20} pl={20} pt={4} pb={4} radius={12}>
            <Text c={"#ffffff"} fz={14} fw={"normal"}>
              Presenatation
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col
          mt={80}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: 20,
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Paper
            w={350}
            bg={"#CD565670"}
            p={30}
            radius={20}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div>
              <IconPresentation color="#CD5656" size={100} />
              <Text fz={30} fw={500}>
                Project proposal
              </Text>
              <Text fz={20} fw={400}>
                Submitted on
              </Text>
              <Text fz={18} fw={300}>
                23 August 2024
              </Text>{" "}
            </div>
            <div>
              <Anchor
                target="_blank"
                href="https://drive.google.com/drive/folders/1eIrfAwIliDDSiJjdb2Oj4PKXFz2h7rJu?usp=sharing"
                c={"blue"}
              >
                <Button radius={10} bg={"#CD5656"} mt={20}>
                  View
                </Button>
              </Anchor>
            </div>
          </Paper>

          <Paper
            w={350}
            bg={"#CD565670"}
            p={30}
            radius={20}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div>
              <IconPresentation color="#CD5656" size={100} />
              <Text fz={30} fw={500}>
                Progress presentation 1
              </Text>
              <Text fz={20} fw={400}>
                Submitted on
              </Text>
              <Text fz={18} fw={300}>
                8 December 2024
              </Text>
            </div>
            <div>
              <Anchor
                target="_blank"
                href="https://drive.google.com/drive/folders/1uj3M_WSYY4aOloBt5FFOeqO2bDtUKW5E?usp=sharing"
                c={"blue"}
              >
                <Button radius={10} bg={"#CD5656"} mt={20}>
                  View
                </Button>
              </Anchor>
            </div>
          </Paper>

          <Paper
            w={350}
            bg={"#CD565670"}
            p={30}
            radius={20}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div>
              <IconPresentation color="#CD5656" size={100} />
              <Text fz={30} fw={500}>
                Progress presentation 2
              </Text>
              <Text fz={20} fw={400}>
                Submitted on
              </Text>
              <Text fz={18} fw={300}>
                18 March 2025
              </Text>
            </div>
            <div>
              <Anchor
                target="_blank"
                href="https://drive.google.com/drive/folders/1J_Uo_vaQPJ4kemJVRT0OSUVDSl0LuKs8?usp=sharing"
                c={"blue"}
              >
                <Button radius={10} bg={"#CD5656"} mt={20}>
                  View
                </Button>
              </Anchor>
            </div>
          </Paper>

          <Paper
            w={350}
            bg={"#CD565670"}
            p={30}
            radius={20}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
            }}
          >
            <div>
              <IconPresentation color="#CD5656" size={100} />
              <Text fz={30} fw={500}>
                Final presentation
              </Text>
              <Text fz={20} fw={400}>
                Submitted on
              </Text>
              <Text fz={18} fw={300}>
                26 May 2025
              </Text>
            </div>
            <div>
              <Anchor
                target="_blank"
                href="https://drive.google.com/drive/folders/1ekXTCF5tAOelK4x7fQ7T1eamjHv7yUw9?usp=sharing"
                c={"blue"}
              >
                <Button radius={10} bg={"#CD5656"} mt={20}>
                  View
                </Button>
              </Anchor>
            </div>
          </Paper>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Presentation;
