import { fetchData } from "../utils"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCategories = createAsyncThunk('fetchCategories',
    async (_, thunkAPI) => {
        try {
            const res = await fetchData('categories')
            return Object.keys(res.data)
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)

        }
    })