import Header from './components/Header';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CoursePost from './pages/CoursePost';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import About from './pages/About';

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-post" element={<CoursePost />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      
    </>
  )
}

export default App
