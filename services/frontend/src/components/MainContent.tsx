import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MainContent() {
  return (
    <div className="mb-12">
      <section className="max-w-7xl px-4 mx-auto mt-10 ">
        <p className="mb-4 prose max-w-full text-gray-200">
          Welcome to our Spotify MP3 Downloader, your go-to solution for
          converting Spotify tracks to high-quality MP3 files. Our service is
          designed to provide a seamless and efficient way for music lovers to
          enjoy their favorite songs offline. Whether you’re looking to save
          data on the go or curate a personal collection of your favorite
          tracks, our platform offers the easiest and most reliable method for
          downloading music from Spotify.
        </p>
      </section>

      {/* features section */}
      <section className="max-w-7xl text-gray-200 rounded px-4 mx-auto py-6 mt-10">
        <h3 className="mb-6 text-center text-2xl text-spotify-main">
          Key Features of Spotify MP3 Converter
        </h3>
        <Image
          src="/screenshot-3.png"
          width={400}
          height={0}
          alt="screenshot 3"
          className="my-2 mx-auto"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-10/12 sm:w-1/3 flex flex-col gap-2 items-center justify-center">
            <Image src="/like.png" width={50} height={50} alt="logo" />
            <h4 className="text-xl">High-Quality Downloads</h4>
            <p>
              Our downloader preserves the original sound quality of Spotify
              tracks, ensuring that you enjoy the same listening experience as
              you would on the streaming platform. Every MP3 file is crystal
              clear and perfect for your music collection.
            </p>
          </div>
          <div className="w-10/12 sm:w-1/3 flex flex-col gap-2 items-center justify-center">
            <Image src="/like.png" width={50} height={50} alt="logo" />
            <h4 className="text-xl">Fast and Effecient</h4>
            <p>
              We know how valuable your time is. Our Spotify MP3 Downloader is
              designed to be fast and efficient, allowing you to download entire
              playlists in just a few minutes. Experience quick conversions and
              immediate access to your favorite tracks.
            </p>
          </div>
          <div className="w-10/12 sm:w-1/3 flex flex-col gap-2 items-center justify-center">
            <Image src="/like.png" width={50} height={50} alt="logo" />
            <h4 className="text-xl">User-Friendly Interface</h4>
            <p>
              Our platform is designed with simplicity in mind. The intuitive
              interface makes it easy for users of all tech levels to download
              their favorite songs. No complicated steps or technical knowledge
              required – just straightforward, hassle-free downloading.
            </p>
          </div>
        </div>
      </section>

      {/* more para */}
      <section className="max-w-7xl px-4 mx-auto mt-10">
        <h3 className="text-xl mx-auto text-center mb-2 text-spotify-main">
          About Spotify MP3 Downloader Online
        </h3>
        <p className="prose max-w-full mb-4 text-gray-200">
          Our Spotify MP3 Downloader stands out for its user-friendly interface
          and robust performance. We understand the importance of quick and
          hassle-free downloads, which is why our tool is optimized to deliver
          the best experience possible. With just a few clicks, you can have
          your entire playlist downloaded and ready to enjoy offline, anytime,
          anywhere.
        </p>
        {/* <h3 className="text-xl mx-auto text-center mb-2 text-spotify-main">
          Easy to use
        </h3> */}
        <p className="prose max-w-full text-gray-200 ">
          Join our growing community of satisfied users who have discovered the
          convenience and reliability of our Spotify MP3 Downloader. Say goodbye
          to streaming limitations and enjoy your favorite music without
          interruptions. Start downloading today and take your music with you
          wherever you go.
        </p>
      </section>

      {/* how to download section */}
      <section className="max-w-7xl px-4 mt-4 mx-auto  rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-center mb-2 text-spotify-main">
          How to Use our SpotyMP3.app tool
        </h3>
        <p className="mb-4">
          Using our Online Spotify MP3 Downloader is very easy:
        </p>
        <ol className="list-decimal list-inside space-y-4 text-gray-200">
          <li>
            <strong>Copy Spotify URL: </strong>
            Go to Spotify, find the track, playlist, or album you want to
            download, and copy the URL.
          </li>
          <li>
            <strong>Paste in Downloader: </strong>
            Open our Spotify MP3 Downloader and paste the copied URL into the
            provided field.
            <Image
              src="/screenshot-1.png"
              width={400}
              height={0}
              alt="screenshot 1"
              className="mt-2"
            />
          </li>
          <li>
            <strong>Download MP3: </strong>
            Click the download button and wait for the conversion to complete.
            Your MP3 file will be ready to download in just a few moments.
            <Image
              src="/screenshot-2.png"
              width={400}
              height={0}
              alt="screenshot 2"
              className="mt-2"
            />
          </li>
          <li>
            <strong>Save MP3 File: </strong>
            Save the file on your device at desired location.
          </li>
        </ol>
        <p>
          Start enjoying your music offline with our Spotify MP3 Downloader.
          Simple, fast, and high-quality – it’s the best way to keep your
          favorite tunes with you at all times.
        </p>
      </section>
      {/* FAQs section */}
      <h3 className="text-center mt-10 text-xl text-spotify-main">
        FAQs for the Spotify MP3 Downloader
      </h3>
      <Accordion
        type="single"
        collapsible
        className="max-w-7xl px-4 mx-auto mt-10"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            1. Is it legal to download music from Spotify using this tool?
          </AccordionTrigger>
          <AccordionContent>
            A: Downloading music from Spotify using third-party tools is against
            Spotify's terms of service. Ensure you have the right to download
            the content and understand the legal implications.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            2. Do I need a Spotify Premium account to use this downloader?
          </AccordionTrigger>
          <AccordionContent>
            A: No, our downloader works with both free and premium Spotify
            accounts. However, the quality and availability of some tracks may
            vary depending on your account type.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            3. Are there any limits on the number of downloads?
          </AccordionTrigger>
          <AccordionContent>
            A: There are no limits on the number of tracks you can download
            using our Spotify MP3 Downloader. Download as many songs as you want
            and build your ultimate music library.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
