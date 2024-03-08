import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    status: "",
    persons: [],
    filtersName: ["gender", "status", "type", "species"],
    filtersList: [],
  },
  reducers: {
    setStatus: (state, action) => {
      state.value = action.payload;
    },
    setPersons: (state, action) => {
      state.persons = action.payload;
    },
    findFilters: (state) => {

			// +Прохожусь по массиву имен фильтров и на его основе выбираю из всего объекта нужные фильтры. Получается массив с массивами, также отсортированный
			
      state.filtersList = state.filtersName.map((name) => [
        ...new Set(state.persons.map((filter) => filter[name])),
      ].sort());
    },
  },
});

export const { setStatus, setPersons, findFilters } = filterSlice.actions;
export default filterSlice.reducer;
