import { Text, Button, Paper, Drawer, Modal, Image } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconCode, IconMenu2, IconRocket } from "@tabler/icons-react";
import { useState } from "react";

import logo from "../images/logo.png";

interface Props {
  onNavigate: any;
}

function TopBar({ onNavigate }: Props) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Paper
      bg={"#CD565630"}
      pl={isMobile ? 16 : 80}
      pr={isMobile ? 16 : 80}
      pt={16}
      pb={16}
      radius={0}
    >
      {isMobile ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image w={50} h={50} src={logo} alt="logo" />

            <IconMenu2 onClick={open} size={30} color="#CD5656" />
          </div>

          <Drawer
            size="xs"
            opened={opened}
            onClose={close}
            title={<Image w={50} h={50} src={logo} alt="logo" />}
            position={"right"}
            styles={{
              content: { backgroundColor: "#CD565630", opacity: 0 },
              header: {
                backgroundColor: "#CD565630",

                borderBottomStyle: "solid",
                borderBottomColor: "#CD565630",
                borderBottomWidth: 1,
              },
              close: { color: "#CD5656" },
            }}
          >
            <div
              style={{
                padding: 16,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                borderBottomStyle: "solid",
                borderBottomColor: "#ffffff",
                borderBottomWidth: 1,
              }}
            >
              <Text
                c={"#ffffff"}
                fz={16}
                fw={"normal"}
                onClick={() => {
                  onNavigate.home();
                  close();
                }}
              >
                Home
              </Text>
              <Text
                c={"#ffffff"}
                fz={16}
                fw={"normal"}
                onClick={() => {
                  onNavigate.domain();
                  close();
                }}
              >
                Domain
              </Text>

              <Text
                c={"#ffffff"}
                fz={16}
                fw={"normal"}
                onClick={() => {
                  onNavigate.milestone();
                  close();
                }}
              >
                Milestones
              </Text>
              <Text
                c={"#ffffff"}
                fz={16}
                fw={"normal"}
                onClick={() => {
                  onNavigate.document();
                  close();
                }}
              >
                Documents
              </Text>
              <Text
                c={"#ffffff"}
                fz={16}
                fw={"normal"}
                onClick={() => {
                  onNavigate.presentation();
                  close();
                }}
              >
                Slides of past presentations
              </Text>
              <Text
                c={"#ffffff"}
                fz={16}
                fw={"normal"}
                onClick={() => {
                  onNavigate.about();
                  close();
                }}
              >
                About us
              </Text>
              <Text
                c={"#ffffff"}
                fz={16}
                fw={"normal"}
                onClick={() => {
                  onNavigate.contact();
                  close();
                }}
              >
                Contact us
              </Text>
            </div>
          </Drawer>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Image w={70} h={70} src={logo} alt="logo" />
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <div
              style={{
                display: "flex",
                gap: 24,
                color: "#CD5656",
                alignItems: "center",
              }}
            >
              <Text
                fw={600}
                fz={16}
                onClick={onNavigate.home}
                style={{
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#CD565650")
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                Home
              </Text>
              <Text
                fw={600}
                fz={16}
                onClick={onNavigate.domain}
                style={{
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#CD565650")
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                Domain
              </Text>
              <Text
                fw={600}
                fz={16}
                onClick={onNavigate.milestone}
                style={{
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#CD565650")
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                Milestones
              </Text>
              <Text
                fw={600}
                fz={16}
                onClick={onNavigate.document}
                style={{
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#CD565650")
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                Documents
              </Text>
              <Text
                fw={600}
                fz={16}
                onClick={onNavigate.presentation}
                style={{
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#CD565650")
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                Slides of past presentations
              </Text>
              <Text
                fw={600}
                fz={16}
                onClick={onNavigate.about}
                style={{
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#CD565650")
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                About us
              </Text>
              <Text
                fw={600}
                fz={16}
                onClick={onNavigate.contact}
                style={{
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#CD565650")
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                Contact us
              </Text>
            </div>
          </div>
        </div>
      )}
    </Paper>
  );
}

export default TopBar;
