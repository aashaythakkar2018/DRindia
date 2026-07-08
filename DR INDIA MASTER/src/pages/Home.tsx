import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Shield, BookOpen, Heart, Activity, AlertCircle, FileText, HelpCircle, ArrowRight, CheckCircle2, Medal } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import teamImg from "@/assets/team.png";

const timelineData = [
  {
    id: 1,
    title: "Business Ethics",
    date: "Established 1993",
    content: "Maintaining highest standards of business ethics and integrity in all our dealings.",
    category: "ETHICS",
    icon: Shield,
    relatedIds: [2, 7],
    status: "completed" as const,
    energy: 95
  },
  {
    id: 2,
    title: "Grievance Policy",
    date: "Updated 2024",
    content: "Protected and fair mechanisms for dispute resolution and feedback submission.",
    category: "SUPPORT",
    icon: HelpCircle,
    relatedIds: [1, 7],
    status: "completed" as const,
    energy: 85
  },
  {
    id: 3,
    title: "Environmental Policy",
    date: "ISO 14001",
    content: "Committed to sustainable and eco-friendly industrial operations and emission control.",
    category: "SUSTAINABILITY",
    icon: LeafIcon,
    relatedIds: [6],
    status: "completed" as const,
    energy: 90
  },
  {
    id: 4,
    title: "Labour & HR Standards",
    date: "ISO 45001",
    content: "Ensuring fair labour standards, welfare, and positive work environmental practices.",
    category: "WELFARE",
    icon: Heart,
    relatedIds: [5, 6],
    status: "completed" as const,
    energy: 95
  },
  {
    id: 5,
    title: "POSH Policy",
    date: "Zero Tolerance",
    content: "Prevention of sexual harassment and safety at the workplace for all employees.",
    category: "POSH",
    icon: AlertCircle,
    relatedIds: [4, 6],
    status: "completed" as const,
    energy: 100
  },
  {
    id: 6,
    title: "Occupational Health",
    date: "OHSAS",
    content: "Ensuring complete workplace safety and health protection for our operators.",
    category: "HEALTH",
    icon: Activity,
    relatedIds: [3, 4, 5],
    status: "completed" as const,
    energy: 95
  },
  {
    id: 7,
    title: "Whistleblower Policy",
    date: "Secure Portals",
    content: "Protected channels for reporting compliance concerns and reporting violations anonymously.",
    category: "REPORTING",
    icon: FileText,
    relatedIds: [1, 2],
    status: "completed" as const,
    energy: 90
  }
];

function LeafIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2Z" />
      <path d="M9 22v-4h-4" />
    </svg>
  );
}

export default function Home() {
  const [stats, setStats] = useState({
    blasting: 0,
    maintenance: 0,
    manpower: 0,
    experience: 0,
    clients: 0
  });

  useEffect(() => {
    // Standard count animation on load
    const interval = setTimeout(() => {
      setStats({
        blasting: 3000,
        maintenance: 1,
        manpower: 600,
        experience: 30,
        clients: 25
      });
    }, 200);
    return () => clearTimeout(interval);
  }, []);

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center pt-20 bg-[#1A3E5F] overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=bright%20and%20modern%20industrial%20facility%20during%20daytime%20with%20clean%20metal%20structures%20and%20professional%20equipment.%20High-key%20lighting%20with%20soft%20shadows.%20Contemporary%20industrial%20architecture%20featuring%20sleek%20lines%20and%20pristine%20surfaces.%20Light%20airy%20atmosphere%20with%20blue%20sky&width=1920&height=1080&seq=hero_new3&orientation=landscape')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3E5F]/80 to-[#1A3E5F]/95"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <ScrollReveal y={30} duration={0.7} className="max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 tracking-wide">
              Next<span className="text-[#C1440E]">G</span>en Painteam
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-[#C1440E] uppercase tracking-widest mb-8">
              INDUSTRIAL COATING SINCE 1993
            </h2>
            <Link
              to="/services"
              className="bg-[#C1440E] hover:bg-[#C1440E]/90 text-white rounded-button px-8 py-4 font-medium transition-all hover:-translate-y-1 shadow-lg shadow-[#C1440E]/20 flex items-center group animate-pulse-slow"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            <ScrollReveal delay={0.0} y={20} className="w-full">
              <div className="bg-white p-8 rounded shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 h-full border border-gray-100">
                <div className="w-16 h-16 bg-[#1A3E5F]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1A3E5F]">
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-[#1A3E5F] mb-2">{stats.blasting}</h3>
                <p className="text-gray-600 font-medium">MT / Month</p>
                <span className="text-xs text-gray-400">Blasting & Painting</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.08} y={20} className="w-full">
              <div className="bg-white p-8 rounded shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 h-full border border-gray-100">
                <div className="w-16 h-16 bg-[#1A3E5F]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1A3E5F]">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-[#1A3E5F] mb-2">{stats.maintenance} Lakh+</h3>
                <p className="text-gray-600 font-medium">Sq. Meter / Month</p>
                <span className="text-xs text-gray-400">Maintenance Painting</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.16} y={20} className="w-full">
              <div className="bg-white p-8 rounded shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 h-full border border-gray-100">
                <div className="w-16 h-16 bg-[#1A3E5F]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1A3E5F]">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-[#1A3E5F] mb-2">{stats.manpower}+</h3>
                <p className="text-gray-600 font-medium">Manpower</p>
                <span className="text-xs text-gray-400">Trained Operators</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.24} y={20} className="w-full">
              <div className="bg-white p-8 rounded shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 h-full border border-gray-100">
                <div className="w-16 h-16 bg-[#1A3E5F]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1A3E5F]">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-[#1A3E5F] mb-2">{stats.experience} Years+</h3>
                <p className="text-gray-600 font-medium">Experience</p>
                <span className="text-xs text-gray-400">Industry Leadership</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.32} y={20} className="w-full">
              <div className="bg-white p-8 rounded shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 h-full border border-gray-100">
                <div className="w-16 h-16 bg-[#1A3E5F]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1A3E5F]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-[#1A3E5F] mb-2">{stats.clients}+</h3>
                <p className="text-gray-600 font-medium">Present Clients</p>
                <span className="text-xs text-gray-400">Leading Brands</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 max-w-4xl mx-auto items-center">
            <ScrollReveal y={30} duration={0.6} className="w-full">
              <div className="relative mb-8 text-center">
                <h2 className="text-sm font-semibold text-[#C1440E] uppercase tracking-wider mb-2 relative">About Us</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative">Three Decades of Industrial Excellence</h3>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 relative border border-gray-100">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-12 h-12 bg-[#1A3E5F] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <p className="text-gray-700">
                    Since 1994, The dR India has been at the forefront of industrial coatings and asset management, transforming how industries protect their critical infrastructure. With a team of over 600+ members, including NACE and SSPC certified experts, we deliver precision and excellence in every project.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-[#1A3E5F]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <CheckCircle2 className="w-6 h-6 text-[#1A3E5F]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">ISO Certified</h4>
                      <p className="text-gray-600">Compliant with 9001, 14001, and 45001 international standards for quality, environmental, and safety management.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-[#1A3E5F]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <Medal className="w-6 h-6 text-[#1A3E5F]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">NACE Certified</h4>
                      <p className="text-gray-600">Our team holds international certifications in corrosion control and protective coatings from NACE International.</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-[#1A3E5F]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      <Heart className="w-6 h-6 text-[#1A3E5F]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ethical Business</h4>
                      <p className="text-gray-600">Committed to transparent operations, sustainable practices, and maintaining the highest standards of business ethics.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal y={30} scale={0.98} duration={0.6} delay={0.1} className="relative w-full">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#C1440E]/10 rounded-lg"></div>
              <div className="relative">
                <img src={teamImg}
                  alt="The dR India Team"
                  className="rounded-xl shadow-xl w-full h-auto object-contain border-4 border-white" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#1A3E5F]/10 rounded-lg -z-10"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Code of Conduct Section */}
      <section className="py-20 bg-gray-50 text-gray-800 relative overflow-hidden flex flex-col items-center border-t border-b border-gray-100">
        <div className="container mx-auto px-4 relative z-10 w-full">
          <ScrollReveal y={20} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold text-[#C1440E] uppercase tracking-wider mb-2">Our Commitment</h2>
            <h3 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">Code of Conduct</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We have established comprehensive policies to ensure sustainability, ethical business practices, and a safe working environment for all.
            </p>
          </ScrollReveal>
          <ScrollReveal y={30} delay={0.15} className="w-full flex justify-center">
            <RadialOrbitalTimeline timelineData={timelineData} />
          </ScrollReveal>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal y={20}>
            <h2 className="text-sm font-bold text-[#C1440E] uppercase tracking-wider mb-2">Our Network</h2>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Associated Paint Manufacturers</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              We are proud to work with leading international and national paint manufacturers to deliver high-quality, long-lasting protective coatings.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center">
            {["ATUL LTD", "AKZONOBEL INTERNATIONAL", "ASIAN PAINTS", "HTD NextGen", "PPG-SIGMA", "BERGER PAINTS", "HEMPEL PAINTS", "JOTUN", "KIRLOSKAR CORROCOAT"].map((brand, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} y={15} className="w-full">
                <div className="bg-gray-50 hover:bg-gray-100 transition-all p-6 rounded-xl border border-gray-100 flex items-center justify-center h-28 w-full shadow-sm hover:shadow-md">
                  <span className="text-gray-700 font-bold text-base tracking-wider text-center">{brand}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

}
