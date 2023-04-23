import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Fracnch from './components/Fracnch'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Home from './components/Home'
import { BrowserRouter as Router,  Routes,
  Route,
 } from 'react-router-dom';

const App = () => {
  return (    
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/franchId" element={<Fracnch/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App

