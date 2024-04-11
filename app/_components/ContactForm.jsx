import React from 'react';
import ContactFormField from './ContactFormField';

function ContactForm({ onSubmit }) {
  return (
    <div className="flex flex-col ml-6">
      <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
        <form onSubmit={onSubmit}>
          <ContactFormField label="Your name *" placeholder="Enter your name" />
          <ContactFormField label="Mobile Number *" placeholder="Enter your mobile number" />
          <ContactFormField label="E-mail *" placeholder="Enter your email address" />
          <ContactFormField label="Institution *" placeholder="Enter your institution name" />
          <ContactFormField label="Tell us more about your brand" placeholder="Enter additional information" />
          <div className="flex gap-5 justify-between mt-5 max-md:flex-wrap max-md:max-w-full">
            <button onClick={onSubmit}
            className="px-8 py-3 text-lg font-medium 
            whitespace-nowrap bg-white rounded-md text-blue-950 max-md:px-5">
              Submit
            </button>
            <div className="my-auto text-sm leading-5 text-white">
              By clicking the &quot;Submit&quot; button, you agree to the&nbsp;
              <a href="/terms-of-service" className="text-blue-200 underline">Terms&nbsp;of&nbsp;Service</a>
              &nbsp;and&nbsp;
              <a href="/privacy-policy" className="text-blue-200 underline">Privacy&nbsp;Policy</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
