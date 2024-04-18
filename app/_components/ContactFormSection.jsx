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
    <section id="contact" className="pt-6 flex flex-col px-12 pb-10 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex justify-center items-center self-center px-6 
      py-16 mt-32 bg-secondary rounded-lg 
       md:w-full max-md:px-5 max-md:mt-10">
        <div className="w-full max-w-7xl">

          <div className="flex gap-6 max-md:flex-col">


            <div className="flex flex-col w-full mx-4">
              <div className="flex flex-col max-md:mt-10 ">
                <div className="text-6xl tracking-tighter text-white uppercase 
                leading-[60px] max-md:text-4xl">
                  Get in touch
                </div>
                <div className="mt-6 text-xl leading-7 text-white">
                  <p>Share your project insights!</p>
                  <p className='mt-4'>Click here to fill out a quick form
                  and help us better understand your needs, ensuring we provide
                  the best possible service.</p>
                  <p className="mt-8">
                  Email us for any question at <a href='mailto:info@nextlabconsulting.com' 
                    className="text-blue-200 underline hover:opacity-80" target='_blank'>info@nextlabconsulting.com</a>
                    </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
            {submitted ? (
              <ContactThankYou />
            ) : (
              <ContactForm onSubmit={handleSubmit} />
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
