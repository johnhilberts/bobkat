import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Day from './components/Day';
import Photos from './components/Photos';
import Song from './components/Song';
import Story from './components/Story';
import Venue from './components/Venue';
import Layout from './components/Layout';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="day" element={<Day />} />
          <Route path="photos" element={<Photos />} />
          <Route path="song" element={<Song />} />
          <Route path="story" element={<Story />} />
          <Route path="venue" element={<Venue />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;