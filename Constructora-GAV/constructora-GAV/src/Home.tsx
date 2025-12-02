
import React, { useState } from "react";
import "./Home.css";
import MapaGAVS from "./MapsProyects";
import Carousel from "./Carrusel";
import ContactModal from "./ContactModal";
export default function GavsHome() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const imagenesGAVS = [
    {
      src: "src/img/1.jpg",
      alt: "Proyecto Parque la promesa",
      caption: "Brasil de Santa Ana — Mantenimiento y Mejoras",

    },
    {
      src: "src/img/Aguapluviales.jpg",
      alt: "Proyecto Aguas Pluviales",
      caption: "Aguas Pluviales Ciudad Colon",
    },
    {
      src: "src/img/Promesa2.jpg",
      alt: "Proyecto Parque la promesa",
      caption: "Brasil de Santa Ana — Mantenimiento y Mejoras",
    }
  ];
  return (
    <div>
      {/* NAVBAR */}
      {/* <nav className="navbar">
        <div className="navbar-logo">GAVS</div>
        <ul className="navbar-links">
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav> */}
      <nav className="navbar">
        {/* <div className="navbar-logo" >GAV'S</div> */}
        <img src="src/img/LOGO GAVS." alt="GAV'S" />

        <div className="navbar-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <ul className={`navbar-links ${open ? "open" : ""}`}>
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Constructora GAV'S</h1>
        <p>Construimos más que proyectos: construimos progreso para Costa Rica.</p>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="about" className="section">
        <h2 className="section-title">Sobre Nosotros</h2>
        <p className="p-profesional"> Con más de seis años de experiencia en el sector, Constructora GAV'S se ha posicionado como una empresa referente en el desarrollo de soluciones integrales de ingeniería y construcción. Nuestro portafolio abarca proyectos de infraestructura como puentes, anfiteatros, sistemas de aguas pluviales, mejoras en parques comunitarios, así como remodelaciones residenciales y comerciales.
          Cada proyecto es ejecutado bajo estrictos estándares de calidad, innovación y eficiencia, respaldado por un equipo de profesionales altamente capacitados y comprometidos con ofrecer resultados excepcionales que impulsen el progreso y la satisfacción de nuestros clientes. </p>
      </section>

      {/* SERVICIOS */}
      <section id="services" className="section section-gray">
        <h2 className="section-title center">Nuestros Servicios</h2>
        <div className="grid grid-3">
          <div className="card">
            <h3>Construcción de Proyectos</h3>
            <p>Obras civiles, residenciales, comerciales e industriales.</p>
          </div>
          <div className="card">
            <h3>Supervisión y Control</h3>
            <p>Supervisión en todas las etapas del proyecto.</p>
          </div>
          <div className="card">
            <h3>Gestión de Proyectos</h3>
            <p>Administración efectiva de recursos y planificación.</p>
          </div>
        </div>
      </section>

      <section id="carusel" className="flex justify-center items-center w-full py-6">
        <Carousel
          images={imagenesGAVS}
          autoPlay
          interval={6500}

        />

      </section>



      {/* PROYECTOS */}
      <section id="projects" className="section">
        <h2 className="section-title center">Proyectos Destacados</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Residencial Paraíso</h3>
            <p>Proyecto habitacional moderno y sostenible.</p>
          </div>
          <div className="card">
            <h3>Centro Corporativo Escazú</h3>
            <p>Infraestructura diseñada para productividad y eficiencia.</p>
          </div>
        </div>
      </section>

      {/* MAPA */}
      {/* <section id="map-section" className="section section-gray">
        <h2 className="section-title center">Ubicación de Proyectos</h2>
        <div id="mapa-gavs"></div>n
      </section> */}
      <section id="map-section" className="section section-gray">
        <h2 className="section-title center">Ubicación de Proyectos</h2>
        <MapaGAVS />
      </section>

      {/* CONTACTO */}
      <section id="contact" className="contact">
        <h2>Contáctenos</h2>
        <p>¿Tiene un proyecto en mente? Estamos listos para ayudarle.</p>
        <button 
          onClick={() => setOpenModal(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >Enviar Mensaje</button>
      </section>
      <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
      

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Constructora GAVS • Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
