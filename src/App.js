import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Lawyer from './Lawyer';
import Judge from './Judge';
import Admin from './Admin';
import LawyerUi from './LawyerUi';
import ReleaseNotes from './ReleaseNotes';
import './ReleaseNotes.css'
import AboutUs from './AboutUs';
import Faq from './Faq';
import Faq2 from './Faq2';
import Fgp from './Fgp';


function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lawyer" element={<Lawyer />}  />
        <Route path="/Admin" element={<Admin />} />
        <Route path='/judge' element={<Judge />} />
        <Route path='/lawyerLogin' element={<LawyerUi />}  />
        <Route path='/judgeLogin' element={<LawyerUi />}  />
        <Route path="/faqs" element={<Faq/>} />
        <Route path="/faqs/govern" element={<Faq2 />} />
        <Route path="/ReleaseNotes" element={<ReleaseNotes/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Forgot" element={<Fgp/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
