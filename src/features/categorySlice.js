import { createSlice } from "@reduxjs/toolkit"
import { fetchCategories } from "../services/categoryService"

const initialState = {
    categories: [],
    error: null,
    isLoading: true,
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: {
        [fetchCategories.pending]: (state) => {
            state.isLoading = true
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.categories = action.payload
            state.isLoading = false
        },
        [fetchCategories.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

export default categorySlice.reducer