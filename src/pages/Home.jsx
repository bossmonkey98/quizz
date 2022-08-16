import { Button, CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { SelectField } from '../components/SelectField'
import { Box } from "@mui/system";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../services/categoryService';
import { fetchQues } from '../services/questionService';

const Home = () => {
  const { categories, isLoading } = useSelector((store) => store.categories)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    category: '',
    difficulty: '',
  })

  const difficultyOptions = [
    "Easy",
    "Medium",
    "Hard"
  ];

  const typeOptions = [
    "Multiple Choice",
  ];

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchCategories())
    // eslint-disable-next-line
  }, [])


  return (
    isLoading ?
      <CircularProgress />
      :
      <form onSubmit={(e) => {
        e.preventDefault()
        navigate('/questions')
        dispatch(fetchQues(formData))
      }}>
        <SelectField label="Category" options={categories} formData = {formData} setFormData ={setFormData} />
        <SelectField options={difficultyOptions} label="Difficulty" formData = {formData} setFormData ={setFormData} />
        <SelectField options={typeOptions} label="Type"/>
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" size='large' type="submit">
            Get Started
          </Button>
        </Box>
      </form>
  )
}

export default Home