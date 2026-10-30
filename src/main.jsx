import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './styles.css';
import { Layout } from './site.jsx';
import { Home, About, Contact } from './pages.jsx';

function AnimatedRoutes() {
  const location = useLocation();
  return <AnimatePresence mode="wait"><Routes location={location} key={location.pathname}>
    <Route element={<Layout />}><Route index element={<Home />} /><Route path="about" element={<About />} /><Route path="contact" element={<Contact />} /></Route>
    <Route path="*" element={<Home />} />
  </Routes></AnimatePresence>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><AnimatedRoutes /></BrowserRouter></React.StrictMode>);
