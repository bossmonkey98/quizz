import React from 'react'
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { shuffle } from '../utils';
import {useNavigate} from 'react-router-dom'

export const QCard = ({ q, disable, setDisable, score, setScore }) => {
  const navigate = useNavigate()
  return (
    !q ? <Box m={5}>
      <Typography mb={3}>Oops seems like you refreshed the window</Typography>
      <Button  variant='outlined'
        onClick={()=> navigate('/')}
      >Click here to restart</Button>
    </Box> :
      <Box mt={5}>
        <Typography>{q.question}</Typography>
        {shuffle(q.incorrectAnswers, q.correctAnswer).map((option) => (
          <Box mt={2}  >
            <Button variant="contained"
              disabled={disable} fullWidth
              onClick={() => {
                setDisable(true)
                if (option === q.correctAnswer) setScore(prev => prev + 10)
              }}
            >
              {option}
            </Button>
          </Box>
        ))}
        <Box m={5}>
          Score: {score}
        </Box>
      </Box>
  )
}
