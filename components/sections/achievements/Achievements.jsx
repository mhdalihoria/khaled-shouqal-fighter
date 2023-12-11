import React from "react";
import styles from "./Achievements.module.css";
import { useTheme, Grid } from "@mui/material";
import GreetingsLogo from "@/public/imgs/thai-greeting.svg";
import Image from "next/image";

const Achievements = () => {
  const theme = useTheme();
  return (
    <section className={styles.achievementsContainer}>
      <Grid container className={styles.achievementsContentContainer}>
        <Grid item xs={12}>
          <h1
            style={{ color: theme.palette.primary.main, textAlign: "center" }}
          >
            Coaching Diplomas In Muay Thai From Thailand 2018:
          </h1>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <div
            style={{
              color: "red",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* <i className="fa-solid fa-file-certificate" /> */}
            <Image
              src={GreetingsLogo}
              alt="greetings logo"
              width={20}
              height={20}
              style={{
                filter:
                  "hue-rotate(0deg) brightness(100%) contrast(100%) saturate(100%) invert(0%) sepia(0%)",
                filter: "drop-shadow(0px 0px 5px #e13435)",
              }}
            />
            <p>Certified Muay Boran Trainer</p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Achievements;
