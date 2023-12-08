import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import heroBg from "@/public/imgs/hero-bg.jpg";

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <Image
        src={heroBg}
        alt="muay-thai-fight-as-background"
        width={1200}
        height={800}
        className={styles.heroBg}
      />
    </section>
  );
};

export default Hero;
