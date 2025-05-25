import { Text, Paper, Grid, Title, CopyButton, Anchor } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCopy,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

function Contact() {
  const isMobile = useMediaQuery("(max-width: 850px)");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const contact = {
    email: "hirushasasanka8316@gmail.com",
    phone: "+94 705324475",
  };

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
              Get in touch
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col
          style={{ display: "flex", justifyContent: "center" }}
          mt={16}
          data-aos="fade-up"
        >
          <Text c={"#D1D5DB"} fz={20} fw={"normal"}>
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </Text>
        </Grid.Col>

        <Grid.Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
          mt={48}
          data-aos="fade-up"
        >
          <Title
            fw={600}
            fz={isMobile ? 18 : 36}
            c={"#F9FAFB"}
            style={{ display: "flex", gap: 20, alignItems: "center" }}
          >
            <IconMail />
            {contact.email}
            <CopyButton value={contact.email}>
              {({ copied, copy }) => (
                <IconCopy
                  color={copied ? "#4B5563" : "#D1D5DB"}
                  onClick={copy}
                />
              )}
            </CopyButton>
          </Title>

          <Title
            fw={600}
            fz={isMobile ? 18 : 36}
            c={"#F9FAFB"}
            style={{ display: "flex", gap: 20, alignItems: "center" }}
          >
            <IconPhone />
            {contact.phone}
            <CopyButton value={contact.phone}>
              {({ copied, copy }) => (
                <IconCopy
                  color={copied ? "#4B5563" : "#D1D5DB"}
                  onClick={copy}
                />
              )}
            </CopyButton>
          </Title>

          <Text fz={16} fw={400} c={"#D1D5DB"} mt={48}>
            You may also find me on these platforms!
          </Text>
          <div
            style={{
              display: "flex",
              gap: 4,
              color: "#D1D5DB",
              marginTop: 16,
            }}
          >
            <Anchor
              href={"https://github.com/IT21352676"}
              c={"#D1D5DB"}
              target="_blank"
            >
              {" "}
              <IconBrandGithub size={30} />
            </Anchor>

            <Anchor
              href={"https://www.linkedin.com/in/hirusha-sasanka-hs67/"}
              c={"#D1D5DB"}
              target="_blank"
            >
              {" "}
              <IconBrandLinkedin size={30} />
            </Anchor>
            <Anchor
              href={"https://hub.docker.com/u/hirushatorchlabs"}
              c={"#D1D5DB"}
              target="_blank"
            >
              <IconBrandDocker size={30} />
            </Anchor>
            <Anchor
              href={"https://www.figma.com/@hirusha1"}
              c={"#D1D5DB"}
              target="_blank"
            >
              <IconBrandFigma size={30} />
            </Anchor>
          </div>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Contact;
