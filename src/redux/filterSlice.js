import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    status: "",
    persons: [],
    reset: false,
    filtersName: ["gender", "status", "type", "species"],
    filtersList: [],
    filterGender: "",
    filterStatus: "",
    filterType: "",
    filterSpecies: "",
  },
  reducers: {
    setStatus: (state, action) => {
      state.value = action.payload;
    },
    setPersons: (state, action) => {
      state.persons = action.payload;
    },

    // ?Отрефакторить всё, для компакности
    setFilterGender: (state, action) => {
      state.filterGender = action.payload;
      state.reset = false;
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
      state.reset = false;
    },
    setFilterType: (state, action) => {
      state.filterType = action.payload;
      state.reset = false;
    },
    setFilterSpecies: (state, action) => {
      state.filterSpecies = action.payload;
      state.reset = false;
    },
    resetFilters: (state) => {
      state.filterGender = "",
      state.filterStatus = "",
      state.filterType = "",
      state.filterSpecies = "",
      state.reset = true;
    },

    setResetFilters: (state, action) => {
      state.reset = action.payload;
    },

    findFilters: (state) => {
      // +Прохожусь по массиву имен фильтров и на его основе выбираю из всего объекта нужные фильтры. Получается массив с массивами, также отсортированный

      state.filtersList = state.filtersName.map((name) =>
        [...new Set(state.persons.map((filter) => filter[name]))].sort()
      );
    },
  },
});

export const {
  setStatus,
  setPersons,
  findFilters,
  setFilterGender,
  setFilterStatus,
  setFilterType,
  setFilterSpecies,
  resetFilters,
  setResetFilters
} = filterSlice.actions;
export default filterSlice.reducer;
