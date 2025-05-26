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
import frame from "../images/Frame.png";
import frame1 from "../images/Frame-1.png";
import frame2 from "../images/Frame-2.png";
import frame3 from "../images/Frame-3.png";
import frame4 from "../images/Frame-4.png";
import frame5 from "../images/Frame-5.png";
import frame6 from "../images/Frame-6.png";
import frame7 from "../images/Frame-7.png";
import { Carousel } from "@mantine/carousel";

function Gallery() {
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
              Gallery
            </Text>
          </Paper>
        </Grid.Col>
        <Grid.Col mt={80} data-aos="fade-up">
          <Carousel
            slideSize="25%"
            slideGap="xl"
            align={"end"}
            loop
            withIndicators
          >
            <Carousel.Slide>
              {" "}
              <Image
                src={frame7}
                //  w={"70%"}
                style={{ border: "1px solid black", borderRadius: 20 }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image
                src={frame1}
                // w={"70%"}
                style={{ border: "1px solid black", borderRadius: 20 }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image
                src={frame2}
                // w={"70%"}
                style={{ border: "1px solid black", borderRadius: 20 }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image
                src={frame3}
                // w={"70%"}
                style={{ border: "1px solid black", borderRadius: 20 }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image
                src={frame4}
                //w={"70%"}
                style={{ border: "1px solid black", borderRadius: 20 }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image
                src={frame5}
                //w={"70%"}
                style={{ border: "1px solid black", borderRadius: 20 }}
              />
            </Carousel.Slide>

            <Carousel.Slide>
              {" "}
              <Image
                src={frame6}
                //w={"70%"}
                style={{ border: "1px solid black", borderRadius: 20 }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              {" "}
              <Image
                src={frame}
                //w={"70%"}
                style={{ border: "1px solid black", borderRadius: 20 }}
              />
            </Carousel.Slide>
          </Carousel>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}

export default Gallery;
