import React from "react";
import styles from "./Achievements.module.css";
import { useTheme, Grid } from "@mui/material";
import GreetingsLogo from "@/public/imgs/thai-greeting.svg";
import Image from "next/image";

const Achievements = () => {
  const theme = useTheme();

  const gridTitleStyle = {
    color: theme.palette.primary.main,
    textAlign: "center",
    marginBottom: "1rem",
  };
  const gridItemStyle = {
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    margin: "1rem",
    fontSize: "1.rem"
  };
  return (
    <section className={styles.achievementsContainer}>
      <Grid container className={styles.achievementsContentContainer}>
        <Grid item xs={12}>
          <h1 style={gridTitleStyle}>
            Coaching Diplomas In Muay Thai From Thailand 2018:
          </h1>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <div style={gridItemStyle}>
            <Image
              src={GreetingsLogo}
              alt="greetings logo"
              width={30}
              height={30}
            />
            <p style={{ color: theme.palette.text.secondary }}>
              Certified Muay Boran Trainer
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div style={gridItemStyle}>
            <Image
              src={GreetingsLogo}
              alt="greetings logo"
              width={30}
              height={30}
            />
            <p style={{ color: theme.palette.text.secondary }}>
              Certified Muay Boran Trainer
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div style={gridItemStyle}>
            <Image
              src={GreetingsLogo}
              alt="greetings logo"
              width={30}
              height={30}
            />
            <p style={{ color: theme.palette.text.secondary }}>
              Certified Muay Boran Trainer
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div style={gridItemStyle}>
            <Image
              src={GreetingsLogo}
              alt="greetings logo"
              width={30}
              height={30}
            />
            <p style={{ color: theme.palette.text.secondary }}>
              Certified Muay Boran Trainer
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div style={gridItemStyle}>
            <Image
              src={GreetingsLogo}
              alt="greetings logo"
              width={30}
              height={30}
            />
            <p style={{ color: theme.palette.text.secondary }}>
              Certified Muay Boran Trainer
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div style={gridItemStyle}>
            <Image
              src={GreetingsLogo}
              alt="greetings logo"
              width={30}
              height={30}
            />
            <p style={{ color: theme.palette.text.secondary }}>
              Certified Muay Boran Trainer
            </p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Achievements;
