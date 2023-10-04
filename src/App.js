import React from 'react';
import Nav from './Nav';
import './App.css';
import Header from './Header';
import BookingPage from './bookingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Nav/>
    <Routes>
      <Route path="/bookingPage" element={<BookingPage/>}/>
    </Routes>
    <Header></Header>
    </Router>
  );
}

export default App;
