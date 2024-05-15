
import React, {useState} from 'react';
import Home from '../src/Pages/Home';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import "./style/App.css";
// import PageNotFound from './Pages/404';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import LoginSection from './Components/LoginSection/LoginSection';




function App() {

   const[showLogin, setShowLogin] = useState(false);
  return (
    <Router>
      {showLogin ? <LoginSection setShowLogin={setShowLogin} /> : <></>}
    <div className="app">
    <Navbar setShowLogin={setShowLogin} showLogin={showLogin}/>
      <Routes>
        <Route path='/sign-in' element={<LoginSection />} />
        <Route path='/' exact element={<Home />} />
        {/* <Route path ="*" element={<PageNotFound />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
    <Footer />
    </Router>
  );
}

export default App;
