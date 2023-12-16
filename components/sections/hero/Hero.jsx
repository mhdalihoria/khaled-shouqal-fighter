import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import heroBg from "@/public/imgs/hero-bg.png";
import svg from "@/public/imgs/thai-clothes.svg";
import { Button, useTheme, Typography, useMediaQuery } from "@mui/material";

const Hero = () => {
  const theme = useTheme();
  console.log(theme.palette.primary.main);
  const mdBreakPoint = useMediaQuery(theme.breakpoints.up("md"));
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
          sx={{ fontSize: mdBreakPoint ? "3.4rem" : "2rem" }}
        >
          Ready To Become The Champion You Always Dreamed Of?
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          align="center"
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: mdBreakPoint ? "1.2rem" : "1rem" }}

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
