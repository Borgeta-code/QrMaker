import Head from "next/head";
import { Makerbox } from "../components/makerbox";
import { Inter } from "@next/font/google";
import { Socials } from "../components/socials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>QRMAKER</title>
        <meta name="description" content="Make QRcode easily" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={
          inter.className +
          " flex flex-col justify-center items-center h-screen"
        }
      >
        <Makerbox />
        <Socials />
      </main>
    </>
  );
}
