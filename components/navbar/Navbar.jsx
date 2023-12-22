import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Logo from "@/public/imgs/light-logo.svg";
import { Link } from "react-scroll";
import { Button, Drawer, List, ListItem, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState();
  
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  return (
    <header className={styles.navbarContainer}>
      <navbar className={styles.navbar}>
        <Image src={Logo} alt="Khaled-Shouqal-Logo" width={200} height={100} />

        <div style={{ display: "flex", gap: "1.6rem" }}>
          {screenWidth >= 800 ? (
            <>
              <Link to="about-me" smooth duration={1000}>
                <Button color="primary" variant="text">
                  About Me
                </Button>
              </Link>
              <Link to="sessions" smooth duration={1000}>
                <Button color="primary" variant="text">
                  Sessions
                </Button>
              </Link>
              <Link to="contact-me" smooth duration={1000}>
                <Button color="primary" variant="contained">
                  Contact Me
                </Button>
              </Link>
            </>
          ) : (
            <IconButton color="primary" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </div>

        <Drawer anchor="right" open={isDrawerOpen}>
          <div style={{ margin: "10px" }}>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => toggleDrawer(false)}
            >
              <CloseIcon fontSize="inherit" color="primary" />
            </IconButton>
          </div>
          <List
            style={{
              width: "250px",
              height: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <ListItem>
              <Link
                to="about-me"
                smooth
                duration={1000}
                style={{ width: "100%" }}
              >
                <Button
                  color="primary"
                  variant="text"
                  fullWidth
                  onClick={() => toggleDrawer(false)}
                >
                  About Me
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="sessions"
                smooth
                duration={1000}
                style={{ width: "100%" }}
              >
                <Button
                  color="primary"
                  variant="text"
                  fullWidth
                  onClick={() => toggleDrawer(false)}
                >
                  Sessions
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="contact-me"
                smooth
                duration={1000}
                style={{ width: "100%" }}
              >
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={() => toggleDrawer(false)}
                >
                  Contact Me
                </Button>
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </navbar>
    </header>
  );
};

export default Navbar;
