import Head from "next/head";
import { Inter } from "@next/font/google";
import { Makerbox } from "../components/makerbox";

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
      <main className={inter.className}>
        <div className="flex justify-center items-center mt-4">
          <h1 className="font-bold text-4xl sm:text-5xl text-black uppercase ">
            <span className="text-primary">qr</span>
            maker
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center mt-12 sm:mt-10 lg:mt-14">
          <Makerbox />
        </div>

        <div className="flex justify-center items-center">
          <Socials />
        </div>
      </main>
    </>
  );
}
