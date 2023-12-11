import React from "react";
import { useTheme, Grid } from "@mui/material";
import styles from "./Services.module.css";
import Greetings from "@/public/imgs/thai-greeting.svg";
import Image from "next/image";

const Services = () => {
  const theme = useTheme();
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
              src={Greetings}
              alt="muay thai greeting"
              width={100}
              height={100}
            />
            <p style={{ color: theme.palette.primary.main }}>
              Traditional Muay Thai
            </p>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <div className={styles.servicesItem}>
            <Image
              src={Greetings}
              alt="muay thai greeting"
              width={100}
              height={100}
            />
            <p style={{ color: theme.palette.primary.main }}>
              Traditional Muay Thai
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <div className={styles.servicesItem}>
            <Image
              src={Greetings}
              alt="muay thai greeting"
              width={100}
              height={100}
            />
            <p style={{ color: theme.palette.primary.main }}>
              Traditional Muay Thai
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <div className={styles.servicesItem}>
            <Image
              src={Greetings}
              alt="muay thai greeting"
              width={100}
              height={100}
            />
            <p style={{ color: theme.palette.primary.main }}>
              Traditional Muay Thai
            </p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Services;
