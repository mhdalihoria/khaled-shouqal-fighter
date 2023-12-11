import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import AboutMe from "@/components/sections/about-me/AboutMe";
import Achievements from "@/components/sections/achievements/Achievements";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <AboutMe />
      <Achievements />
    </MainLayout>
  );
}
