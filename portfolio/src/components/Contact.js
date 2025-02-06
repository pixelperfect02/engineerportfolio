// src/index.js or src/App.js

import './custom.css';
// src/components/Contact.js

import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent!");
    // You can implement email sending logic or form handling here
  }

  return (
    <section id="contact">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Contact Me</h2>

          <div className="relative mb-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
