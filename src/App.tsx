import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Home from "@/src/pages/Home";
import Courses from "@/src/pages/Courses";
import About from "@/src/pages/About";
import Contact from "@/src/pages/Contact";
import Certifications from "@/src/pages/Certifications";
import WhatsAppButton from "@/src/components/WhatsAppButton";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative overflow-hidden">
        <div className="mesh-bg" />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
