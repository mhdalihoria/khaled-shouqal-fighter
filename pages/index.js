import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
    </MainLayout>
  );
}
