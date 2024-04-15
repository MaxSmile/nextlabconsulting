// app/terms-of-service/page.js
"use client";
import { useEffect } from "react";
import ContactForm from "../_components/ContactFormSection";

export default function TermsPage() {
  let webSiteURL = "nextlabconsulting.com";
  useEffect(() => {
    webSiteURL = window.location.href;
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="container mx-auto max-w-4xl mt-40 px-4 py-8 text-gray-800">
        <h1 className="text-3xl font-semibold mb-4">Terms of Service</h1>
        <p className="mb-4">These Terms of Service govern your use of the website located at <strong>{webSiteURL}</strong> and any related services provided by NextLab Consulting.</p>
        <p className="mb-4">By accessing <strong>{webSiteURL}</strong>, you agree to abide by these Terms of Service and any amendments to the terms. If you do not agree to obey these Terms of Service, you are not permitted to use or access the website.</p>

        <h2 className="text-xl font-semibold mb-2">Use License</h2>
        <p className="mb-4">Permission is granted to temporarily download one copy of the materials on NextLab Consulting's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>Attempt to decompile or reverse engineer any software contained on NextLab Consulting's website;</li>
          <li>Remove any copyright or other proprietary notations from the materials;</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p className="mb-4">This license shall automatically terminate if you violate any of these restrictions and may be terminated by NextLab Consulting at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>

        <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>
        <p className="mb-4">The materials on NextLab Consulting's website are provided on an 'as is' basis. NextLab Consulting makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        <p className="mb-4">Further, NextLab Consulting does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>

        <h2 className="text-xl font-semibold mb-2">Limitations</h2>
        <p className="mb-4">In no event shall NextLab Consulting or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NextLab Consulting's website, even if NextLab Consulting or a NextLab Consulting authorized representative has been notified orally or in writing of the possibility of such damage.</p>

        <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
        <p className="mb-4">These terms and conditions are governed by and construed in accordance with the laws of [Your State/Province] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>If you have any questions about these Terms of Service, please contact us using the form below.</p>

      </section>

      <ContactForm />
    </main>
  );
}
