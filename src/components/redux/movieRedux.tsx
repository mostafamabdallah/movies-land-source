import { createSlice } from "@reduxjs/toolkit";

interface Action {
  payload: any;
  type: string;
}

interface Movie {
  id: string;
}

const movieSlice = createSlice({
  name: "movie",
  initialState: { id: "" },
  reducers: {
    setMovieID: (state: Movie, action: Action) => {
      state.id = action.payload;
    },
  },
});

export const { setMovieID } = movieSlice.actions;
export default movieSlice.reducer;
