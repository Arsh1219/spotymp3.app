"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import { SkeletonCard } from "./ui/SkeletonCard";
import { MdDownload } from "react-icons/md";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { AlbumOrPlaylist, Song, DownloadProgress } from "./interfaces";
import { FaDeleteLeft } from "react-icons/fa6";

export function MainInput() {
  const [loading, setLoading] = useState<boolean>(false);
  const inputURL = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>();
  const [albumOrPlaylistData, setAlbumOrPlaylistData] =
    useState<AlbumOrPlaylist>();
  const [songsData, setSongsData] = useState<Song[]>([]);
  const [downloadLoading, setDownloadLoading] = useState<number[]>([]);
  const [downloadProgress, setDownloadProgress] = useState<DownloadProgress>(
    {}
  );

  const getMetaData = async () => {
    setError("");
    if (
      !inputURL.current?.value ||
      !inputURL.current?.value.startsWith("https://")
    ) {
      return;
    }
    setLoading(true);
    try {
      const apiResp = await fetch(
        `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/get-metadata`,
        {
          method: "POST",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: inputURL.current.value }),
        }
      );
      const { apiResponse } = await apiResp.json();

      const { data } = apiResponse;

      // const { data } = dummyData;
      if (!data) {
        setError("Unable to get data from API...");
        return;
      }
      const { cover_url, album_name, album_artist } = data[0];
      setAlbumOrPlaylistData({
        cover_url,
        album_name,
        album_artist,
      });
      setSongsData(data);
    } catch (error) {
      console.log(error);
      setError("Please check the input URL is invalid.");
    } finally {
      setLoading(false);
    }
  };

  const downloadTrack = async ({
    url,
    index,
  }: {
    url: string;
    index: number;
  }) => {
    setError("");
    setDownloadLoading((prev) => [...prev, index]);
    setDownloadProgress((prev) => ({ ...prev, [index]: 0 }));

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev[index] >= 100) {
          clearInterval(interval);
          return { ...prev, [index]: 100 };
        }
        return { ...prev, [index]: prev[index] + 10 };
      });
    }, 1000);

    try {
      const apiResp = await fetch(
        `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/download-track`,
        {
          method: "POST",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        }
      );
      const apiResponse = await apiResp.json();
      const { file_url } = apiResponse;
      if (!file_url) {
        setError("unable to download the track...");
        return;
      }
      window.location = file_url;
    } catch (error) {
    } finally {
      setDownloadLoading((downloadLoading) =>
        downloadLoading.filter((item) => item !== index)
      );
    }
  };

  const resetAll = () => {
    setLoading(false);
    setError("");
    setAlbumOrPlaylistData(undefined);
    setSongsData([]);
    setDownloadLoading([]);
    setDownloadProgress({});
  };

  return (
    <>
      {!albumOrPlaylistData && !songsData.length && (
        <div className="flex flex-col w-full items-center space-x-2 gap-3 sm:gap-0  ">
          <Input
            type="text"
            className="bg-zinc-950  text-lg py-6 w-11/12 sm:w-10/12 lg:w-6/12 rounded-2xl"
            placeholder="Enter Spotify URL..."
            ref={inputURL}
          />

          {loading && (
            <section className="mt-4 mb-1">
              <SkeletonCard />
            </section>
          )}

          <div className="flex gap-2 mt-2">
            <Button
              className="bg-spotify-main flex gap-1 items-center justify-center py-6 px-6"
              onClick={() => getMetaData()}
              disabled={loading ? true : false}
            >
              {loading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <MdDownload className="w-5 h-5" />
              )}
              <span className="text-lg">Download</span>
            </Button>
          </div>
        </div>
      )}

      {error && (
        <>
          <p className="text-red-500">{error}</p>
        </>
      )}
      {albumOrPlaylistData && songsData.length && (
        <>
          {/*  albums data */}
          <div className="flex flex-col items-center justify-center gap-2 mt-4">
            <Image
              src={albumOrPlaylistData.cover_url}
              width={200}
              height={200}
              alt="album image"
            />
            <span className="text-spotify-main text-lg">
              Album: {albumOrPlaylistData.album_name}
            </span>
            <span>Artist: {albumOrPlaylistData.album_artist}</span>
          </div>
          {/* songs data */}
          <div className="max-w-3xl w-full">
            {songsData.map((item, index) => {
              return (
                <figure
                  key={index}
                  className="flex flex-col gap-3 border-t-2 border-gray-700 py-3"
                >
                  <div className="flex flex-wrap w-full justify-between items-center  ">
                    <div className="flex gap-4 items-center justify-center">
                      <span className="bg-zinc-800 py-1 px-2 rounded-full">
                        {index + 1}
                      </span>
                      <div className="flex flex-col">
                        <span>{item.name}</span>
                        <span>{item.artist}</span>
                      </div>
                    </div>

                    <Button
                      className="bg-spotify-main hover:bg-green-600 text-white flex gap-1 items-center justify-center py-4 text-sm sm:text-base lg:text-lg"
                      disabled={downloadLoading.includes(index) ? true : false}
                      onClick={() => downloadTrack({ url: item.url, index })}
                    >
                      {downloadLoading.includes(index) ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          <span>Starting Download...</span>
                        </>
                      ) : (
                        <>
                          {/* <MdDownload className="w-4 h-4" /> */}
                          <span>Download</span>
                        </>
                      )}
                    </Button>
                  </div>
                  {downloadLoading.includes(index) && (
                    <div>
                      <span>This may take a few seconds...</span>
                      {/* <Progress value={33} /> */}
                      <Progress value={downloadProgress[index] || 0} />
                    </div>
                  )}
                </figure>
              );
            })}
          </div>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white flex gap-2 items-center justify-center py-4 text-sm sm:text-base lg:text-lg"
            onClick={resetAll}
          >
            <FaDeleteLeft />
            <span>Go Back</span>
          </Button>
        </>
      )}
    </>
  );
}
