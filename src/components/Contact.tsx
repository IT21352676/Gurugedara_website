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
  TextInput,
} from "@mantine/core";
import { IconCircleFilled, IconPresentation } from "@tabler/icons-react";
import profile from "../images/profile/profile.jpg";
import { useMediaQuery } from "@mantine/hooks";
import "animate.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logoImage from "../images/logo.png";

function Contact() {
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
        <Grid.Col
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper bg={"#CD5656"} pr={20} pl={20} pt={4} pb={4} radius={12}>
            <Text c={"#ffffff"} fz={14} fw={"normal"}>
              Contact
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col
          mt={80}
          style={{
            paddingTop: 80,
            paddingBottom: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            border: "1px solid #CD5656",
            borderRadius: 30,
          }}
          data-aos="fade-up"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              width: "50%",
              marginBottom: 40,
            }}
          >
            <Text fz={30} fw={500}>
              Get in touch
            </Text>
          </div>

          <TextInput
            label="Enter your name"
            placeholder="Enter your name"
            w={"50%"}
            styles={{ input: { border: "1px solid #CD5656" } }}
          />
          <TextInput
            label="Enter a valid email address"
            placeholder="Enter a valid email address"
            w={"50%"}
            styles={{ input: { border: "1px solid #CD5656" } }}
          />
          <TextInput
            label="Enter your message"
            placeholder="Enter your message"
            w={"50%"}
            styles={{ input: { height: 200, border: "1px solid #CD5656" } }}
          />
          <div style={{ display: "flex", justifyContent: "end", width: "50%" }}>
            <Button radius={10} bg={"#CD5656"} mt={20}>
              Submit
            </Button>
          </div>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Contact;
