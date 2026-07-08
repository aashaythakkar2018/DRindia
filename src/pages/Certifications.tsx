import { ShieldCheck, Award, FileText, CheckCircle2, ChevronRight } from "lucide-react";
import logoImg from "@/assets/logo.png";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } }
};

const certifications = [
  {
    authority: "NACE INTERNATIONAL",
    title: "Coating Inspector Program",
    desc: "Qualified inspectors ensuring NACE-compliant surface checks, profile testing, and paint thickness standards.",
    code: "NACE-CIP"
  },
  {
    authority: "SSPC",
    title: "Paint Coatings, Inspection & QC",
    desc: "Specialized quality control system meeting SSPC standards for steel structure protective paint application.",
    code: "SSPC-QP"
  },
  {
    authority: "ISO 9001:2015",
    title: "Quality Management System",
    desc: "Certified workflows for corporate operations, on-site execution logs, client reports, and supply chains.",
    code: "ISO-9001"
  },
  {
    authority: "ISO 14001:2015",
    title: "Environmental Management",
    desc: "Strict compliance controls for disposal of waste grit/copper slag, containment systems, and air quality.",
    code: "ISO-14001"
  },
  {
    authority: "ISO 45001:2018",
    title: "Occupational Health & Safety",
    desc: "Rigorous standards for high-height safety harnesses, gas testing in confined areas, and health briefs.",
    code: "ISO-45001"
  }
];

export default function Certifications() {
  return (
    <div className="w-full bg-white">
      {/* Hero Header */}
      <section className="relative py-24 bg-[#1A3E5F] text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=industrial%20quality%20control%20testing&width=1440&height=500')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal y={20} duration={0.6}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Certifications & Standards</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              NACE, SSPC, and ISO compliant procedures guaranteeing the highest industrial quality and safety standards.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 items-center">
            <ScrollReveal x={-20} duration={0.6} className="lg:col-span-2 w-full">
              <h2 className="text-sm font-bold text-[#C1440E] uppercase tracking-wider mb-2">Qualifications</h2>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Uncompromising Quality Controls</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At NextGen Painteam, quality is not a variable. We operate under strict quality check criteria. Our protective coating projects are monitored continuously by certified NACE inspectors, ensuring compliance with global coating inspection criteria.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From measuring surface roughness profile to monitoring dry film thickness (DFT), atmospheric dew points, and salt contamination tests, we log every detail to deliver complete traceability records to our clients.
              </p>
            </ScrollReveal>

            <ScrollReveal scale={0.95} duration={0.6} delay={0.1} className="bg-gray-55 border border-gray-100 p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg w-full">
              <img
                src={logoImg}
                alt="HTD NextGen Logo"
                className="h-28 w-auto mb-6 object-contain"
              />
              <span className="text-[#1A3E5F] font-bold text-lg">NextGen Painteam</span>
              <p className="text-xs text-gray-400 mt-2">Certified Industrial Protective Coating Specialist since 1993</p>
            </ScrollReveal>
          </div>

          <div className="border-t border-gray-100 pt-16">
            <ScrollReveal y={20} className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Credentials</h3>
              <p className="text-gray-600 text-sm">
                We maintain active certifications from leading international safety and quality standards councils.
              </p>
            </ScrollReveal>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-gray-200/80 p-6 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:border-gray-300 transition-all duration-300 w-full"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#C1440E] uppercase tracking-widest">{cert.code}</span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-1">{cert.authority}</h4>
                    <h5 className="text-xs font-semibold text-gray-400 mb-4">{cert.title}</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">{cert.desc}</p>
                  </div>
                  
                  <div className="flex items-center text-xs font-bold text-[#1A3E5F] mt-6 cursor-pointer group">
                    <span>Learn More</span>
                    <ChevronRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );

}
