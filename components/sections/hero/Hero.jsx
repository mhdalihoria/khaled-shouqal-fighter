import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import heroBg from "@/public/imgs/hero-bg.jpg";
import svg from "@/public/imgs/thai-clothes.svg";
import { Button, useTheme } from "@mui/material";

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
        <h1
          style={{ color: theme.palette.text.primary }}
          className={styles.heroContentTitle}
        >
          Lorem ipsum dolor sit amet 
        </h1>
        <p
          style={{ color: theme.palette.text.secondary }}
          className={styles.heroContentParagraph}
        >
          adipisicing elit. Praesentium eligendi exercitationem maxime in harum
          iure possimus animi, similique
        </p>
        <Button variant="contained" color="primary">
          Read More
        </Button>
      </section>
    </section>
  );
};

export default Hero;
