// app/privacy-policy/page.js
"use client";
import { useEffect } from "react";
import ContactForm from "../_components/ContactFormSection";

export default function PrivacyPage() {
 let webSiteULR = "nextlabconsulting.com";
 useEffect(() => {
    webSiteULR = window.location.href;
 },[]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <section className="container mx-auto max-w-4xl mt-40 px-4 py-8 text-gray-800">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
        <p className="mb-4">This Privacy Policy describes how NextLab Consulting ("we", "us", or "our") collects, uses, and shares your personal information when you use our website at <strong>{webSiteULR}</strong> (the "Site").</p>

        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4">We use Google Analytics to collect and analyze information about how visitors interact with our website. Google Analytics collects various types of data, including:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>IP addresses</li>
          <li>Browser types</li>
          <li>Pages visited</li>
          <li>Time spent on each page</li>
          <li>Referring websites</li>
          <li>Device type</li>
          <li>Operating system</li>
        </ul>
        <p className="mb-4">Google Analytics does not collect any personally identifiable information (PII). We use this information to understand how visitors engage with our website and to improve our services and user experience.</p>
        <p className="mb-4">For more information on how Google Analytics handles user data, please refer to Google's Privacy Policy: <a href="https://policies.google.com/privacy" className="text-blue-500 underline" target="_blank">Google Privacy Policy</a>.</p>

        <p className="mb-4">If you choose to contact us through the contact form on our website, we may collect the following personal information:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Institution</li>
          <li>Message content</li>
        </ul>
        <p className="mb-4">We use this information solely for the purpose of responding to your inquiries and providing assistance. We do not use the information submitted through the contact form for marketing purposes unless explicitly consented by the user.</p>

        <h2 className="text-xl font-semibold mb-2">Sharing of Information</h2>
        <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, as long as those parties agree to keep this information confidential.</p>

        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p className="mb-4">We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>

        <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
        <p className="mb-4">You have the right to request access to, correction of, deletion of, or restrictions on your personal data collected by us. You also have the right to withdraw your consent for processing your personal data at any time. To exercise these rights, please contact us using the information provided below.</p>

        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or our practices regarding your personal information, please contact us using the form below.</p>
        
      </section>
      
      <ContactForm />
    </main>
  );
}
