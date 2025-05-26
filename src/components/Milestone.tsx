import { Text, Paper, Grid } from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";
import "animate.css";

import "aos/dist/aos.css";

function Milestone() {
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
              Milestone
            </Text>
          </Paper>
        </Grid.Col>{" "}
        <Grid.Col
          style={{ display: "grid", gap: 20 }}
          span={isMobile ? 9 : 10}
          mt={80}
        >
          <div
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "space-between",
            }}
            data-aos="fade-up"
          >
            <Paper
              w={"90%"}
              bg={"#CD565670"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text
                fz={30}
                fw={"normal"}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                • Project Proposal Report{" "}
                <Text fz={20} fw={"normal"}>
                  Marks-12%
                </Text>
              </Text>
              <Text fz={20} fw={"normal"}>
                The proposal report for the project. Report includes the project
                and outlays of the system.
              </Text>
            </Paper>
            <Paper
              w={"10%"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text fz={20} fw={500} style={{ textWrap: "nowrap" }}>
                2024 August
              </Text>
            </Paper>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "space-between",
            }}
            data-aos="fade-up"
          >
            <Paper
              w={"90%"}
              bg={"#CD565670"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text
                fz={30}
                fw={"normal"}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                • Project Proposal Presentation{" "}
                <Text fz={20} fw={"normal"}>
                  Marks-12%
                </Text>
              </Text>
              <Text fz={20} fw={"normal"}>
                The proposal is formally presented.
              </Text>
            </Paper>
            <Paper
              w={"10%"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text fz={20} fw={500} style={{ textWrap: "nowrap" }}>
                2024 July
              </Text>
            </Paper>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "space-between",
            }}
            data-aos="fade-up"
          >
            <Paper
              w={"90%"}
              bg={"#CD565670"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text
                fz={30}
                fw={"normal"}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                • Project Status Document 1
              </Text>
              <Text fz={20} fw={"normal"}>
                The first project status document. The status document gives a
                brief look into the status of the project at a given point.
              </Text>
            </Paper>
            <Paper
              w={"10%"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text fz={20} fw={500} style={{ textWrap: "nowrap" }}>
                2024 August
              </Text>
            </Paper>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "space-between",
            }}
            data-aos="fade-up"
          >
            <Paper
              w={"90%"}
              bg={"#CD565670"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text
                fz={30}
                fw={"normal"}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                • Progress Presentation 1{" "}
                <Text fz={20} fw={"normal"}>
                  Marks-15%
                </Text>
              </Text>
              <Text fz={20} fw={"normal"}>
                The first progress presentation. The progress of the project was
                shared, and a prototype product was showcased to prove the
                concept
              </Text>
            </Paper>
            <Paper
              w={"10%"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text fz={20} fw={500} style={{ textWrap: "nowrap" }}>
                2024 December
              </Text>
            </Paper>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "space-between",
            }}
            data-aos="fade-up"
          >
            <Paper
              w={"90%"}
              bg={"#CD565670"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text
                fz={30}
                fw={"normal"}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                • Research Paper{" "}
                <Text fz={20} fw={"normal"}>
                  Marks-10%
                </Text>
              </Text>
              <Text fz={20} fw={"normal"}>
                A research paper was created utilizing all the knowledge
                gathered while conducting the research work.
              </Text>
            </Paper>
            <Paper
              w={"10%"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text fz={20} fw={500} style={{ textWrap: "nowrap" }}>
                2025 March
              </Text>
            </Paper>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "space-between",
            }}
            data-aos="fade-up"
          >
            <Paper
              w={"90%"}
              bg={"#CD565670"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text
                fz={30}
                fw={"normal"}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                • Progress Presentation 2{" "}
                <Text fz={20} fw={"normal"}>
                  Marks-18%
                </Text>
              </Text>
              <Text fz={20} fw={"normal"}>
                The second progress presentation. The progress of the project
                was shared, and a more refined and near complete product was
                showcased.
              </Text>
            </Paper>
            <Paper
              w={"10%"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text fz={20} fw={500} style={{ textWrap: "nowrap" }}>
                2025 March
              </Text>
            </Paper>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "space-between",
            }}
            data-aos="fade-up"
          >
            <Paper
              w={"90%"}
              bg={"#CD565670"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text
                fz={30}
                fw={"normal"}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                • Final Report{" "}
                <Text fz={20} fw={"normal"}>
                  Marks-19%
                </Text>
              </Text>
              <Text fz={20} fw={"normal"}>
                Describes the work carried out throughout the year in detail in
                an organized manner.
              </Text>
            </Paper>
            <Paper
              w={"10%"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text fz={20} fw={500} style={{ textWrap: "nowrap" }}>
                2025 April
              </Text>
            </Paper>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "space-between",
            }}
            data-aos="fade-up"
          >
            <Paper
              w={"90%"}
              bg={"#CD565670"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text
                fz={30}
                fw={"normal"}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                • Website Assessment{" "}
                <Text fz={20} fw={"normal"}>
                  {" "}
                  Marks-02%
                </Text>
              </Text>
              <Text fz={20} fw={"normal"}>
                This website. This was developed as a static website in an
                academic format summarizing the details of the project to give
                the viewer an overall idea of the project .
              </Text>
            </Paper>
            <Paper
              w={"10%"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text fz={20} fw={500} style={{ textWrap: "nowrap" }}>
                2025 May
              </Text>
            </Paper>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "space-between",
            }}
            data-aos="fade-up"
          >
            <Paper
              w={"90%"}
              bg={"#CD565670"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text
                fz={30}
                fw={"normal"}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                • Final Presentation & Viva
                <Text fz={20} fw={"normal"}>
                  Marks-20%
                </Text>
              </Text>
              <Text fz={20} fw={"normal"}>
                The final presentation and viva. The completed project details
                will be shared, and the completed product will be showcased .
              </Text>
            </Paper>
            <Paper
              w={"10%"}
              p={30}
              radius={20}
              style={{ display: "grid", alignItems: "center" }}
            >
              <Text fz={20} fw={500} style={{ textWrap: "nowrap" }}>
                2025 May
              </Text>
            </Paper>
          </div>
        </Grid.Col>
        <Grid.Col
          span={isMobile ? 3 : 2}
          mt={80}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
          data-aos="fade-up"
        >
          <div
            style={{ backgroundColor: "#CD5656", width: 10, height: "10%" }}
            data-aos="fade-up"
          />
          <div
            style={{
              backgroundColor: "#CD5656",
              width: 30,
              height: 30,
              borderRadius: 50,
            }}
            data-aos="fade-up"
          />
          <div
            style={{ backgroundColor: "#CD5656", width: 10, height: "10%" }}
            data-aos="fade-up"
          />
          <div
            style={{
              backgroundColor: "#CD5656",
              width: 30,
              height: 30,
              borderRadius: 50,
            }}
            data-aos="fade-up"
          />
          <div
            style={{ backgroundColor: "#CD5656", width: 10, height: "10%" }}
            data-aos="fade-up"
          />
          <div
            style={{
              backgroundColor: "#CD5656",
              width: 30,
              height: 30,
              borderRadius: 50,
            }}
            data-aos="fade-up"
          />
          <div
            style={{ backgroundColor: "#CD5656", width: 10, height: "10%" }}
            data-aos="fade-up"
          />
          <div
            style={{
              backgroundColor: "#CD5656",
              width: 30,
              height: 30,
              borderRadius: 50,
            }}
            data-aos="fade-up"
          />{" "}
          <div
            style={{ backgroundColor: "#CD5656", width: 10, height: "10%" }}
            data-aos="fade-up"
          />
          <div
            style={{
              backgroundColor: "#CD5656",
              width: 30,
              height: 30,
              borderRadius: 50,
            }}
            data-aos="fade-up"
          />{" "}
          <div
            style={{ backgroundColor: "#CD5656", width: 10, height: "10%" }}
            data-aos="fade-up"
          />
          <div
            style={{
              backgroundColor: "#CD5656",
              width: 30,
              height: 30,
              borderRadius: 50,
            }}
            data-aos="fade-up"
          />{" "}
          <div
            style={{ backgroundColor: "#CD5656", width: 10, height: "10%" }}
            data-aos="fade-up"
          />
          <div
            style={{
              backgroundColor: "#CD5656",
              width: 30,
              height: 30,
              borderRadius: 50,
            }}
            data-aos="fade-up"
          />{" "}
          <div
            style={{ backgroundColor: "#CD5656", width: 10, height: "10%" }}
            data-aos="fade-up"
          />
          <div
            style={{
              backgroundColor: "#CD5656",
              width: 30,
              height: 30,
              borderRadius: 50,
            }}
            data-aos="fade-up"
          />{" "}
          <div
            style={{ backgroundColor: "#CD5656", width: 10, height: "10%" }}
            data-aos="fade-up"
          />
          <div
            style={{
              backgroundColor: "#CD5656",
              width: 30,
              height: 30,
              borderRadius: 50,
            }}
            data-aos="fade-up"
          />
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Milestone;
