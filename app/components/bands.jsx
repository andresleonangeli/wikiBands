// components/Bands.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../app/components/navbar";

const Bands = () => {
  const [bands, setBands] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const [filterYear, setFilterYear] = useState("");

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
          "https://my-json-server.typicode.com/improvein/dev-challenge/bands"
        );
        setBands(bandsResponse.data);
      } catch (error) {
        console.error("Error fetching bands data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredBands = bands.filter((band) => {
    const matchesName = band.name
      .toLowerCase()
      .includes(filterName.toLowerCase());
    const matchesGenre = band.genreCode
      .toLowerCase()
      .includes(filterGenre.toLowerCase());
    const matchesYear = band.year.toString().includes(filterYear);

    return matchesName && matchesGenre && matchesYear;
  });

  return (
    <div className="bg-gray-900 p-0 text-center">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center p-4 sm:px-6 lg:flex-none lg:px-20">
        {/* Filter input fields */}
        <div className="flex flex-row items-center bg-gray-800 font-bold pt-7 pb-5 px-10 border border-gray-800 rounded-md mt-6 space-x-3 w-full md:w-auto">
          <label htmlFor="nameFilter" className="pr-2 pt-1  text-white">
            Name:
          </label>
          <input
            type="text"
            id="nameFilter"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            className="border bg-gray-700 border-gray-700 rounded-md p-1 text-white shadow-sm hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-600 outline-none font-light"
          />
          <label htmlFor="genreFilter" className="pr-2 pt-1  text-white">
            Genre:
          </label>
          <input
            type="text"
            id="genreFilter"
            value={filterGenre}
            onChange={(e) => setFilterGenre(e.target.value)}
            className="border bg-gray-700 border-gray-700 rounded-md p-1 text-white shadow-sm hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-600 outline-none font-light"
          />
          <label htmlFor="yearFilter" className="pr-2 pt-1  text-white">
            Year:
          </label>
          <input
            type="text"
            id="yearFilter"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            className="border bg-gray-700 border-gray-700 rounded-md p-1 text-white shadow-sm hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-600 outline-none font-light"
          />
        </div>
      </div>

      {/* Display filtered bands */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-4">
        {filteredBands.map((band) => (
          <Link key={band.id} href={`/${band.id}`}>
            <div
              key={band.id}
              className="flex flex-col items-center bg-gray-800 border border-gray-900 rounded-lg shadow hover:bg-gray-700 dark:border-gray-900 dark:bg-gray-800"
            >
              <Image
                src={bandImages[band.id - 1] || "/default-band-image.jpg"}
                alt={`Image for ${band.name}`}
                width={400}
                height={400}
                className="object-cover w-full h-48 md:h-60 rounded-t-lg md:rounded-t-lg md:rounded-l-lgs"
              />
              <div className="flex flex-col p-4 leading-normal w-full md:w-auto">
                <h1 className="text-xl tracking-wider font-bold pb-1 text-gray-100 dark:text-white">
                  {band.name}
                </h1>
                <p className="mb-2 text-gray-100 tracking-wider dark:text-gray-400">
                  <span className="font-normal">{band.year}</span>
                </p>
                <p className=" text-gray-100 tracking-wider dark:text-gray-400">
                  <span className="font-normal">{band.genreCode}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Bands;