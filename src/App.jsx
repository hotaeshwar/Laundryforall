import React, { useEffect, useState, useRef } from 'react';
import HeroSection from './components/hero';
import Navbar from './components/navbar';
import AboutUs from './components/about';
import Process from './components/process';
import AchievementSection from './components/AchievementSection';
import BookingPage from './components/booking';
import Services from './components/service';
import Pricing from './components/pricing';
import Contact from './components/contact';
import Franchise from './components/Franchise';
import Footer from './components/footer';
import WhatsAppChatbot from './components/WhatsAppChatbot';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showBooking, setShowBooking] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showFranchise, setShowFranchise] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [showOnlyHome, setShowOnlyHome] = useState(true);
  const servicesPageRef = useRef(null);
  const bookingPageRef = useRef(null);
  const pricingPageRef = useRef(null);
  const contactPageRef = useRef(null);
  const franchisePageRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash;
      console.log('Hash changed to:', hash);

      if (hash === '#booking') {
        setShowBooking(true);
        setShowServices(false);
        setShowPricing(false);
        setShowContact(false);
        setShowFranchise(false);
        setCurrentSection('booking');
        setShowOnlyHome(false);
        setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);

      } else if (hash === '#services') {
        setShowServices(true);
        setShowBooking(false);
        setShowPricing(false);
        setShowContact(false);
        setShowFranchise(false);
        setCurrentSection('services');
        setShowOnlyHome(false);
        setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);

      } else if (hash === '#pricing') {
        setShowPricing(true);
        setShowBooking(false);
        setShowServices(false);
        setShowContact(false);
        setShowFranchise(false);
        setCurrentSection('pricing');
        setShowOnlyHome(false);
        setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);

      } else if (hash === '#contact') {
        setShowContact(true);
        setShowBooking(false);
        setShowServices(false);
        setShowPricing(false);
        setShowFranchise(false);
        setCurrentSection('contact');
        setShowOnlyHome(false);
        setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);

      } else if (hash === '#franchise') {
        setShowFranchise(true);
        setShowBooking(false);
        setShowServices(false);
        setShowPricing(false);
        setShowContact(false);
        setCurrentSection('franchise');
        setShowOnlyHome(false);
        setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);

      } else if (hash === '#about') {
        setShowBooking(false);
        setShowServices(false);
        setShowPricing(false);
        setShowContact(false);
        setShowFranchise(false);
        setCurrentSection('about');
        setShowOnlyHome(false);
        setTimeout(() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);

      } else if (hash === '#service') {
        setShowBooking(false);
        setShowServices(false);
        setShowPricing(false);
        setShowContact(false);
        setShowFranchise(false);
        setCurrentSection('service');
        setShowOnlyHome(false);
        setTimeout(() => {
          const serviceSection = document.getElementById('service');
          if (serviceSection) {
            serviceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);

      } else if (hash === '#home' || hash === '') {
        setShowBooking(false);
        setShowServices(false);
        setShowPricing(false);
        setShowContact(false);
        setShowFranchise(false);
        setCurrentSection('home');
        setShowOnlyHome(true);
        setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);

      } else {
        setShowBooking(false);
        setShowServices(false);
        setShowPricing(false);
        setShowContact(false);
        setShowFranchise(false);
        setCurrentSection('home');
        setShowOnlyHome(true);
        setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
      }
    };

    handleHashRouting();
    window.addEventListener('popstate', handleHashRouting);
    window.addEventListener('hashchange', handleHashRouting);
    return () => {
      window.removeEventListener('popstate', handleHashRouting);
      window.removeEventListener('hashchange', handleHashRouting);
    };
  }, []);

  const handleBookingClick = () => { window.location.hash = '#booking'; };
  const handleServicesClick = () => { window.location.hash = '#services'; };
  const handlePricingClick = () => { window.location.hash = '#pricing'; };
  const handleHomeClick = () => { window.location.hash = '#home'; };
  const handleAboutClick = () => { window.location.hash = '#about'; };
  const handleServiceClick = () => { window.location.hash = '#service'; };
  const handleContactClick = () => { window.location.hash = '#contact'; };
  const handleFranchiseClick = () => { window.location.hash = '#franchise'; };
  const handleCloseBooking = () => { window.location.hash = '#home'; };
  const handleCloseServices = () => { window.location.hash = '#home'; };
  const handleClosePricing = () => { window.location.hash = '#home'; };
  const handleCloseContact = () => { window.location.hash = '#home'; };
  const handleCloseFranchise = () => { window.location.hash = '#home'; };

  useEffect(() => {
    if (showServices && servicesPageRef.current) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [showServices]);

  useEffect(() => {
    if (showBooking && bookingPageRef.current) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [showBooking]);

  useEffect(() => {
    if (showPricing && pricingPageRef.current) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [showPricing]);

  useEffect(() => {
    if (showContact && contactPageRef.current) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [showContact]);

  useEffect(() => {
    if (showFranchise && franchisePageRef.current) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [showFranchise]);

  // SPLASH SCREEN
  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#1aa6b3] via-[#158993] to-[#1aa6b3] flex items-center justify-center z-50 overflow-hidden">
        <div className="text-center relative z-10">
          <div className="relative mb-8 animate-scale-in">
            <div className="absolute inset-0 bg-white/30 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-4 border-white/50 backdrop-blur-sm">
              <img
                src="/images/LFA-03.png"
                alt="LaundryForAll Logo"
                className="w-48 h-48 md:w-64 md:h-64 mx-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up tracking-wide">
            LaundryForAll
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 animate-fade-in-up-delayed font-medium">
            Premium Laundry Services
          </p>
          <div className="flex gap-3 justify-center">
            <div className="w-4 h-4 bg-white rounded-full animate-bounce shadow-lg"></div>
            <div className="w-4 h-4 bg-white rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-4 h-4 bg-white rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  // FRANCHISE PAGE
  if (showFranchise) {
    return (
      <div className="App" ref={franchisePageRef}>
        <Navbar
          onBookingClick={handleBookingClick}
          onServicesClick={handleServicesClick}
          onPricingClick={handlePricingClick}
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick}
          onServiceClick={handleServiceClick}
          onContactClick={handleContactClick}
          onFranchiseClick={handleFranchiseClick}
        />
        <div className="min-h-screen">
          <Franchise onClose={handleCloseFranchise} />
        </div>
        <Footer />
        <WhatsAppChatbot />
      </div>
    );
  }

  // CONTACT PAGE
  if (showContact) {
    return (
      <div className="App" ref={contactPageRef}>
        <Navbar
          onBookingClick={handleBookingClick}
          onServicesClick={handleServicesClick}
          onPricingClick={handlePricingClick}
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick}
          onServiceClick={handleServiceClick}
          onContactClick={handleContactClick}
          onFranchiseClick={handleFranchiseClick}
        />
        <div className="min-h-screen">
          <Contact onClose={handleCloseContact} />
        </div>
        <Footer />
        <WhatsAppChatbot />
      </div>
    );
  }

  // PRICING PAGE
  if (showPricing) {
    return (
      <div className="App" ref={pricingPageRef}>
        <Navbar
          onBookingClick={handleBookingClick}
          onServicesClick={handleServicesClick}
          onPricingClick={handlePricingClick}
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick}
          onServiceClick={handleServiceClick}
          onContactClick={handleContactClick}
          onFranchiseClick={handleFranchiseClick}
        />
        <div className="min-h-screen">
          <Pricing
            onClose={handleClosePricing}
            onBookingClick={handleBookingClick}
          />
        </div>
        <Footer />
        <WhatsAppChatbot />
      </div>
    );
  }

  // SERVICES PAGE
  if (showServices) {
    return (
      <div className="App" ref={servicesPageRef}>
        <Navbar
          onBookingClick={handleBookingClick}
          onServicesClick={handleServicesClick}
          onPricingClick={handlePricingClick}
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick}
          onServiceClick={handleServiceClick}
          onContactClick={handleContactClick}
          onFranchiseClick={handleFranchiseClick}
        />
        <div className="min-h-screen">
          <Services onClose={handleCloseServices} />
        </div>
        <Footer />
        <WhatsAppChatbot />
      </div>
    );
  }

  // BOOKING PAGE
  if (showBooking) {
    return (
      <div className="App" ref={bookingPageRef}>
        <Navbar
          onBookingClick={handleBookingClick}
          onServicesClick={handleServicesClick}
          onPricingClick={handlePricingClick}
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick}
          onServiceClick={handleServiceClick}
          onContactClick={handleContactClick}
          onFranchiseClick={handleFranchiseClick}
        />
        <div className="min-h-screen">
          <BookingPage onClose={handleCloseBooking} />
        </div>
        <Footer />
        <WhatsAppChatbot />
      </div>
    );
  }

  // HOMEPAGE — ✅ Franchise is NOT rendered here, only via hash routing above
  return (
    <div className="App">
      <Navbar
        onBookingClick={handleBookingClick}
        onServicesClick={handleServicesClick}
        onPricingClick={handlePricingClick}
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onServiceClick={handleServiceClick}
        onContactClick={handleContactClick}
        onFranchiseClick={handleFranchiseClick}
      />

      <section id="home" className="relative">
        <HeroSection />
      </section>

      {currentSection === 'about' && (
        <section id="about" className="pt-8 md:pt-12 lg:pt-16">
          <AboutUs />
        </section>
      )}

      {currentSection === 'service' && (
        <section id="service" className="pt-8 md:pt-10 lg:pt-12">
          <Process />
        </section>
      )}

      {/* ✅ NO <Franchise /> here - it only renders via showFranchise state above */}

      
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
}

export default App;