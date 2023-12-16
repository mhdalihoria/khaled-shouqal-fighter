import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import heroBg from "@/public/imgs/hero-bg.png";
import svg from "@/public/imgs/thai-clothes.svg";
import { Button, useTheme, Typography } from "@mui/material";

const Hero = () => {
  const theme = useTheme();
  console.log(theme.palette.primary.main);
  return (
    <section className={styles.heroContainer}>
      <section className={styles.heroBgContainer}>
        <Image
          src={heroBg}
          className={styles.heroBgImg}
          alt="muay thai fight"
          width={1620}
          height={1080}
        />
      </section>
      <section className={styles.heroContentContainer}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          className={styles.heroContentTitle}
        >
          Ready To Become The Champion You Always Dreamed Of?
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          align="center"
          color="text.secondary"
          gutterBottom
          className={styles.heroContentParagraph}
        >
          Kick-Start Your Martial Arts Journey To Learn Cool And Practical
          Disciplines
        </Typography>

        <Button variant="contained" color="primary">
          Read More
        </Button>
      </section>
    </section>
  );
};

export default Hero;
