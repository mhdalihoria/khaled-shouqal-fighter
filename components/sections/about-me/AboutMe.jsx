import React from "react";
import { useTheme, Grid, Typography } from "@mui/material";
import styles from "./AboutMe.module.css";
import Image from "next/image";
import AboutMeImg from "@/public/imgs/about-me.png";

const AboutMe = () => {
  const theme = useTheme();

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
      <Grid container className={styles.aboutMeContentContainer}>
        <Grid item xm={12} sm={12} md={6} lg={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
              height: "100%",
              marginBottom: "4rem",
            }}
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
              {disciplineElement}. <br />I have been training and competing for
              over 10 years, guided many skilled fighters to be national and
              international champions and will continue to do so for as long as
              I live!
            </Typography>
          </div>
        </Grid>
        <Grid item xm={12} sm={12} md={6} lg={6}>
          <div className={styles.aboutMeImgContainer}>
            <Image
              src={AboutMeImg}
              alt="picture of coach"
              width={220}
              height={250}
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutMe;
