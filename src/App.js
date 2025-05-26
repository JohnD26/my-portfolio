import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Design1 } from "./pages/Design1";
import { Design2 } from "./pages/Design2";
import { Design3 } from "./pages/Design3";
import { Design4 } from "./pages/Design4";

// function App() {
//   return (
    
//     <div className="App">
//       <NavBar />
//       <Banner />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>

    
//   );
// }

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        {/* Home route: shows banner, projects, contact */}
        <Route path="/" element={
          <>
            <Banner />
            <Projects />
            <Contact />
          </>
        }/>

        {/* Individual design pages */}
        <Route path="/design1" element={<Design1 />} />
        <Route path="/design2" element={<Design2 />} />
        <Route path="/design3" element={<Design3 />} />
        <Route path="/design4" element={<Design4 />} />

        {/* catch-all 404 for page not found */}
        <Route path="*" element={<h2 style={{ padding: '2rem', textAlign: 'center' }}>Page En developpement</h2>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;