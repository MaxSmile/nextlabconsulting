// app/_components/ContactFormSection.jsx
"use client";
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactThankYou from './ContactThankYou';

function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Perform any form submission logic here (e.g., sending data to backend)
    // For demonstration purposes, we'll just set the submitted state to true
    setSubmitted(true);
  };

  return (
    <section id="contact" className="pt-6">
      <div className="flex justify-center items-center self-center px-6 py-16 mt-32 max-w-full bg-blue-700 rounded-2xl border border-solid border-blue-950 w-[1345px] max-md:px-5 max-md:mt-10">
        <div className="w-full max-w-[1099px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl tracking-tighter text-white uppercase leading-[60px] max-md:max-w-full max-md:text-4xl">
                  Get in touch
                </div>
                <div className="mt-6 text-xl leading-7 text-white max-md:max-w-full">
                  Share your project insights! Click here to fill out a quick form
                  and help us better understand your needs, ensuring we provide
                  the best possible service
                </div>
              </div>
            </div>
            {submitted ? (
              <ContactThankYou />
            ) : (
              <ContactForm onSubmit={handleSubmit} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
