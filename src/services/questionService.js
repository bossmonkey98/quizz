import { fetchData } from "../utils"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchQues = createAsyncThunk('fetchQues',
    async ({ category, difficulty }, thunkAPI) => {
        try {
            const res = await fetchData(`questions?categories=${category}&limit=10&difficulty=${difficulty}`)
            return res.data
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
})