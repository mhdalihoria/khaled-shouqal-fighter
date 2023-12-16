import React, { useEffect, useState } from "react";
import {
  useTheme,
  Grid,
  Typography,
  Container,
  Button,
  Divider,
  Box,
} from "@mui/material";
import Image from "next/image";
import styles from "./ContactMe.module.css";
import phone from "@/public/imgs/phone.png";
import qrcode from "@/public/imgs/qr-code.svg";
import { useParallax } from "react-scroll-parallax";

const ContactMe = () => {
  const [screenWidth, setScreenWidth] = useState();
  const [hidePhone, setHidePhone] = useState();
  const phoneRef = useParallax({
    translateY: [50, -300, "easeInQuad"],
  });

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

  useEffect(() => {
    if (screenWidth <= 800) {
      setHidePhone(true);
    } else {
      setHidePhone(false);
    }
  }, [screenWidth]);

  return (
    <section className={styles.contactMeContainer}>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Contact Me
        </Typography>
      </Container>
      <Container
        disableGutters
        maxWidth="md"
        component="main"
        sx={{
          pt: 8,
          pb: 6,
          background: (theme) => theme.palette.background.paper,
          borderRadius: "15px",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h4"
              align="center"
              color="primary"
              component="p"
              sx={{ fontWeight: "600" }}
            >
              Follow Me
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              component="p"
              sx={{ marginTop: "1em" }}
            >
              You can ask me questions, lets have a chat
            </Typography>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: "1rem" }}
              columnSpacing={5}
            >
              {/* <div className={styles.socialBtnsContainer}> */}
              <Grid item>
                <div className={styles.socialBtnsContainer}>
                  <Button variant="contained" sx={{ background: "#C13584" }}>
                    <i className="fa-brands fa-instagram" />
                    Instagram
                  </Button>
                  <Button variant="contained" sx={{ background: "#1877F2" }}>
                    <i className="fa-brands fa-square-facebook" />
                    Facebook
                  </Button>
                </div>
              </Grid>
              {/* </div> */}

              <Grid item>
                <Divider
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    margin: "2rem auto",
                  }}
                >
                  OR
                </Divider>
              </Grid>
              {/* <div className={styles.socialBtnsContainer}> */}
              <Grid item>
                <Image
                  src={qrcode}
                  alt="scan me qr code"
                  width={100}
                  height={125}
                />
              </Grid>
              {/* </div> */}
            </Grid>
          </Grid>

          {!hidePhone ? (
            <Grid
              item
              sm={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
              className={styles.phoneContainer}
              ref={phoneRef.ref}
            >
              <Image
                src={phone}
                alt="screenshot of instagram profile"
                width={200}
                height={400}
              />
            </Grid>
          ) : (
            <div ref={phoneRef.ref}></div>
          )}
        </Grid>
      </Container>
    </section>
  );
};

export default ContactMe;
