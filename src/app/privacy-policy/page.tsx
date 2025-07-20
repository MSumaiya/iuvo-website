'use client';

import Navbar from '@/components/Navbar'; // Adjust path if needed

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

     <main className="max-w-4xl mx-auto px-4 pt-24 pb-16 text-gray-800">
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-10">Privacy Policy</h1>

        <section className="space-y-6 text-base leading-relaxed">
          <p><strong>Effective Date:</strong> 01 July 2025</p>

          <p>
            This Privacy Policy describes how iUVO Health (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, and protects your personal information when you use our website and services.
          </p>

          <p className="font-bold mt-8">Collection of Information</p>
          <p>
            We collect information you provide directly, such as when you contact us, sign up for updates, or fill out forms. We also collect information automatically via cookies and analytics tools.
          </p>

          <p className="font-bold mt-8">Changes to this Privacy Policy</p>
          <p>
            We may update this Privacy Policy occasionally. Updates will be posted on this page with a new effective date.
          </p>

          <p className="font-bold mt-8">Contact Information</p>
          <p>
            If you have any questions or concerns regarding this Privacy Policy, you can contact us at:
          </p>
          <ul className="list-disc list-inside">
            <li>Email: support@iuvohealth.com</li>
            <li>Address: iUVO Health, Example Street 123, Stockholm, Sweden</li>
          </ul>

          <p className="font-bold mt-8">Use of Information</p>
          <p>
            We use the information to provide and improve our services, respond to inquiries, communicate with users, and comply with legal obligations.
          </p>

          <p className="font-bold mt-8">Cookies</p>
          <p>
            Our website uses cookies to enhance your experience. You can control cookie preferences through your browser settings.
          </p>

          <p className="font-bold mt-8">Third-Party Services</p>
          <p>
            We may use third-party services for analytics and functionality. These providers may collect data in accordance with their own privacy policies.
          </p>

          <p className="font-bold mt-8">Data Security</p>
          <p>
            We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, or destruction.
          </p>

          <p className="font-bold mt-8">Your Rights</p>
          <p>
            You have the right to access, correct, or delete your personal data, and to object to or restrict its processing under applicable laws.
          </p>

          <p className="font-bold mt-8">GDPR Compliance</p>
          <p>
            For users in the European Union, we comply with the General Data Protection Regulation (GDPR). You may contact us to exercise your rights under GDPR.
          </p>
        </section>
      </main>
    </>
  );
}
