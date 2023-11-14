"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Page = ({ params }) => {
  const { bandName } = params;
  const [band, setBand] = useState({});
  const [albums, setAlbums] = useState([]);

  const bandImages = [
    "/Kiss3.jpg",
    "/Aerosmith1.jpg",
    "/Beatles2.jpg",
    "/Angra.jpg",
    "/Metallica1.webp",
    "/IronMaiden1.jpg",
    "/CradleOfFilth1.jpeg",
    "/WithinTemptation2.jpeg",
    "/Queen1.jpg",
    "/PearlJam1.jpg",
    "/RhapsodyOfFire1.jpg",
    "/DreamTheater.jpg",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch bands data
        const bandsResponse = await axios.get(
          `https://my-json-server.typicode.com/improvein/dev-challenge/bands/${bandName}`
        );
        setBand(bandsResponse.data);

        // Fetch albums data
        const albumsResponse = await axios.get(
          `https://my-json-server.typicode.com/improvein/dev-challenge/albums?bandId=${bandName}`
        );
        setAlbums(albumsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [bandName]);

  return (
    <div className="flex min-h-screen flex-1 flex-row-reverse">
      <div className="flex flex-1  flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div>
          <h1 className="text-5xl 2xl:text-5xl font-bold leading-9 tracking-tight text-gray-900 pb-5">
            WikiBands
          </h1>
        </div>
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {band.name && (
            <h1 className="text-3xl font-bold mb-4">{band.name}</h1>
          )}

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Origin:</h2>
            <p>Year: {band.year}</p>
            <p>Place: {band.place}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Genre:</h2>
            <p>{band.genreCode}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Members:</h2>
            {Array.isArray(band.members) && band.members.length > 0 ? (
              <ul>
                {band.members.map((member, index) => (
                  <li key={index}>{member.name}</li>
                ))}
              </ul>
            ) : (
              <p>No members available.</p>
            )}
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Albums:</h2>
            {Array.isArray(albums) && albums.length > 0 ? (
              <ul>
                {albums.map((album) => (
                  <li key={album.id}>
                    <p>
                      {album.name} , {album.year}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No information at the moment</p>
            )}
          </div>
        </div>
        <Link href="/">
          <button className="flex w-full justify-center rounded-md bg-orange-900 px-10 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
            Back to search
          </button>
        </Link>
      </div>
      <div className="relative hidden w-full h-full flex-1 lg:block">
        <img
          src={bandImages[band.id - 1] || "/default-band-image.jpg"}
          alt={`Image for ${band.name}`}
          className="object-cover w-full h-full md:h-screen "
        />
      </div>
    </div>
  );
};
export default Page;
