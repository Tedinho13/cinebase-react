import { useState } from 'react';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CollectionProvider } from './components/context/CollectionContext';

import Collection from './pages/Collection';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <CollectionProvider>
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:id' element={<Movie/>} />
          <Route path='/search/:query' element={<Search/>} />
          <Route path='/collection' element={<Collection/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
    </Router>
    </CollectionProvider>
  )
}

export default App;