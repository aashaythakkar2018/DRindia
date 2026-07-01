import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Certifications from "@/pages/Certifications";
import Contact from "@/pages/Contact";
import { Phone, Mail, Globe, Menu, X, ArrowUp } from "lucide-react";
import logoImg from "@/assets/logo.png";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const isActiveLink = (path: string) => {
    return location.pathname === path ? "text-[#C1440E]" : "text-gray-800 hover:text-[#1A3E5F]";
  };

  return (
    <div className="flex flex-col min-h-screen font-inter bg-white text-gray-800 antialiased">
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="inline-block" onClick={() => setMobileMenuOpen(false)}>
              {/* Use the logo image asset */}
              <img src={logoImg} alt="DR India Logo" className="h-20 md:h-24 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center flex-1 justify-center max-w-3xl mx-auto">
            <div className="flex items-center space-x-12">
              <Link to="/" className={`font-semibold text-base transition-colors ${isActiveLink("/")}`}>Home</Link>
              <Link to="/about" className={`font-semibold text-base transition-colors ${isActiveLink("/about")}`}>About Us</Link>
              <Link to="/services" className={`font-semibold text-base transition-colors ${isActiveLink("/services")}`}>Services</Link>
              <Link to="/certifications" className={`font-semibold text-base transition-colors ${isActiveLink("/certifications")}`}>Awards & Achievements</Link>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-[#1A3E5F] text-white rounded-button px-6 py-2.5 hover:bg-[#1A3E5F]/90 transition-colors whitespace-nowrap text-sm font-semibold inline-block"
            >
              Contact Us
            </Link>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg py-4 px-6 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-800 font-semibold py-2 hover:text-[#C1440E]" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/about" className="text-gray-800 font-semibold py-2 hover:text-[#C1440E]" onClick={toggleMobileMenu}>About Us</Link>
              <Link to="/services" className="text-gray-800 font-semibold py-2 hover:text-[#C1440E]" onClick={toggleMobileMenu}>Services</Link>
              <Link to="/certifications" className="text-gray-800 font-semibold py-2 hover:text-[#C1440E]" onClick={toggleMobileMenu}>Awards & Achievements</Link>
              <Link to="/contact" className="text-gray-800 font-semibold py-2 hover:text-[#C1440E]" onClick={toggleMobileMenu}>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Body */}
      <main className="flex-grow pt-[84px] md:pt-[100px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div>
              <Link to="/" className="text-2xl font-bold text-white mb-4 inline-block tracking-wide uppercase">
                DR India
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Protecting industrial infrastructure with precision since 1993. NACE certified, ISO 9001/14001/45001 compliant.
              </p>
              <div className="flex space-x-4">
                {/* Social links placeholder */}
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1A3E5F] transition-colors">
                  <i className="ri-linkedin-fill text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1A3E5F] transition-colors">
                  <i className="ri-facebook-fill text-lg"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1A3E5F] transition-colors">
                  <i className="ri-twitter-x-fill text-lg"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/certifications" className="text-gray-400 hover:text-white transition-colors">Awards & Achievements</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Channels</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-3 text-[#C1440E]" />
                  <a href="tel:+919925853335" className="hover:text-white transition-colors">+91 99258 53335</a>
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-3 text-[#C1440E]" />
                  <a href="mailto:dev@devrang.co.in" className="hover:text-white transition-colors">dev@devrang.co.in</a>
                </li>
                <li className="flex items-center text-gray-400">
                  <Globe className="w-4 h-4 mr-3 text-[#C1440E]" />
                  <a href="http://www.devrang.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.devrang.co.in</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; 2025 The DR India. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-[#C1440E] hover:bg-[#C1440E]/90 text-white rounded-full flex items-center justify-center shadow-lg transition-all z-50 transform hover:-translate-y-1"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
