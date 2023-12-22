import React from "react";
import { useTheme, Grid, Typography } from "@mui/material";
import styles from "./AboutMe.module.css";
import Image from "next/image";
import AboutMeImg from "@/public/imgs/about-me.png";
import { useInView, animated } from "@react-spring/web";

const AboutMe = () => {
  const theme = useTheme();
  const [refLeft, fadeLeft] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -50,
      },
      to: {
        opacity: 1,
        x: 0,
      },
      config: { duration: "500" },
    }),
    { once: true }
  );
  const [refRight, fadeRight] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 50,
      },
      to: {
        opacity: 1,
        x: 0,
      },
      config: { duration: "500" },
    }),
    { once: true }
  );

  const disciplines = [
    "Muay Thai, ",
    "Muay Boran, ",
    "Boxing, ",
    "K1 Kickboxing",
  ];

  const disciplineElement = disciplines.map((discipline, index) => (
    <strong style={{ color: theme.palette.primary.main }} key={discipline}>
      {discipline}
    </strong>
  ));

  return (
    <section
      className={styles.aboutMeContainer}
      style={{ background: theme.palette.background.paper }}
    >
      <div className={styles.aboutMeContentContainer}>
        <Grid container>
          <Grid item xm={12} sm={12} md={6} lg={6}>
            <animated.div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
                height: "100%",
                marginBottom: "4rem",
                ...fadeLeft,
              }}
              ref={refLeft}
            >
              <Typography
                component="h1"
                variant="h3"
                color="text.primary"
                gutterBottom
              >
                Who Am I?
              </Typography>
              <Typography component="p" color="text.secondary">
                My name is Khaled Shouqal. A Certified Muay Thai from Thailand
                with the following disciplines (2018): <br />
                {disciplineElement}. <br />I have been training and competing
                for over 10 years, guided many skilled fighters to be national
                and international champions and will continue to do so for as
                long as I live!
              </Typography>
            </animated.div>
          </Grid>
          <Grid item xm={12} sm={12} md={6} lg={6}>
            <animated.div
              className={styles.aboutMeImgContainer}
              ref={refRight}
              style={fadeRight}
            >
              <Image
                src={AboutMeImg}
                alt="picture of coach"
                width={220}
                height={250}
              />
            </animated.div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default AboutMe;
