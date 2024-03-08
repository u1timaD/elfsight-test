import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import personReducer from "./personSlice";


export default configureStore({
	reducer: {
		filter: filterReducer,
		person: personReducer
	}
})