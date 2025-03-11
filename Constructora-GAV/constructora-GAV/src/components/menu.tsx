import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/Menu.css'; 

const Menu: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Cambiar el estado de móvil (toggle)
  const handleMobileMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={`navbar ${isMobile ? 'active' : ''}`}>
      <div className="logo">
        <h2>GAV Ingeniería</h2>
      </div>
      <ul className={`menu-list ${isMobile ? 'active' : ''}`}>
        <li><NavLink to="/nosotros">Nosotros</NavLink></li>
        <li><NavLink to="/noticias">Noticias</NavLink></li>
        <li><NavLink to="/experiencia">Experiencia</NavLink></li>
        <li><NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>
      <div className="menu-icon" onClick={handleMobileMenuToggle}>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </div>
    </nav>
  );
};

export default Menu;

// import React, { useState } from 'react';
// import '../assets/css/Menu.css'; 

// const Menu: React.FC = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   // Cambiar el estado de móvil (toggle)
//   const handleMobileMenuToggle = () => {
//     setIsMobile(!isMobile);
//   };

//   return (
//     <nav className={`navbar ${isMobile ? 'active' : ''}`}>
//       <div className="logo">
//         <h2>GAV Ingeniería</h2>
//       </div>
//       <ul className={`menu-list ${isMobile ? 'active' : ''}`}>
//         <li><a href="#nosotros">Nosotros</a></li>
//         <li><a href="#noticias">Noticias</a></li>
//         <li><a href="#experiencia">Experiencia</a></li>
//         <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
//         <li><a href="#sostenibilidad">Sostenibilidad y Cumplimiento</a></li>
//         <li><a href="#contacto">Contacto</a></li>
//       </ul>
//       <div className="menu-icon" onClick={handleMobileMenuToggle}>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//         <span className="icon-bar"></span>
//       </div>
//     </nav>
//   );
// };

// export default Menu;
