import {createSlice} from '@reduxjs/toolkit'
import { fetchQues } from '../services/questionService'

const initialState = {
    isLoading: true,
    questionData: [],
    error: null
}

const questionSlice = createSlice({
    name: 'questions',
    initialState,
    extraReducers: {
        [fetchQues.pending]: (state) => {
            state.isLoading = true
        },
        [fetchQues.fulfilled]: (state, action) => {
            state.questionData = action.payload
            state.isLoading = false
        },
        [fetchQues.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
})

export default questionSlice.reducer