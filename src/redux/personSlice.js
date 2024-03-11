import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPersons = createAsyncThunk(
  "person/fetchPersonsStatus",
  async ({
    filterGender,
    filterStatus,
    filterType,
    filterSpecies,
    filterName,
    currentPage,
  }) => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${currentPage}${filterName}${filterStatus}${filterGender}${filterType}${filterSpecies}`
    );
    return data;
  }
);

export const personSlice = createSlice({
  name: "person",
  isLoading: false,
  initialState: {
    persons: [],
    pages: "",
    currentPage: 1,
    statusFetch: "loading", // loading | success | error
  },
  reducers: {
    setPersons: (state, actions) => {
      state.persons = actions.payload;
    },
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersons.pending, (state) => {
        state.statusFetch = "loading";
        state.persons = [];
      })
      .addCase(fetchPersons.fulfilled, (state, action) => {
        state.persons = action.payload.results;
        state.pages = action.payload.info.pages;
        state.statusFetch = "success";
      })
      .addCase(fetchPersons.rejected, (state) => {
        state.statusFetch = "error";
        state.persons = [];
      });
  },
});

export const { setPersons, setIsLoading, setCurrentPage } = personSlice.actions;
export default personSlice.reducer;
