import React from "react";
import { Grid, useTheme, Button, useMediaQuery } from "@mui/material";
import styles from "./Footer.module.css";
import Image from "next/image";
import Logo from "@/public/imgs/light-logo.svg";

const Footer = () => {
  const theme = useTheme();
  const mdBreakPoint = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <footer
      className={styles.container}
      style={{
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ width: "80%", margin: "0 auto", paddingTop: "1rem" }}
      >
        <Grid item xs={12} sm={6}>
          <div
            className={
              !mdBreakPoint
                ? styles.centerGridItem
                : styles.spacebetweenGridItem
            }
          >
            <Image
              src={Logo}
              alt="Khaled-Shouqal-Logo"
              width={200}
              height={100}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            className={
              !mdBreakPoint ? styles.centerGridItem : styles.flexEndGridItem
            }
          >
            <Button variant="text">
              <i className="fa-brands fa-square-instagram" />
            </Button>
            <Button variant="text">
              <i className="fa-brands fa-square-facebook" />
            </Button>
            <Button variant="text">
              <i className="fa-brands fa-tiktok" />
            </Button>
          </div>
        </Grid>
      </Grid>
      <div
        style={{
          textAlign: "center",
          paddingBottom: "1em",
          fontSize: ".8rem",
          marginTop: "1rem",
        }}
      >
        © 2023 Khaled Shouqual Fighter, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
