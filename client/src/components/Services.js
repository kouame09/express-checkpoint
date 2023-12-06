import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Service 1',
      description: 'Description du service 1.',
      image: 'url_de_l_image_1.jpg', // Remplacez ceci par l'URL de votre image
    },
    {
      id: 2,
      title: 'Service 2',
      description: 'Description du service 2.',
      image: 'url_de_l_image_2.jpg', // Remplacez ceci par l'URL de votre image
    },
    {
      id: 3,
      title: 'Service 3',
      description: 'Description du service 3.',
      image: 'url_de_l_image_3.jpg', // Remplacez ceci par l'URL de votre image
    },
  ];

  return (
    <section className="services">
      <h2>Nos Services</h2>
      <div className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
