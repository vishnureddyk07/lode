import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Events from '../pages/Events';
import Gallery from '../pages/Gallery';
import Articles from '../pages/Articles';
import Podcast from '../pages/Podcast';
import Leadership from '../pages/Leadership';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ProtectedRoute from '../components/auth/ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Protected Routes */}
      <Route path="/gallery" element={
        <ProtectedRoute>
          <Gallery />
        </ProtectedRoute>
      } />
      <Route path="/articles" element={
        <ProtectedRoute>
          <Articles />
        </ProtectedRoute>
      } />
      <Route path="/podcast" element={
        <ProtectedRoute>
          <Podcast />
        </ProtectedRoute>
      } />
      <Route path="/leadership" element={<Leadership />} />
    </Routes>
  );
}