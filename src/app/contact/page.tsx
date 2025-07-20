'use client';

import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-[#001f3f] text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-6">Let’s Talk. We’d Love to Hear From You.</p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="mt-1" />
                <span>+46 70 775 81 81</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1" />
                <div>
                  <p><strong>General Inquiries:</strong> hello@iuvo.health</p>
                  <p><strong>Investor Relations:</strong> investor@iuvo.health</p>
                  <p><strong>Media & Partnerships:</strong> pr@iuvo.health</p>
                  <p><strong>Legal & Compliance:</strong> legal@iuvo.health</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1" />
                <p>
                  Headquartered in Stockholm, Sweden.<br />
                  Serving global markets with a focus on the Nordics, GCC, and Asia.
                </p>
              </div>
            </div>

            {mounted && (
              <button className="mt-8 bg-white text-[#001f3f] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
                Schedule a Call
              </button>
            )}
          </div>

          {/* Contact Form */}
          <div>
            <p className="mb-6 text-gray-700">
              Whether you&apos;re a future user, investor, health partner, or government agency – reach out and let&apos;s start the conversation.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="border rounded px-4 py-2 w-full"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="border rounded px-4 py-2 w-full"
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border rounded px-4 py-2 w-full"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="border rounded px-4 py-2 w-full"
                  onChange={handleChange}
                />
              </div>
              <select
                name="subject"
                className="border rounded px-4 py-2 w-full"
                onChange={handleChange}
              >
                <option value="">Select Subject</option>
                <option value="general">General Enquiry</option>
                <option value="investor">Investor Relations</option>
                <option value="media">Media & Partnerships</option>
                <option value="legal">Legal & Compliance</option>
              </select>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows={4}
                className="border rounded px-4 py-2 w-full"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-[#001f3f] text-white px-6 py-3 rounded-md hover:bg-[#003366] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}



























