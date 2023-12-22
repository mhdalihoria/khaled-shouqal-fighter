import React from "react";
import styles from "./Achievements.module.css";
import { useTheme, Grid, Typography } from "@mui/material";
import GreetingsLogo from "@/public/imgs/thai-greeting.svg";
import Image from "next/image";
import { useInView, animated } from "@react-spring/web";

const Achievements = () => {
  const theme = useTheme();
  const [ref, fade] = useInView(
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
    { once: true }
  );

  const gridTitleStyle = {
    color: theme.palette.primary.main,
    textAlign: "center",
    marginBottom: "1rem",
  };
  const gridItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    maxWidth: "460px",
    margin: "1rem auto",
    fontSize: "1.rem",
  };

  const achievmentsList = [
    "World championship Muay Thai (IFMA) 2019",
    "Arab championship simi pro Kick boxing K1 2022",
    "Challenge championship Kick Boxing K1 professional 2021",
    "National Syrian Championship Kick Boxing 2018",
    "National Syrian Championship Kick Boxing K1 2021",
    "National Syrian Championship Muay Thai K1 2022",
    "National Syrian Championship Kick Boxing K1 2023",
  ];

  const achievmentsListElements = achievmentsList.map((achievment) => (
    <Grid item xs={12} sm={12} md={12} key={achievment}>
      <div style={gridItemStyle}>
        <Image
          src={GreetingsLogo}
          alt="greetings logo"
          width={30}
          height={30}
        />
        <p style={{ color: theme.palette.text.secondary }}>{achievment}</p>
      </div>
    </Grid>
  ));

  return (
    <section className={styles.achievementsContainer}>
      <Grid container className={styles.achievementsContentContainer}>
        <animated.div ref={ref} style={{margin: "0 auto", ...fade}}>
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
              mb={5}
              className={styles.achievmentsTitle}
            >
              Winner of numerous championships <br /> including but not limited
              to:
            </Typography>
            {achievmentsListElements}
          </Grid>
        </animated.div>
      </Grid>
    </section>
  );
};

export default Achievements;
