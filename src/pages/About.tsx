import { Shield, CheckCircle, Users, Award, Briefcase } from "lucide-react";
import teamImg from "@/assets/team.png";

export default function About() {
  return (
    <div className="w-full bg-white">
      {/* Hero Header */}
      <section className="relative py-24 bg-[#1A3E5F] text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=industrial%20painting%20site%20metal%20coating&width=1440&height=500')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Our Expert Team</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A dedicated workforce of 600+ trained professionals protecting industrial infrastructure across India since 1993.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-bold text-[#C1440E] uppercase tracking-wider mb-2">Our Foundation</h2>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Pioneering Industrial Protective Coatings</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                For over three decades, NextGen Painteam (The DR India) has been at the forefront of corrosion protection and surface engineering. We provide comprehensive anti-corrosive painting, blasting, lining, and coating services tailored to the heavy engineering, refinery, chemical, and manufacturing sectors.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Equipped with NACE Certified Coating Inspectors, SSPC quality controls, and certified ISO procedures, we ensure that every square meter of steel or concrete is treated to withstand the harshest operations and environments.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="text-[#C1440E] w-5 h-5" />
                  <span className="font-semibold text-sm">NACE & SSPC Certified Inspectors</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="text-[#C1440E] w-5 h-5" />
                  <span className="font-semibold text-sm">ISO 9001, 14001, 45001 Compliant</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="text-[#C1440E] w-5 h-5" />
                  <span className="font-semibold text-sm">600+ Safety-Trained Staff</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle className="text-[#C1440E] w-5 h-5" />
                  <span className="font-semibold text-sm">3000 MT/month Blasting capacity</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1A3E5F] to-[#C1440E] rounded-2xl opacity-10 blur-lg"></div>
              <img
                src={teamImg}
                alt="NextGen Painteam Group Photo"
                className="relative rounded-2xl shadow-2xl border-4 border-white w-full object-cover h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#C1440E] uppercase tracking-wider mb-2">Our Pillars</h2>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Values That Drive Us</h3>
            <p className="text-gray-600">
              We operate under strict standards of ethics, environment compliance, and employee safety to deliver state-of-the-art work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-100">
              <div className="w-12 h-12 bg-[#1A3E5F]/10 rounded-full flex items-center justify-center text-[#1A3E5F] mx-auto mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Quality & Certifications</h4>
              <p className="text-gray-600 text-sm">
                Every project is verified by NACE coating inspectors. We use ISO 9001 standard procedures to verify surface profile, paint thickness, and environmental condition logs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-100">
              <div className="w-12 h-12 bg-[#1A3E5F]/10 rounded-full flex items-center justify-center text-[#1A3E5F] mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Safety & Welfare</h4>
              <p className="text-gray-600 text-sm">
                With a safety-first mindset compliant with ISO 45001 standards, our workers undergo continuous OHS training, daily health briefs, and use certified heights safety systems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-100">
              <div className="w-12 h-12 bg-[#1A3E5F]/10 rounded-full flex items-center justify-center text-[#1A3E5F] mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">30+ Years Legacy</h4>
              <p className="text-gray-600 text-sm">
                Founded in 1993, we are one of India's most trusted industrial coating partners, working directly with refineries, heavy fabricators, and multinational chemical producers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
