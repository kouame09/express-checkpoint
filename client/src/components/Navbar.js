import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png'; // Remplacez ceci par le chemin réel de votre logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo de l'entreprise" className="logo" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/services">Nos services</Link>
        </li>
        <li>
          <Link to="/contact">Nous contacter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
