import React from "react";
import { useTheme, Grid } from "@mui/material";
import styles from "./Services.module.css";
import Punch from "@/public/imgs/thai-punch.svg";
import Elbow from "@/public/imgs/thai-elbow.svg";
import Clothes from "@/public/imgs/thai-clothes.svg";
import Kick from "@/public/imgs/thai-kick.svg";
import Image from "next/image";

const Services = () => {
  const theme = useTheme();

  const serviceTitleStyled = {
    color: theme.palette.text.secondary,
    marginTop: "1rem",
  };

  return (
    <section
      style={{ background: theme.palette.background.default }}
      className={styles.servicesSectionContainer}
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        className={styles.servicesContainer}
      >
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <div className={styles.servicesItem}>
            <Image
              src={Punch}
              alt="muay thai greeting"
              width={100}
              height={100}
            />
            <p style={serviceTitleStyled}>Traditional Muay Thai</p>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <div className={styles.servicesItem}>
            <Image
              src={Elbow}
              alt="muay thai greeting"
              width={100}
              height={100}
            />
            <p style={serviceTitleStyled}>Traditional Muay Thai</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <div className={styles.servicesItem}>
            <Image
              src={Kick}
              alt="muay thai greeting"
              width={100}
              height={100}
            />
            <p style={serviceTitleStyled}>Traditional Muay Thai</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <div className={styles.servicesItem}>
            <Image
              src={Clothes}
              alt="muay thai greeting"
              width={100}
              height={100}
            />
            <p style={serviceTitleStyled}>Traditional Muay Thai</p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Services;
