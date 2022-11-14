import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Movies from './pages/Movies';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/login' element={<Login />} />
        <Route index path='/signin' element={<SignIn />} />
        <Route index path='/player' element={<Player />} />
        <Route index path='/movies' element={<Movies />} />
        <Route index path='/' element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
