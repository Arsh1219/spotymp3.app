import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { MainInput } from "@/components/MainInput";
import MainContent from "@/components/MainContent";

const metaTitle = "Spotify MP3 Downloader - Convert Spotify to MP3";
const metaDesc =
  "Spotify to MP3 Downloader for fast, easy, and high-quality music downloads. Convert Spotify tracks to MP3 in seconds and enjoy your favorite songs offline.";
const websiteName = "Spotify MP3 Downloader";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_WEBSITE_URL}`),
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
    siteName: websiteName,
    images: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/logo.png`,
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="flex flex-col gap-2 justify-center items-center pb-10 px-2">
          <h1 className="text-4xl mt-6 mb-3 text-spotify-main text-center">
            Spotify MP3 Downloader
          </h1>
          <h2 className="mb-4">
            Spotify to MP3 converter online tool to easily download Spotify
            songs/tracks/albums to MP3.
          </h2>
          <MainInput />
        </section>
        <MainContent />
      </main>
      <Footer />
    </>
  );
}
