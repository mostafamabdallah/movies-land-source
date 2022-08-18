import { AxiosResponse } from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../API/movies";
import Loading from "../../Loading";
import { setMovieID } from "../../redux/movieRedux";
import MovieItem from "./MovieItem";
// API key
const API_KEY: string = "2294aaa";
export interface Movie {
  Title: string;
  Year?: string;
  imdbID: string;
  Type?: string;
  Poster?: string;
}

const MoviesList: React.FC = () => {

  const dispatch = useDispatch();

  // movieList
  const [movies, setMovies] = useState([]);
  // Total Movie Count
  const [totalmovies, setTotalmovies] = useState(0);
  // Page Indexing
  const [page, setPage] = useState(1);
  // Seach value
  const [search, setSearch] = useState('batman');
  // Not Found for no API data
  const [notFound, setFotFound] = useState(false);
  // Loading 
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // API Data 3 Query Parms
    // s=> search input value 
    // apikey => API key
    // page => page
    const getMovies: Promise<AxiosResponse> = fetchMovies.get<Movie>(
      `/?s=${search}&apikey=${API_KEY}&page=${page}`
    );

    getMovies.then((res) => {
      const moviesData: [] = res.data.Search
      setMovies([...movies, ...moviesData]);
      setTotalmovies(res.data.totalResults);
      setLoading(false)
    });
  }, [page]);


  useEffect(() => {
    const getMovies: Promise<AxiosResponse> = fetchMovies.get<Movie>(
      `/?s=${search}&apikey=${API_KEY}&page=${page}`
    );
    getMovies.then((res) => {
      if (res.data.Response == "True") {
        setFotFound(false)
        setMovies(res.data.Search);
        setLoading(false)
      } else if (res.data.Error == "Movie not found!") {
        setFotFound(true)
      }
    });
  }, [search]);

  return (
    <motion.section initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }} className="container w-10/12 mx-auto ">
      {/* search bar */}
      <div className="flex justify-center items-center mt-10 mb-10">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input value={search} onChange={(e) => {
              setSearch(e.target.value)
            }} type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." />
          </div>
        </div>
      </div>
      <div style={{ borderTop: '0.5px solid rgba(255, 255, 255, 0.2)' }} className="w-full mb-4"></div>
      {/* movie list */}
      {!notFound ? <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {!loading ? movies.map((el: Movie, i: number) => {
          return (
            <div key={i} className="movieElement shadow-md">
              {movies.length ? <Link to={`/${el.Title}`} onClick={() => {
                dispatch(setMovieID(
                  el.imdbID
                ))
                localStorage.setItem("movieID", JSON.stringify(el))
              }}> <MovieItem data={el}></MovieItem></Link> : ''}
            </div>
          );
        }) : <Loading noofItems={8}></Loading>}
      </div> : (<div><h3 className="text-center mb-6">Movie not found</h3></div>)}
      {/* show more */}
      <div className="flex flex-row justify-center">
        {movies.length < totalmovies ? <button onClick={(e) => {
          if (page < Math.ceil(totalmovies / 10)) {
            setPage(page + 1)
            setLoading(true)
          }
        }} className="mt-6 mb-6 bg-transparent hover:bg-primary text-white font-semibold hover:text-white py-2 px-4 border border-#ffffff66 hover:border-transparent rounded">show more</button> : ''
        }
      </div>
    </motion.section>
  );
};
export default MoviesList;
