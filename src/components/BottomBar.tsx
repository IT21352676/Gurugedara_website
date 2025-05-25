import { Text, Paper } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconCopyright } from "@tabler/icons-react";

function BottomBar() {
  const isMobile = useMediaQuery("(max-width: 768px)");

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconCopyright />
            <Text>2025</Text>
            <div
              style={{
                backgroundColor: "#000000",
                width: "1px",
                height: 15,
              }}
            />
            <Text>Designed and coded with ❤️</Text>
          </div>
          <div>
            <Text>by Team Guru Gedara</Text>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconCopyright />
          <Text>2025</Text>
          <div
            style={{
              backgroundColor: "#000000",
              width: "1px",
              height: 15,
            }}
          />
          <Text>Designed and coded with ❤️️ by Team Guru Gedara</Text>
        </div>
      )}
    </Paper>
  );
}

export default BottomBar;
