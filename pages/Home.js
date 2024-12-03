import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <section className="home">
      <div>
        <h1>Soy Omar Bran.</h1>
        <p>Soy un <strong>DBA Developer</strong> especializado en Oracle PL/SQL, SQL Server, MySQL, MongoDB.</p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;