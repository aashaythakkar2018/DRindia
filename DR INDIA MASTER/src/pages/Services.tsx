import { Shield, Hammer, Droplet, Layers, Eye, ShieldAlert, Thermometer, Construction, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Anti-Corrosive Painting",
    description: "Multi-layered protective system using epoxies, polyurethanes, and zinc silicates to combat extreme industrial atmospheric corrosion."
  },
  {
    icon: Hammer,
    title: "Abrasive Blasting",
    description: "Dry grit and copper slag blasting to achieve white metal cleaning profile standards (Sa 2.5 / Sa 3) on heavy steel fabrications."
  },
  {
    icon: Droplet,
    title: "Wet-Abrasive Blasting",
    description: "Dust-free surface preparation technique ideal for spark-sensitive areas, chemical tanks, and hydrocarbon refineries."
  },
  {
    icon: Layers,
    title: "High Performance Coating",
    description: "Application of specialty coatings including solvent-free tank linings, glass-flake polyester, and vinyl ester coatings."
  },
  {
    icon: ShieldAlert,
    title: "Acid Proof Lining",
    description: "Acid and alkali resistant lining installations for reactors, effluent treatment structures, chemical storage vaults, and pipelines."
  },
  {
    icon: Thermometer,
    title: "Fire Proofing",
    description: "Intumescent and cementitious fire proofing coatings to protect load-bearing structural elements in high-hazard refineries."
  },
  {
    icon: Construction,
    title: "Metallizing (TSA)",
    description: "Thermal Spray Aluminium (TSA) and zinc coating applications for high-temperature and subsea pipeline anti-corrosion protection."
  },
  {
    icon: ClipboardCheck,
    title: "Corrosion Audits",
    description: "NACE-compliant ultrasonic thickness testing, adhesion testing, chloride level checks, and protective coating life assessment diagnostics."
  },
  {
    icon: Eye,
    title: "Chimney Coating",
    description: "Specialized internal and external industrial chimney stacks and cooling towers coating using high-heat silicone systems."
  }
];

export default function Services() {
  return (
    <div className="w-full bg-white">
      {/* Hero Header */}
      <section className="relative py-24 bg-[#1A3E5F] text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=refinery%20pipes%20protective%20coating&width=1440&height=500')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive corrosion protection solutions, high-performance linings, and professional surface engineering.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#C1440E] uppercase tracking-wider mb-2">Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">What We Do</h3>
            <p className="text-gray-600">
              With advanced equipment and certified operators, we execute large-scale blasting and painting projects on-site or at our automated facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#1A3E5F]/10 rounded-xl flex items-center justify-center text-[#1A3E5F] group-hover:bg-[#C1440E] group-hover:text-white transition-all duration-300 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1A3E5F] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
