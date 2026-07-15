import { useState } from 'react';
import Home from './pages/Home';
import Movie from './pages/Movie';

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:id' element={<Movie/>} />
        </Routes>
    </Router>
  )
}

export default App;