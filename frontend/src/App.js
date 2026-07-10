import { useEffect, useState } from "react";
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
import EnquireFab from "./sections/EnquireFab";
import SplashIntro from "./components/SplashIntro";
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
      { threshold: 0.12 }
    );
    const attach = () => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    };
    // Run after each route change
    const t = setTimeout(attach, 60);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, [pathname]);
  return null;
};

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    // Only show splash once per session
    if (typeof window === "undefined") return true;
    return !sessionStorage.getItem("rivelle_splash_seen");
  });

  useEffect(() => {
    if (showSplash) {
      // Lock body scroll during splash
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSplash]);

  const handleSplashComplete = () => {
    sessionStorage.setItem("rivelle_splash_seen", "1");
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash && <SplashIntro onComplete={handleSplashComplete} />}
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
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        <EnquireFab />
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
