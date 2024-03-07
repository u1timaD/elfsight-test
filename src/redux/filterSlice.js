import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		status: ''
	},
	reducers: {
		setStatus: (state, action) => {
			state.value = action.payload;
		}
	}
})


export const { setStatus } = filterSlice.actions;
export default filterSlice.reducer;