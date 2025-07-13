'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Navbar variant="light" />

      <main className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
        <h1 className="text-4xl font-bold mb-10">Privacy Policy</h1>

        <p className="mb-6">
          Effective Date: 1 July 2025
        </p>

        <p className="mb-6">
          This Privacy Policy explains how iUvo Health collects, uses, and protects your personal information. By using our services,
          you agree to the terms outlined in this policy.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Information We Collect</h2>
        <p className="mb-6">
          We may collect information including your name, email address, device data, health-related data, and usage patterns when
          you interact with our website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">How We Use Information</h2>
        <p className="mb-6">
          Information is used to personalize user experiences, improve our products and services, communicate updates, and ensure
          compliance with legal obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Data Sharing and Disclosure</h2>
        <p className="mb-6">
          We do not sell your personal data. We may share information with trusted third parties under confidentiality agreements
          for service improvement or legal compliance.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Data Retention</h2>
        <p className="mb-6">
          Your data is retained only for as long as necessary to fulfill the purposes outlined in this policy or to comply with
          applicable laws.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Your Rights</h2>
        <p className="mb-6">
          You have the right to access, correct, or delete your personal data. You may also object to processing or request
          restrictions under certain circumstances.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Security</h2>
        <p className="mb-6">
          We implement strong technical and organizational safeguards to protect your data against loss, misuse, or unauthorized
          access.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy periodically. When we do, we will revise the “Effective Date” at the top of the policy.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have any questions or concerns about this policy or your data, please contact us at:{' '}
          <a href="mailto:privacy@iuvohealth.com" className="text-blue-600 underline">
            privacy@iuvohealth.com
          </a>
        </p>
      </main>

      <Footer />
    </div>
  );
}
