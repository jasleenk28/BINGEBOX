import React, { useState, useEffect } from "react";
import requests from "./requests.js";
import axios from "./axios.js";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
        "${base_url}${movie?.backdrop_path}"
    )`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {" "}
          {movie?.title || movie?.name || movie?.original_name}{" "}
        </h1>

        {/* div-> 2 buttons */}
        <div className="banner_buttons">
          <button class="banner_button"> Play </button>
          <button class="banner_button"> My List </button>
        </div>

        {/* description */}
        <h1 class="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div class="banner-fadeBottom"></div>
    </header>
  );
}

export default Banner;
