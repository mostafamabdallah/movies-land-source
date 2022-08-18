import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieRedux";

export default configureStore({
  reducer: {
    movie: movieSlice,
  },
});
