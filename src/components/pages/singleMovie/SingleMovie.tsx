import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { fetchMovies } from "../../API/movies";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";


const API_KEY: string = "2294aaa";
export interface Movie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: [{ Source: string; Value: string }];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

const SingleMovie: React.FC = () => {
  // useing Local storag incase reloading 
  const id = useSelector((state: any) => state.movie.id ? state.movie.id : (JSON.parse(localStorage.getItem("movieID") as unknown as string).imdbID));
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const getSingleMovie: Promise<AxiosResponse> = fetchMovies.get<Movie>(
      `/?i=${id}&apikey=${API_KEY}`
    );
    getSingleMovie.then((res) => {
      setMovie(res.data);
    });
  }, []);
  return (
    <motion.section initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }} className="container flex flex-row mx-auto flex-wrap h-screen w-11/12">
      <div className="md:w-2/3 flex items-center mx-auto mt-10">
        <div className="flex flex-col w-full pr-10">
          <h1 className="text-4xl">{movie?.Title}</h1>
          <p className="text-Lightgray text-sm pt-2">{movie?.Released} | {movie?.Runtime}</p>
          <div style={{ borderTop: '0.5px solid rgba(255, 255, 255, 0.2)' }} className="w-full mt-2"></div>
          <button className="mt-3 mb-6 bg-transparent hover:bg-primary text-white font-semibold w-fit hover:text-white py-2 px-4 border border-#ffffff66 hover:border-transparent rounded">{movie?.Genre}</button>
          <p>{movie?.Plot}</p>
          <p><FontAwesomeIcon className="w-fit text-amber-300 mt-3"
            icon={faStar}
          ></FontAwesomeIcon> {movie?.imdbRating}/
            <span className="text-Lightgray">10</span>
          </p>
        </div>
      </div>
      <div className="md:w-1/3 mx-auto flex items-center">
        <motion.img initial={{ x: '-300px' }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }} style={{ filter: "drop-shadow(2px 4px 23px black)" }} width="100%" src={`${movie?.Poster}`}></motion.img>
      </div>
    </motion.section >
  );
};

export default SingleMovie;
