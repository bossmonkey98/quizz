import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Button, Typography, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { QCard } from '../components/QCard';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
  const { questionData } = useSelector((store) => store.questions)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [disable, setDisable] = useState(false)
  const [score, setScore] = useState(0)
  const navigate = useNavigate()

  return (
    false ?
      <CircularProgress /> :
      <Box width='100%' mt={5}>
        <Typography variant="h4">Question No {questionIndex + 1}  </Typography>
        <QCard q={
          questionData[questionIndex]}
          disable={disable}
          setDisable={setDisable}
          score={score}
          setScore={setScore}
        />
        {questionIndex < 9 ?
          <Button
            variant='contained'
            fullWidth
            onClick={() => {
              setQuestionIndex((prev) => ++prev)
              setDisable(false)
            }}
          >Next
          </Button> :
          <Button
            variant='contained'
            fullWidth
            onClick={() => {
              navigate('/result')
              localStorage.setItem('score', score)
            }}
          >Finish
          </Button>
        }
      </Box>
  );
};


export default Questions