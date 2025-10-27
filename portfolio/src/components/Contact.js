import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xeoezggw");

  return (

    
    <section id="contact">
     
    <div>
       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#706F6F] mb-6 text-center">
      Contact Me
      </h2>
      <form onSubmit={handleSubmit}>
        {state.succeeded && <p>Message Sent!</p>}
         
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        
        <label htmlFor="message">
         Message
        </label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
    </section>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
