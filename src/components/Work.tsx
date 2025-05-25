import { Text, Paper, Grid, Image, List, Anchor } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IconExternalLink } from "@tabler/icons-react";

function Work() {
  const isMobile = useMediaQuery("(max-width: 850px)");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const works = [
    {
      image: [require("../images/work/Lighthouse/l1.png")],
      title: "Lighthouse Report Generate Automation - App Script",
      description: [
        "Built an automated system for generating customized Google Lighthouse reports from URLs listed in a Google Spreadsheet.",
        "Integrated frontend (Google Apps Script) and backend (Node.js/Express) for seamless interaction between Google Sheets and report generation.",
        "Created a custom menu item in Google Sheets UI to trigger report generation (onOpen() and generateSelectedReports() functions).",
        "Allowed selection of up to 3 URLs at a time from spreadsheet rows.",
        "Sent POST requests to backend with each URL for Lighthouse processing.",
        "Received customized HTML reports in base64 format, converted to PDF, and saved into a Google Drive folder ('Lighthouse Reports').",
        "Automatically added the generated report’s Drive link back into the spreadsheet next to each corresponding URL.",
        "Implemented column shifting and header renaming if column already had data.",
        "Used the lighthouse Node.js module and chrome-launcher to generate performance reports for each URL",
        "Accepted POST requests on /lighthouse route, processed the URL, and ran Lighthouse audits with JSON and HTML output.",
        "Customized the HTML report with Base64-encoded cover page, header, testimonials, and end page.",
        "Fully automated pipeline: Spreadsheet → Backend → Report → PDF → Drive → Spreadsheet.",
        "Custom branding: Injected cover images, headers, and testimonials into Lighthouse reports.",
        "Error handling: Graceful fallback and detailed status logging in spreadsheet and Apps Script log.",
        "Efficient column management: Dynamic handling of Drive link insertion without overwriting existing data.",
      ],
      techs: [
        "Google Apps Script",
        "Node.js",
        "Express.js",
        "Lighthouse CLI",
        "Google Drive API",
        "SpreadsheetApp",
      ],
    },
    {
      image: [require("../images/work/Ticketbot/tb1.png")],
      title: "Support Ticket System - Discord",
      description: [
        "Users can create tickets via /ticket open, select issue types, and communicate privately with support staff. Staff can close, claim, or escalate tickets using reaction-based buttons or commands.",
        "A modern React-based interface that lets server admins view ticket history, configure server-specific settings (e.g., ticket limits, categories), and view analytics.",
        "Tickets are automatically closed if inactive beyond a configurable threshold. Admins can define auto-close durations using a cron-based scheduler.",
        "Each ticket can be mirrored in a Slack channel, enabling external support teams to communicate with Discord users without switching platforms. The bridge supports bi-directional message sync using @slack/web-api.",
        "Roles and user-level restrictions are enforced at runtime, ensuring only authorized users can interact with ticket channels.",
        "Dynamically generate proxies based on selected plan, country, type, and quantity.",
        "The bot and services are built entirely in TypeScript with strict typing. Zod is used to validate runtime data, making it resilient to malformed payloads or misconfigurations.",
        "Handles uncaught exceptions and unhandled promise rejections to ensure uptime and maintainability.",
        "Designed with modular architecture: commands, services, cron jobs, and integrations are separated into maintainable layers.",
      ],
      techs: [
        "TypeScript ",
        "Supabse(PostgreSQL)",
        "Node.js",
        "React",
        "Discord.js",
        "@slack/web-api",
        "Express.js",
      ],
    },
    {
      image: [require("../images/work/Proxybot/pb1.png")],
      title: "Proxy Generation Bot Intergration - Discord",
      description: [
        "Fully registered and synchronized commands across all guilds using a custom deployment module.",
        "Commands include: /view_plan, /generate_proxies, /view_countries, /help, /register, /view_api, /max_subuser_usage, /all_subuser_usage.",
        "Only users with a specific role (or admin role) can execute sensitive commands.",
        "Restricts commands to a specific channel (COMMAND_CHANNEL_ID) for cleaner usage and security.",
        "View plan details, available countries, and sub-user usage limits for proxy services.",
        "Dynamically generate proxies based on selected plan, country, type, and quantity.",
        "Uses Discord modals for secure API key registration via a UI-based interaction.",
        "Handles uncaught exceptions and unhandled promise rejections to ensure uptime and maintainability.",
        "Modular design with clean separation of command logic using imported functions.",
      ],
      techs: ["Discord js", "Proxy", "Node", "Type Script"],
    },
    {
      image: [require("../images/work/Descriptiongenerator/dg1.png")],
      title: "Automate Description Generator - Groq API",
      description: [
        "Automate the description generation by reading data sheet.",
        "Developed a script for read relevant data from daa sheet and search via API.",
        "Sends asynchronous API requests to generate product descriptions using llama-3.3-70b-versatile model.",
        "Processes all rows in parallel for efficiency.",
        "Uses large language model (LLM) to generate unique, SEO-friendly descriptions.",
        "Integrates with GROQ’s API using OpenAI-compatible endpoints.",
        "Write generated descriptions back to Excel or a database.",
        "Front-end dashboard to preview and edit generated content.",
        "Simple GET /generate-description endpoint to trigger the process.",
      ],
      techs: ["Node js", "Express", "Axios", "Groq API"],
      link: "https://github.com/IT21352676/Groq-description-generator",
    },

    {
      image: [require("../images/work/Imagefinder/if1.png")],
      title: "Automate Image Searching - Bing API",
      description: [
        "This application automate the list of image searching.",
        "Developed a script for read relevant data from daa sheet and search via API",
        "Implemented image downloading function that also can save image inside  the data sheet as well",
        "Fast accurrate searching mechanism.",
        "Output the data sheet with included images.",
      ],
      techs: ["Python", "Bing Search API"],
      link: "https://github.com/IT21352676/GettingImagesFromBingAPI",
    },

    {
      image: [
        require("../images/work/Booknest/bn1.PNG"),
        require("../images/work/Booknest/bn2.PNG"),
        require("../images/work/Booknest/bn3.PNG"),
        require("../images/work/Booknest/bn4.PNG"),
        require("../images/work/Booknest/bn5.PNG"),
        require("../images/work/Booknest/bn6.PNG"),
        require("../images/work/Booknest/bn7.PNG"),
        require("../images/work/Booknest/bn8.PNG"),
      ],
      title: "Booknest - AI Book Recommendation System",
      description: [
        "This application features a seamless integration with a Discord bot using Discord.js.",
        "Developed a full-stack book recommendation platform with personalized suggestions using OpenAI.",
        "Implemented authentication, user libraries, and review management with React.js and Node.js.",
        "Personalized Recommendations: Users receive book recommendations based on their reading history, utilizing the ChatGPT.",
        "User Authentication: Implemented secure user authentication with login and signup functionalities, ensuring a personalized experience.",
        "JWT Web Tokens: Employed JSON Web Tokens (JWT) for secure session management, providing users with a reliable and safe access mechanism.",
      ],
      techs: [
        "React",
        "Node.js",
        "Express",
        "Discord.js",
        "MongoDB",
        "OpenAI API",
      ],
      link: "https://github.com/IT21352676/book-recommendation-app",
    },
    {
      image: [
        require("../images/work/Walkwell/ww1.png"),
        require("../images/work/Walkwell/ww2.png"),
        require("../images/work/Walkwell/ww3.png"),
      ],
      title: "Wearable IoT Health Tracker",
      description: [
        "A compact IoT wearable device designed to monitor key health metrics of patients during rehabilitation, with real-time tracking and alert features to improve safety and recovery outcomes.",
        "Step Counting: Utilizes gyroscope data to count steps accurately, helping track mobility progress during rehabilitation.",
        "Heart Rate Monitoring: Measures heart rate using pulse sensors, allowing continuous cardiac health assessment.",
        "Fall Detection: Employs accelerometer data and threshold-based logic to detect falls and immediately trigger alerts.",
        "Real-Time Tracking: Sends live data to a Node-RED dashboard via MQTT protocol, allowing caregivers and healthcare professionals to monitor patient activity and health metrics remotely.",
        "ESP32 Microcontroller: Acts as the core controller, efficiently processing sensor data and handling network communication.",
        "Emergency Alerts: Automatically notifies caregivers via mobile or web interface upon detecting abnormal events such as falls or abnormal heart rate levels.",
        "Battery Efficient: Designed with low-power operation in mind to ensure extended battery life suitable for daily use.",
        "Compact and Wearable: Can be integrated into a wristband, ankle strap, or clip-on device, ensuring user comfort and mobility.",
      ],
      techs: [
        "C++ (Arduino)",
        "MQTT",
        "ESP32",
        "IoT",
        "Node Red",
        "Web Dashboard",
        "Wearable Design ",
        "Fall Detection Algorithms",
      ],
      link: "https://github.com/IT21352676/Walk-Well-Fitness-Tracker-IOT-Project",
    },
    {
      image: [
        require("../images/work/Fitx/fitx1.png"),
        require("../images/work/Fitx/fitx2.png"),
        require("../images/work/Fitx/fitx3.png"),
      ],
      title: "FitX Fitness Social Web Application",
      description: [
        "A fully functional fitness social platform designed to connect users who share an interest in health and fitness.",
        "Built with Spring Boot for the backend, React for the frontend, and MUI for the UI, this web app lets users sign up, log in, and connect with others through social media-like features.",
        "Login & Signup: Secure authentication, including Google Authentication.",
        "Social Interaction: Users can share posts, comment, like, and connect with others.",
        "CRUD Operations: Comprehensive profile and post management.",
        "Responsive Design: Works smoothly across devices.",
        "Backend: Spring Boot powers the server-side logic and database.",
        "Frontend: React and MUI provide an interactive user experience.",
        "FitX offers a platform for fitness enthusiasts to stay connected, track progress, and share motivation.",
      ],
      techs: ["React", "MUI", "Spring Boot", "Java Script", "Java", "My SQL"],
      link: "https://github.com/PAF-IT3030/paf-assignment-2024-jun_we_102_team",
    },
    {
      image: [
        require("../images/work/Gurugedara/gg3.jpg"),
        require("../images/work/Gurugedara/gg1.jpeg"),
        require("../images/work/Gurugedara/gg2.PNG"),
      ],
      title: "Guru Gedara – Educational Mobile App for Dyslexic Children",
      description: [
        "A mobile application tailored for children with dyslexia, designed to provide personalized learning support through adaptive technologies.",
        "Developed using Flutter for the frontend and Dart as the core programming language,  ensuring a responsive and smooth cross-platform experience.",
        "Machine Learning Integration: Identifies learning disabilities and evaluates their severity to deliver customized educational content.",
        "Adaptive Learning: Offers personalized teaching methods based on each child’s specific learning needs. ",
        "Child-Centric Design: Features a friendly UI/UX with appropriate visuals and colour schemes to create an engaging and supportive learning environment. ",
        "Local Language Support: Entirely developed in Sinhala to make content accessible and relatable for Sri Lankan children.",
        "Social Impact: Aims to empower children with disabilities by enhancing their ability to learn independently and effectively through technology.",
      ],
      techs: [
        "Flutter",
        "TensorFlow",
        "Dart",
        "Machine Learning",
        "Sinhala Localization",
        "Mobile Development",
      ],
      link: "https://github.com/IT21352676/24-25J-105",
    },
    {
      image: [
        require("../images/work/Virtualdressing/vr1.png"),
        require("../images/work/Virtualdressing/vr2.png"),
        require("../images/work/Virtualdressing/vr3.png"),
        require("../images/work/Virtualdressing/vr4.png"),
      ],
      title: "Virtual Dressing Room – AI-Powered Virtual Try-On Experience ",
      description: [
        "An innovative application transforming the online fashion retail experience using realtime computer vision and artificial intelligence.",
        "Built with Python, using CVzone for real-time body tracking and TensorFlow for intelligent body size analysis. ",
        "Virtual Try-On: Users can upload a video or use a live camera feed to try on clothing items virtually through augmented reality (AR) technology.",
        "Size Recommendation: Automatically suggests the best-fitting size for users by analysing body dimensions. ",
        "Computer Vision Integration: Leverages advanced CV techniques to provide accurate, real-time garment overlay and positioning. ",
        "AI-Powered Fit Analysis: Utilizes machine learning models to enhance the accuracy of virtual fitting and improve user satisfaction. ",
        "Enhances customer experience by reducing uncertainty in online shopping, boosting engagement, and minimizing return rates. ",
        "Build React frontend and connect with the backend interactions",
      ],
      techs: [
        "Python",
        "CVzone",
        "TensorFlow",
        "Computer Vision",
        "Augmented Reality",
        "React",
      ],
      link: "https://github.com/IT21352676/Virtual_Dressing_Room",
    },
    {
      image: [
        require("../images/work/Liontours/fuel3.jpg"),
        require("../images/work/Liontours/fuel1.jpg"),
        require("../images/work/Liontours/fuel5.jpg"),
      ],
      title: "LionTours Fuel Management Web System ",
      description: [
        "A robust fuel management solution developed for LionTours (PVT) LTD, designed to monitor and optimize fuel usage across company vehicles and storage tanks. ",
        "Built with the MERN stack (MongoDB, Express, React, Node.js) for a scalable, high performance architecture.",
        "Fuel Tracking: Enables real-time monitoring of fuel levels and consumption rates across the entire fleet and storage units. ",
        "CRUD Operations: Allows administrators to add, update, and manage vehicles, fuel entries, and tank data effortlessly. ",
        "Dashboard View: Provides a centralized dashboard for visualizing live fuel data, aiding in decision-making and operational efficiency. ",
        "Frontend Interface: Designed using Bootstrap and Tailwind CSS to deliver a modern, clean, and responsive UI. ",
        "Backend Logic: Node.js and Express manage API interactions and business logic, with MongoDB for data storage. ",
        "Improves resource management and cost-efficiency by enabling data-driven fuel usage insights. ",
      ],
      techs: ["MongoDB", "Express.js", "React", "Node", "MUI", "Bootstrap"],
      link: "https://github.com/SLIITITP/y2_s2_wd_it_01-itp_we_b01_g01/tree/IT21352676-S.G.H.K-Sasanka",
    },
  ];

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
              Work
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col
          style={{ display: "flex", justifyContent: "center" }}
          mt={16}
          data-aos="fade-up"
        >
          <Text c={"#D1D5DB"} fz={20} fw={"normal"}>
            Some of the noteworthy projects I have built:
          </Text>
        </Grid.Col>

        <Grid.Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 48,
          }}
          mt={48}
          data-aos="fade-up"
        >
          {works.map((item, index) => (
            <Grid gutter={0} key={index} data-aos="fade-up">
              <Grid.Col
                span={isMobile ? 12 : 6}
                order={index % 2 === 1 && isMobile ? 1 : 0}
              >
                <Paper
                  h={"100%"}
                  shadow="xl"
                  bg={index % 2 === 0 ? "#374151" : "#1F2937"}
                  style={{
                    borderTopLeftRadius: index % 2 === 1 && isMobile ? 0 : 12,

                    borderBottomLeftRadius:
                      index % 2 === 0 && isMobile ? 0 : 12,
                    borderTopRightRadius: index % 2 === 0 && isMobile ? 12 : 0,
                    borderBottomRightRadius:
                      index % 2 === 1 && isMobile ? 12 : 0,

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  p={isMobile ? 32 : 48}
                >
                  {index % 2 === 0 && (
                    <Carousel slideGap="md" loop withIndicators>
                      {Array.isArray(item.image) &&
                        item.image.map((itm, idx) => (
                          <Carousel.Slide key={idx}>
                            <Image src={itm} radius="md" />
                          </Carousel.Slide>
                        ))}
                    </Carousel>
                  )}
                  {index % 2 === 1 && (
                    <>
                      <Text c={"#F9FAFB"} fz={20} fw={400}>
                        {item.title}
                      </Text>

                      <List mt={24} fz={16} c={"#D1D5DB"} fw={"normal"}>
                        {item.description.map((itm, idx) => (
                          <List.Item key={idx}>{itm}</List.Item>
                        ))}
                      </List>
                      <div
                        style={{
                          display: "flex",
                          gap: 8,
                          marginTop: 24,
                          flexWrap: "wrap",
                        }}
                      >
                        {item.techs.map((itm, idx) => (
                          <Paper
                            key={idx}
                            bg={"#374151"}
                            pr={20}
                            pl={20}
                            pt={4}
                            pb={4}
                            radius={12}
                          >
                            <Text c={"#D1D5DB"} fz={14} fw={"normal"}>
                              {itm}
                            </Text>
                          </Paper>
                        ))}
                      </div>

                      <div style={{ marginTop: 24 }}>
                        {item.link ? (
                          <Anchor href={item.link} target="_blank">
                            <IconExternalLink color="#4B5563" />
                          </Anchor>
                        ) : (
                          <Text c={"#4B5563"}>
                            Preview link not available due to security reasons
                          </Text>
                        )}
                      </div>
                    </>
                  )}
                </Paper>
              </Grid.Col>
              <Grid.Col span={isMobile ? 12 : 6}>
                <Paper
                  h={"100%"}
                  shadow="xl"
                  style={{
                    borderTopRightRadius: index % 2 === 0 && isMobile ? 0 : 12,
                    borderBottomRightRadius:
                      index % 2 === 1 && isMobile ? 0 : 12,
                    borderTopLeftRadius: index % 2 === 1 && isMobile ? 12 : 0,
                    borderBottomLeftRadius:
                      index % 2 === 0 && isMobile ? 12 : 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  bg={index % 2 === 0 ? "#1F2937" : "#374151"}
                  p={isMobile ? 32 : 48}
                >
                  {index % 2 === 1 && (
                    <Carousel slideGap="md" loop align="start" withIndicators>
                      {Array.isArray(item.image) &&
                        item.image.map((itm, idx) => (
                          <Carousel.Slide key={idx}>
                            <Image src={itm} radius="md" />
                          </Carousel.Slide>
                        ))}
                    </Carousel>
                  )}
                  {index % 2 === 0 && (
                    <>
                      <Text c={"#F9FAFB"} fz={20} fw={400}>
                        {item.title}
                      </Text>
                      <List mt={24} fz={16} c={"#D1D5DB"} fw={"normal"}>
                        {item.description.map((itm, idx) => (
                          <List.Item key={idx}>{itm}</List.Item>
                        ))}
                      </List>
                      <div
                        style={{
                          display: "flex",
                          gap: 8,
                          marginTop: 24,
                          flexWrap: "wrap",
                        }}
                      >
                        {item.techs.map((itm, idx) => (
                          <Paper
                            key={idx}
                            bg={"#374151"}
                            pr={20}
                            pl={20}
                            pt={4}
                            pb={4}
                            radius={12}
                          >
                            <Text c={"#D1D5DB"} fz={14} fw={"normal"}>
                              {itm}
                            </Text>
                          </Paper>
                        ))}
                      </div>
                      <div style={{ marginTop: 24 }}>
                        {item.link ? (
                          <Anchor href={item.link} target="_blank">
                            <IconExternalLink color="#4B5563" />
                          </Anchor>
                        ) : (
                          <Text c={"#4B5563"}>
                            Preview link not available due to security reasons
                          </Text>
                        )}
                      </div>
                    </>
                  )}
                </Paper>
              </Grid.Col>
            </Grid>
          ))}
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Work;
