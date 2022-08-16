import axios from "axios"

export const fetchData = async (endPoint) => {
    axios.defaults.baseURL = 'https://the-trivia-api.com/api/'
    return await axios.get(endPoint)
}


export const shuffle = (a, b) => {
    return [...a,b].sort(()=>Math.random() - 0.5)
}