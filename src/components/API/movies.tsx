import axios, { AxiosInstance } from "axios";

const moviesURL: string = "https://www.omdbapi.com";

export const fetchMovies:AxiosInstance = axios.create({
  baseURL: moviesURL,
});
