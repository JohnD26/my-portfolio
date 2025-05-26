// import { useEffect, useState } from 'react';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../assets/images/logo.svg'
// import Icon1 from '../assets/images/Icon1.svg'
// import Icon2 from '../assets/images/Icon2.svg'
// import Icon3 from '../assets/images/Icon3.svg'




// import {
//   BrowserRouter as Router
// } from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';


// export const NavBar = () => {

//   const [activeLink, setActiveLink] = useState('home');
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     }

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, [])

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   }

//   return (
//     <Router>
//       <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
//         <Container>
//           <Navbar.Brand href="/">
//             <img src={logo} alt="Logo" />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav">
//             <span className="navbar-toggler-icon"></span>
//           </Navbar.Toggle>
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
//               <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
//             </Nav>
//             <span className="navbar-text">
//               <div className="social-icon">
//                 <a href="#"><img src={Icon1} alt="" /></a>
//                 <a href="#"><img src={Icon2} alt="" /></a>
//                 <a href="#"><img src={Icon3} alt="" /></a>
//               </div>
//               <HashLink to='#connect'>
//                 <button className="vvd"><span>Faisons une connection!</span></button>
//               </HashLink>
//             </span>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </Router>
//   )
// }



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';              
import { HashLink } from 'react-router-hash-link';    
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.svg';
import Icon1 from '../assets/images/Icon1.svg';
import Icon2 from '../assets/images/Icon2.svg';
import Icon3 from '../assets/images/Icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={HashLink}
              smooth
              to="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth
              to="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://twitter.com/yourprofile"><img src={Icon1} alt="Twitter" /></a>
              <a href="https://linkedin.com/in/yourprofile"><img src={Icon2} alt="LinkedIn" /></a>
              <a href="https://github.com/yourprofile"><img src={Icon3} alt="GitHub" /></a>
            </div>
            <HashLink to="#connect">
              <button className="vvd">
                <span>Faisons une connection!</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
