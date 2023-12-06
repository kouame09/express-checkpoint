import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>À propos de nous</h2>
          <p>Quelques mots sur votre entreprise et ses valeurs.</p>
        </div>
        <div className="footer-section">
          <h2>Nos Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            {/* Ajoutez d'autres services si nécessaire */}
          </ul>
        </div>
        <div className="footer-section">
          <h2>Nous Contacter</h2>
          <p>Adresse, numéro de téléphone, email, etc.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
