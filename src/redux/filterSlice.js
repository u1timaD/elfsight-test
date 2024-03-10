import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    status: "",
    persons: [],
    reset: true,
    filtersName: ["gender", "status", "type", "species"],
    filtersList: [],
    filterGender: "",
    filterStatus: "",
    filterType: "",
    filterSpecies: "",
    filterName: ""
  },
  reducers: {
    setStatus: (state, action) => {
      state.value = action.payload;
    },
    setFilterPersons: (state, action) => {
      state.persons = action.payload;
    },

    // ?Отрефакторить всё, для компакности
    setFilterGender: (state, action) => {
      state.filterGender = `&gender=${action.payload}`;
      state.reset = false;
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = `&status=${action.payload}`;
      state.reset = false;
    },
    setFilterType: (state, action) => {
      state.filterType = `&type=${action.payload}`;
      state.reset = false;
    },
    setFilterSpecies: (state, action) => {
      state.filterSpecies = `&species=${action.payload}`;
      state.reset = false;
    },
    setFilterName: (state, action) => {
      state.filterName = `&name=${action.payload}`;
      state.reset = false;
    },
    setCleanFilterName: (state) => {
      state.filterName = '';
    },
    resetFilters: (state) => {
      state.filterGender = "",
      state.filterStatus = "",
      state.filterType = "",
      state.filterSpecies = "",
      state.filterName = "",
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
  setFilterPersons,
  findFilters,
  setFilterGender,
  setFilterStatus,
  setFilterType,
  setFilterSpecies,
  setFilterName,
  setCleanFilterName,
  resetFilters,
  setResetFilters
} = filterSlice.actions;
export default filterSlice.reducer;
