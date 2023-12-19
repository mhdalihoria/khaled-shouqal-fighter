import React, { useState } from "react";
import { useTheme, Grid } from "@mui/material";
import styles from "./Services.module.css";
import Punch from "@/public/imgs/thai-punch.svg";
import Elbow from "@/public/imgs/thai-elbow.svg";
import Clothes from "@/public/imgs/thai-clothes.svg";
import Kick from "@/public/imgs/thai-kick.svg";
import Image from "next/image";
import { useInView, animated } from "@react-spring/web";

const Services = () => {
  const theme = useTheme();
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      once: true,
    }
  );

  const serviceTitleStyled = {
    color: theme.palette.text.secondary,
    marginTop: "1rem",
  };

  const servicesArr = [
    {
      title: "Learn To Punch Hard",
      src: Punch,
      alt: "muay thai punch",
    },
    {
      title: "Throw Perfect Elbows",
      src: Elbow,
      alt: "muay thai elbow",
    },
    {
      title: "Throw Most Brutal Kicks",
      src: Kick,
      alt: "muay thai kick",
    },
    {
      title: "Get Traditional Clothes",
      src: Clothes,
      alt: "muay thai clothes",
    },
  ];

  const servicesElements = servicesArr.map((service) => (
    <Grid item xs={12} sm={6} md={3} lg={3} key={service.title}>
      <animated.div className={styles.servicesItem} ref={ref} style={springs}>
        <Image src={service.src} alt={service.alt} width={100} height={100} />
        <p style={serviceTitleStyled}>{service.title}</p>
      </animated.div>
    </Grid>
  ));

  return (
    <section
      style={{
        background: theme.palette.background.default,
      }}
      className={styles.servicesSectionContainer}
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        className={styles.servicesContainer}
      >
        {servicesElements}
      </Grid>
    </section>
  );
};

export default Services;
