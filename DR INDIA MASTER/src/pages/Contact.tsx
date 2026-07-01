import React, { useState } from "react";
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Header */}
      <section className="relative py-24 bg-[#1A3E5F] text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=industrial%20office%20customer%20service&width=1440&height=500')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with our engineering team to discuss your project requirements, request a quote, or schedule audits.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-xl relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span>Thank you for your message! Our team will contact you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A3E5F] text-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A3E5F] text-gray-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 99258 53335"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A3E5F] text-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Request Quote"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A3E5F] text-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Describe your project..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A3E5F] text-gray-800"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#1A3E5F] hover:bg-[#1A3E5F]/90 text-white rounded-xl px-8 py-4 font-semibold transition-all w-full flex items-center justify-center group"
                >
                  Submit Inquiry
                  <Send className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-black text-gray-900 mb-8">Get In Touch</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#1A3E5F]/10 rounded-xl flex items-center justify-center text-[#1A3E5F] mr-6 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:+919925853335" className="text-gray-600 hover:text-[#1A3E5F] transition-colors">
                        +91 99258 53335
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#1A3E5F]/10 rounded-xl flex items-center justify-center text-[#1A3E5F] mr-6 flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:dev@devrang.co.in" className="text-gray-600 hover:text-[#1A3E5F] transition-colors">
                        dev@devrang.co.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#1A3E5F]/10 rounded-xl flex items-center justify-center text-[#1A3E5F] mr-6 flex-shrink-0">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Website</h4>
                      <a href="http://www.devrang.co.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1A3E5F] transition-colors">
                        www.devrang.co.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#1A3E5F]/10 rounded-xl flex items-center justify-center text-[#1A3E5F] mr-6 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Head Office</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Plot No. 127, Phase II, GIDC Vatva,<br />
                        Ahmedabad, Gujarat 382445, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed placeholder */}
              <div className="mt-12 bg-gray-50 border border-gray-100 rounded-2xl h-48 flex items-center justify-center overflow-hidden relative shadow-inner">
                <div className="absolute inset-0 bg-[#E8F5FF] opacity-30 bg-[radial-gradient(#1A3E5F_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <span className="text-sm text-gray-500 font-bold relative z-10 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-[#C1440E]" />
                  Ahmedabad GIDC, Vatva
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
