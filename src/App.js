import React from 'react';
import {  Route, Link,  Routes } from 'react-router-dom';
import "./App.css";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CausesPage from './pages/CausesPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import DonationModal from './components/donation/DonationModal';
import NoticePage from './pages/NoticePage';

function App() {
  return (
    <>
  <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="/about" element={<AboutPage/>} />
   <Route path="/causes" element={<CausesPage />} />
   <Route path="/events" element={<EventsPage />} />
   <Route path="/contactus" element={<ContactPage />} />
    <Route path="/notice" element={<NoticePage />} />
  </Routes>
  <DonationModal/>
  </>);
}

export default App;
