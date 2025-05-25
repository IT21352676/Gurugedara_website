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
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 6} mt={isMobile ? 40 : 80}>
          <Text fw={700} fz={30}>
            Literture survey
          </Text>
          <Text fw={400} fz={20} mt={40}>
            This project focuses on the development of a smart lesson delivery
            system designed specifically for primary school students in Sri
            Lanka who experience learning difficulties such as dyslexia and
            dyscalculia. The system will deliver personalized Sinhala language
            and mathematics lessons using machine learning techniques to adapt
            content according to each child's unique learning needs and
            progress.
          </Text>
          <Text fw={400} fz={20} mt={40}>
            In Sri Lanka, the current inclusive education system struggles to
            effectively support students with learning disabilities due to a
            lack of specialized teaching methods, resources, and awareness.
            Financial constraints and a general lack of understanding among
            parents often result in misdiagnosis or complete neglect of these
            conditions, causing affected children to fall behind academically
            from the primary level.
          </Text>
        </Grid.Col>

        <Grid.Col
          span={isMobile ? 12 : 6}
          mt={isMobile ? 40 : 80}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={logoImage} w={"75%"} radius={20} />
        </Grid.Col>

        <Grid.Col span={12} mt={80}>
          <Text fw={700} fz={30}>
            Research gap
          </Text>{" "}
        </Grid.Col>
        <Grid mt={20}>
          <Grid.Col
            span={isMobile ? 12 : 6}
            style={{ display: "grid", gap: 10 }}
          >
            <div
              style={{
                border: "1px solid #CD5656",
                borderRadius: 20,
                padding: 25,
              }}
            >
              <Text fw={700} fz={25}>
                1. Identification of Dyslexia and Dyscalculia in Early Education
              </Text>
              <List
                icon={
                  <ThemeIcon color="#CD5656" size={24} radius="xl">
                    <IconCircleFilled size={10} />
                  </ThemeIcon>
                }
                mt={40}
                spacing="md"
                size={"xl"}
                center
              >
                <List.Item>
                  <span style={{ fontWeight: 700 }}>Gap:</span> Most Sri Lankan
                  schools lack systematic, data-driven approaches to detect
                  learning disabilities in the early stages of education.{" "}
                </List.Item>
                <List.Item>
                  <span style={{ fontWeight: 700 }}>Justification:</span>{" "}
                  Teachers often rely on subjective observations without the
                  support of diagnostic tools or psychological assessments,
                  leading to underdiagnosis or misdiagnosis.
                </List.Item>
                <List.Item>
                  <span style={{ fontWeight: 700 }}>Need:</span> There is a
                  pressing need for machine learning-based diagnostic models
                  trained on localized data to assist in early identification
                  and intervention.
                </List.Item>
              </List>
            </div>

            <div
              style={{
                border: "1px solid #CD5656",
                borderRadius: 20,
                padding: 25,
              }}
            >
              {" "}
              <Text fw={700} fz={25}>
                3. Adaptive Mathematics Instruction for Students with
                Dyscalculia
              </Text>
              <List
                icon={
                  <ThemeIcon color="#CD5656" size={24} radius="xl">
                    <IconCircleFilled size={10} />
                  </ThemeIcon>
                }
                mt={40}
                spacing="md"
                size={"xl"}
                center
              >
                <List.Item>
                  <span style={{ fontWeight: 700 }}>Gap:</span> No current
                  systems offer adaptive math instruction designed for children
                  with dyscalculia within the Sri Lankan context.{" "}
                </List.Item>
                <List.Item>
                  <span style={{ fontWeight: 700 }}>Justification:</span>{" "}
                  Mathematics content delivery often follows a one-size-fits-all
                  approach, failing to accommodate cognitive differences in
                  number sense, sequencing, and spatial understanding.
                </List.Item>
                <List.Item>
                  <span style={{ fontWeight: 700 }}>Need:</span> Machine
                  learning models that assess individual weaknesses in math and
                  personalize learning pathways are essential to support these
                  students effectively.
                </List.Item>
              </List>
            </div>
          </Grid.Col>

          <Grid.Col
            span={isMobile ? 12 : 6}
            style={{ display: "grid", gap: 10 }}
          >
            <div
              style={{
                border: "1px solid #CD5656",
                borderRadius: 20,
                padding: 25,
              }}
            >
              <Text fw={700} fz={25}>
                2. Personalized Sinhala Language Learning for Dyslexic Students
              </Text>
              <List
                icon={
                  <ThemeIcon color="#CD5656" size={24} radius="xl">
                    <IconCircleFilled size={10} />
                  </ThemeIcon>
                }
                mt={40}
                spacing="md"
                size={"xl"}
                center
              >
                <List.Item>
                  <span style={{ fontWeight: 700 }}>Gap:</span> Existing digital
                  education platforms rarely provide Sinhala language content
                  tailored for students with dyslexia.{" "}
                </List.Item>
                <List.Item>
                  <span style={{ fontWeight: 700 }}>Justification:</span>{" "}
                  Sinhala’s complex script, vowel modifiers, and phonetic
                  nuances can pose unique challenges for dyslexic learners, yet
                  adaptive language learning tools remain underdeveloped.
                </List.Item>
                <List.Item>
                  <span style={{ fontWeight: 700 }}>Need:</span> Development of
                  AI-driven, multimedia-supported Sinhala learning modules that
                  accommodate visual and auditory processing difficulties.
                </List.Item>
              </List>
            </div>

            <div
              style={{
                border: "1px solid #CD5656",
                borderRadius: 20,
                padding: 25,
              }}
            >
              <Text fw={700} fz={25}>
                4. Social Skills Development Integration
              </Text>
              <List
                icon={
                  <ThemeIcon color="#CD5656" size={24} radius="xl">
                    <IconCircleFilled size={10} />
                  </ThemeIcon>
                }
                mt={40}
                spacing="md"
                size={"xl"}
                center
              >
                <List.Item>
                  <span style={{ fontWeight: 700 }}>Gap:</span> Social
                  development is largely overlooked in most learning systems
                  targeting students with cognitive disabilities.{" "}
                </List.Item>
                <List.Item>
                  <span style={{ fontWeight: 700 }}>Justification:</span>{" "}
                  Children with dyslexia and dyscalculia often experience low
                  self-esteem and social withdrawal, yet existing tools do not
                  integrate social skills training or collaborative learning
                  features.
                </List.Item>
                <List.Item>
                  <span style={{ fontWeight: 700 }}>Need:</span> Inclusion of
                  socially interactive modules such as guided peer tasks,
                  communication prompts, and emotional recognition exercises
                  supported by behavioural analytics.
                </List.Item>
              </List>
            </div>
          </Grid.Col>
        </Grid>
        <Grid style={{ marginTop: 80 }}>
          <Grid.Col span={isMobile ? 12 : 6} mt={80}>
            <Text fw={700} fz={30}>
              Research problem
            </Text>
            <Text fw={400} fz={20} mt={40} pr={40}>
              Primary school students in Sri Lanka with learning disabilities
              such as dyslexia and dyscalculia face significant challenges in
              accessing equitable and effective education especially in key
              subjects like Sinhala language and mathematics. The current
              inclusive education system lacks the infrastructure, tools, and
              pedagogical strategies needed to identify these disabilities early
              and deliver personalized instruction tailored to individual
              learning needs. Compounded by limited parental awareness,
              financial constraints, and the absence of diagnostic technology in
              rural areas, these students are often misidentified or neglected,
              resulting in poor academic performance and underdeveloped social
              skills.{" "}
            </Text>
            <Text fw={400} fz={20} mt={40} pr={40}>
              Although machine learning has shown promise in various sectors,
              its application in special education within the Sri Lankan context
              remains underexplored. There is a pressing need for an
              intelligent, adaptive learning system that can accurately identify
              learning disabilities and provide targeted lesson delivery in
              Sinhala and mathematics, while also fostering the social
              development of affected students. Addressing this problem requires
              a multidisciplinary approach combining education, psychology, and
              machine learning to create an inclusive, scalable, and culturally
              relevant solution.{" "}
            </Text>
          </Grid.Col>

          <Grid.Col span={isMobile ? 12 : 6} mt={80}>
            <Text fw={700} fz={30}>
              Research objectives
            </Text>
            <List
              pl={40}
              icon={
                <ThemeIcon color="#CD5656" size={24} radius="xl">
                  <IconCircleFilled size={10} />
                </ThemeIcon>
              }
              mt={40}
              spacing="md"
              size={"xl"}
              center
            >
              <List.Item>
                <Text fw={700} fz={20}>
                  Identify students with dyslexia and dyscalculia
                </Text>{" "}
                Develop a machine learning-based diagnostic tool to detect early
                signs of dyslexia and dyscalculia among primary school students
                using behavioural and academic performance data.
              </List.Item>
              <List.Item>
                <Text fw={700} fz={20}>
                  Deliver personalized Sinhala language lessons for dyslexic
                  students{" "}
                </Text>
                Create adaptive learning content in Sinhala that is tailored to
                the needs of dyslexic students, helping them improve reading,
                writing, and comprehension skills.
              </List.Item>
              <List.Item>
                <Text fw={700} fz={20}>
                  Support mathematics learning for students with dyscalculia
                </Text>{" "}
                Design and implement customized math learning modules that
                simplify number concepts and problem-solving for students
                struggling with dyscalculia.
              </List.Item>
              <List.Item>
                <Text fw={700} fz={20}>
                  Social skills of students with learning difficulties
                </Text>
                Integrate interactive and supportive features in the system that
                encourage communication, confidence, and collaboration among
                students with learning disabilities.
              </List.Item>
            </List>
            <Text fw={700} fz={30} mt={40}>
              Technologies
            </Text>

            <List
              pl={40}
              icon={
                <ThemeIcon color="#CD5656" size={24} radius="xl">
                  <IconCircleFilled size={10} />
                </ThemeIcon>
              }
              mt={40}
              spacing="md"
              size={"xl"}
              center
            >
              <List.Item>Tensorflow</List.Item>
              <List.Item>Flask</List.Item>
              <List.Item>Jupyter Notebook</List.Item>
              <List.Item>Android studio</List.Item>
              <List.Item>Github</List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Milestone;
