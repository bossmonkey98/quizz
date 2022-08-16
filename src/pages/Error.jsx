import React from 'react'
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import {useNavigate} from 'react-router-dom'


const Error = () => {
    const navigate = useNavigate()
  return (
      <Box textAlign={'center'} m={10}>
          <Typography m={3} fontWeight='bold' variant = 'h4'>
              Error page not found!!!
          </Typography>
          <Button variant='outlined' onClick={()=> navigate('/')}>
              Go to Homepage
          </Button>
      </Box>
  )
}

export default Error