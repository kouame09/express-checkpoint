import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      author: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida justo ac justo condimentum, sed ullamcorper velit vestibulum.',
    },
    {
      id: 2,
      author: 'Jane Smith',
      text: 'Suspendisse potenti. Nulla facilisi. Pellentesque euismod justo ut libero fermentum, nec dignissim nulla condimentum.',
    },
    // Ajoutez d'autres témoignages au besoin
  ];

  return (
    <section className="testimonial">
      <h2>Témoignages</h2>
      <div className="testimonial-list">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-item">
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
