import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import RoomsPage from "./pages/RoomsPage";
import RoomDetail from "./pages/RoomDetail";
import AmenitiesPage from "./pages/AmenitiesPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import { Toaster } from "./components/ui/toaster";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const Reveal = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    const attach = () => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    };
    // Small timeout to let DOM render, then attach
    const t = setTimeout(attach, 30);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Reveal />
        <Header />
        <div className="page-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/rooms/:slug" element={<RoomDetail />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/our-story" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
