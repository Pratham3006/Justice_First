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
import JudgeUi from './JudgeUi';
import Stats from './Stats';
import History from './History';
import Pil from './Pil';
import AdminLogin from './AdminLogin';
import AdminUi from './AdminUi';
import AdminForm from './AdminForm';
import ContactUs from './ContactUs';
import RulesL from './RulesL';
import RuleJ from './RuleJ';
import MyActivity from './MyActivity';
import Complains from './Complains';



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
        <Route path='/judgeLogin' element={<JudgeUi />}  />
        <Route path="/faqs" element={<Faq/>} />
        <Route path="/faqs/govern" element={<Faq2 />} />
        <Route path="/ReleaseNotes" element={<ReleaseNotes/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Forgot/:id" element={<Fgp/>} />
        <Route path="/Stats" element={<Stats/>} />
        <Route path="/History" element={<History/>} />
        <Route path="/AdminLogin" element={<AdminLogin/>} />
        <Route path="/AdminDashboard" element={<AdminUi/>} />
        <Route path="/PIL" element={<Pil/>} />
        <Route path="/AdminForm" element={<AdminForm/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/LawyerRules" element={<RulesL/>} />
        <Route path="/JudgeRules" element={<RuleJ/>} />
        <Route path="/Myactivity" element={<MyActivity/>} />
        <Route path="/Grievances" element={<Complains/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
