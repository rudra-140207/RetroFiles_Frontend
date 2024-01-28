import React from 'react'
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import Home from "./components/Home"
import AddCard from "./components/AddCard"
import AllCards from "./components/AllCards"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./index.css"
import EditCard from './components/EditCard';
import Cookie from './components/Cookie';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-card' element={<AddCard />} />
        <Route path='/cards' element={<AllCards />} />
        <Route path='/edit-card/:id' element={<EditCard />} />
        <Route path='/cookie' element={<Cookie />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App