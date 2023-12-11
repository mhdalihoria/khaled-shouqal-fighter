import React from "react";
import { useTheme, Grid } from "@mui/material";
import styles from "./AboutMe.module.css";
import Image from "next/image";
import AboutMeImg from "@/public/imgs/about-me.png";

const AboutMe = () => {
  const theme = useTheme();

  return (
    <section
      className={styles.aboutMeContainer}
      style={{ background: theme.palette.background.paper }}
    >
      <Grid container className={styles.aboutMeContentContainer}>
        <Grid item xm={12} sm={6} md={6} lg={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
              height: "100%"
            }}
          >
            <h1 style={{ color: theme.palette.text.primary }}>Who Am I?</h1>
            <p style={{ color: theme.palette.text.secondary }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              provident accusamus blanditiis inventore placeat vitae! Maiores
              optio dolorem nihil eos aperiam saepe quod dicta, ad odit harum
              sint quam pariatur.
            </p>
          </div>
        </Grid>
        <Grid item xm={12} sm={6} md={6} lg={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Image src={AboutMeImg} alt="picture of coach" />
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutMe;
