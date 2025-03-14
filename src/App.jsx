import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Envshell from './Envshell';
import Homepage from './Homepage';
import Footer from './Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className='bg-[#010101]'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/envshell" element={<Envshell />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;