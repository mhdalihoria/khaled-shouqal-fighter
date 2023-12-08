import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Logo from "@/public/imgs/light-logo.svg";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <header className={styles.navbarContainer}>
      <navbar className={styles.navbar}>
        <Image src={Logo} alt="Khaled-Shouqal-Logo" width={200} height={100} />

        <Button sx={{ color: "#fd3c3d" }} variant="contained">
          contact me
        </Button>
      </navbar>
    </header>
  );
};

export default Navbar;
