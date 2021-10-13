import Head from "next/head";
import { AboutCambia, Depoiment, Hero, History, HowItWorks } from "../components";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Projeto Cambia</title>
      </Head>

      <Hero />
      <AboutCambia />
      <History />
      <Depoiment />
      <HowItWorks />
    </>
  );
}
