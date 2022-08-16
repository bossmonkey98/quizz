import React from 'react'
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Result = () => {
  const navigate = useNavigate()
  const score = localStorage.getItem('score')
  const { questionData } = useSelector((store) => store.questions)
  return (
    <Box mt={5}>
      <Typography variant ="h3" fontWeight={'bold'} m={3}>Score</Typography>
      <Typography variant="h3" fontWeight="bold" mb={2}>
        {score}
      </Typography>
      <Button variant="outlined"
        onClick={() => {
          navigate('/')
        }}>
        back to settings!
      </Button>
      <h2>Answers</h2>
      {questionData.map((q) => (
        <Box mt={2}>
          <Typography >
            Question. {q.question}
          </Typography>
          <Typography>
            Answer. {q.correctAnswer}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Result