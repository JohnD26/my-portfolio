import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { NavBar }   from './components/Navbar';
import { Banner }   from './components/Banner';
import { Projects } from './components/Projects';
import { Contact }  from './components/Contact';
import { Footer }   from './components/Footer';

import { Design1 }  from './pages/Design1';
import { Design2 }  from './pages/Design2';
import { Design3 }  from './pages/Design3';
import { Design4 }  from './pages/Design4';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        {/* Home route: banner + projects + contact */}
        <Route path="/" element={
          <>
            <Banner />
            <Projects />
            <Contact />
          </>
        }/>

        {/* Stub pages for  4 designs */}
        <Route path="/design1" element={<Design1 />} />
        <Route path="/design2" element={<Design2 />} />
        <Route path="/design3" element={<Design3 />} />
        <Route path="/design4" element={<Design4 />} />

        {/* Catch-all 404 */}
        <Route path="*" element={
          <div style={{ padding:'2rem', textAlign:'center' }}>
            <h2>Page non trouvée</h2>
          </div>
        }/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
