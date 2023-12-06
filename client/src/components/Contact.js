import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique pour envoyer les données du formulaire
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Réinitialiser le formulaire après soumission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact">
      <h2>Nous contacter</h2>
      <div className="contact-info">
        <p>Adresse : 123 Rue de la Contact, Ville, Pays</p>
        <p>Téléphone : +XX XXX XXX XXX</p>
        <p>Email : contact@example.com</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
