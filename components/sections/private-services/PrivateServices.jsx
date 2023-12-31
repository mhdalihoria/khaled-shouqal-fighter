import React from "react";
import {
  useTheme,
  Grid,
  Typography,
  Container,
  Button,
  Box,
  CardHeader,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import styles from "./PrivateServices.module.css";
import { useInView, animated } from "@react-spring/web";
import { Link } from "react-scroll";

const PrivateServices = () => {
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
      config: { duration: "400" },
    }),
    { once: true }
  );

  const tiers = [
    {
      title: "Kickboxing",
      description: [
        "Perfect punches and kicks for effective combat.",
        "Enhance movement for strategic positioning.",
        "Explore dynamic positions for striking versatility.",
        "Improve cardio, strength, and endurance.",
      ],
      buttonText: "Contact Me",
      buttonVariant: "outlined",
    },
    {
      title: "Muay Thai",
      description: [
        "Learn powerful clinch techniques.",
        "Embrace rich Muay Thai traditions.",
        "Practical techniques for real-world situations.",
        "Cardio, strength, flexibility—achieve it all.",
      ],
      buttonText: "Contact Me",
      buttonVariant: "outlined",
    },
  ];
  return (
    <animated.section
      className={styles.privateContainer}
      ref={ref}
      style={fade}
    >
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
          Private Session
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Book a session, become your best fighter.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={12} md={6}>
              <Card className={styles.serviceCard}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.text.primary,
                  }}
                />
                <CardContent sx={{ margin: "2rem 0", flex: "1" }}>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="p"
                        variant="subtitle1"
                        key={line}
                        sx={{ margin: ".7rem" }}
                      >
                        <i
                          className="fa-solid fa-circle-check"
                          style={{
                            color: theme.palette.primary.main,
                            margin: "10px",
                          }}
                        ></i>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Link
                    to="contact-me"
                    smooth
                    duration={500}
                    style={{ width: "100%" }}
                  >
                    <Button fullWidth variant={tier.buttonVariant}>
                      {tier.buttonText}
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </animated.section>
  );
};

export default PrivateServices;
