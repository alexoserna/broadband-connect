import Header from './components/Header';
import NavWithSearch from './components/NavSearch';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CoursePost from './pages/CoursePage';
import Careers from './pages/Careers';
import ContactPage from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import RPL from './pages/RPL';
import CertificationPage from './pages/CertificationPage';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";

import { useLoading } from "./context/LoadingContext";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [count, setCount] = useState(0);
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {/* <Header /> */}
      <NavWithSearch />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:slug" element={<CoursePost />} />
        <Route path='courses/certification/:slug' element={<CertificationPage />} />
        <Route path="courses/recognized-prior-learning" element={<RPL />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
