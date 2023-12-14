import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import AboutMe from "@/components/sections/about-me/AboutMe";
import Achievements from "@/components/sections/achievements/Achievements";
import PublicSchedule from "@/components/sections/public-schedule/PublicSchedule";
import PrivateServices from "@/components/sections/private-services/PrivateServices";
import ContactMe from "@/components/sections/contact-me/ContactMe";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <MainLayout>
      <ParallaxProvider>
        <Hero />
        <Services />
        <AboutMe />
        <Achievements />
        <PublicSchedule />
        <PrivateServices />
        <ContactMe />
      </ParallaxProvider>
    </MainLayout>
  );
}
