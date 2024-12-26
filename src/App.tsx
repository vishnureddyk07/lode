import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Gallery from './pages/Gallery';
import Articles from './pages/Articles';
import ArticleDetails from './pages/ArticleDetails';
import Leadership from './pages/Leadership';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetails />} />
            <Route path="/leadership" element={<Leadership />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;