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

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Contact />
      <Footer />
    </div>

    
  );
}

