import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './pages/Error';
import Home from './pages/Home'
import Questions from './pages/Questions'
import Result from './pages/Result'

function App() {
  return (
    <div className="App">
      <Container maxWidth='sm'>
        <Box textAlign='center' mt='5'>
          <Typography variant='h2' fontWeight='bold' >
            Quizz App
          </Typography>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/result' element={<Result />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Box>
      </Container>
    </div>
  );
}

export default App;
