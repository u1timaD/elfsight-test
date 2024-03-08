import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPersons = createAsyncThunk(
	'person/fetchPersonsStatus',
	async () => {
		const { data } = await axios.get("https://rickandmortyapi.com/api/character/?page=9");
		// const data = await response;
		return data.results;
	}
)



export const personSlice = createSlice({
	name: 'person',
	initialState: {
		persons: [],
		statusFetch: 'loading' // loading | success | error 
	},
	reducers: {
		setPersons: (state, actions) => {
			state.persons = actions.payload;
		}
	}, 
	extraReducers: (builder) => {
		builder.addCase(fetchPersons.pending, (state) => {
			state.statusFetch = 'loading';
			state.persons = [];
		})
		.addCase(fetchPersons.fulfilled, (state, action) => {
			state.persons.push(action.payload);
			state.statusFetch = 'success'; 
		})
		.addCase(fetchPersons.rejected, (state) => {
			state.statusFetch = 'error';
			state.persons = [];
		})
	}
})


export const { setPersons } = personSlice.actions;
export default personSlice.reducer;