import React, { useEffect } from 'react';
import '../assets/css/MainInfo.css'; // Asegúrate de tener los estilos aquí
import Menu from '../components/menu';

const MainInfo: React.FC = () => {
  useEffect(() => {
    const header = document.querySelector('.header h1');

    // Crear un observador de intersección
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Cuando el header es visible, aplicar la animación
            header?.classList.add('visible');
          } else {
            // Cuando el header ya no es visible, revertir la animación
            header?.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.2, // Se activa cuando el 20% del h1 es visible
      }
    );

    // Observa el elemento header
    if (header) {
      observer.observe(header);
    }

    // Cleanup en caso de que el componente se desmonte
    return () => {
      if (header) {
        observer.unobserve(header);
      }
    };
  }, []);

  return (

    <div className="main-container">
      <Menu />
      <header className="header">

        <h1>GAV Ingeniería</h1>
      </header>

      <section className="section about">
        <h2>Sobre Nosotros</h2>
        <p>
          GAV Ingeniería es una empresa líder en construcción e infraestructura,
          especializada en proyectos de alta calidad y tecnología de punta.
        </p>
      </section>

      <section className="section services">
        <h2>Servicios</h2>
        <ul>
          <li>Construcción de edificios</li>
          <li>Infraestructura vial</li>
          <li>Consultoría en ingeniería</li>
          <li>Proyectos industriales</li>
        </ul>
      </section>

      <section className="section projects">
        <h2>Proyectos Destacados</h2>
        <p>Hemos desarrollado múltiples proyectos de gran impacto en el sector.</p>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1H2OzyR8wM2vntv62bRtnMBp4O9_q5zrs"
            width="100%"
            height="400"
            title="Mapa de Costa Rica - Proyectos">
          </iframe>
        </div>
      </section>

      <section className="section contact">
        <h2>Contacto</h2>
        <p>Email: contacto@gavingenieria.com</p>
        <p>Teléfono: +506 1234-5678</p>
      </section>
    </div>
  );
};

export default MainInfo;
