import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Logo from "@/public/imgs/light-logo.svg";
import { Button } from "@mui/material";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className={styles.navbarContainer}>
      <navbar className={styles.navbar}>
        <Image src={Logo} alt="Khaled-Shouqal-Logo" width={200} height={100} />
        <Link to="contact-me" smooth duration={1000}>
          <Button color="primary" variant="contained">
            contact me
          </Button>
        </Link>
      </navbar>
    </header>
  );
};

export default Navbar;
