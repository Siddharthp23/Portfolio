import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(
        'service_2h1k5lh',     // Replace with your EmailJS Service ID
        'template_yfy09vz',    // Replace with your EmailJS Template ID
        form.current,
        '9rqbAZHG0DbWbJq9s'      // Replace with your EmailJS Public Key
      ).then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
    };

    return (
      <section id="contact" className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </section>
    );
};
export default Contact;