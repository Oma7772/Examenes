import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
  const proyectos = [
    {
      nombre: 'Implementacion eRP',
      descripcion: 'Aplicación de POS Tienda',
      link: 'https://github.com/usuario/ecommerce',
    },
    {
      nombre: 'Factura Electronica',
      descripcion: 'soporte y implementacion en factura electronica',
      link: 'https://github.com/usuario/blog-personal',
    },
    {
      nombre: 'Gestor de Tareas',
      descripcion: 'Aplicación para gestionar en APEX Oracle.',
      link: 'https://github.com/usuario/todo-app',
    },
  ];

  return (
    <section className="projects">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="project-card">
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
