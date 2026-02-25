import React, { useState, useEffect, useRef } from 'react';
import {
  Clock,
  Smartphone,
  Truck,
  Shield,
  IndianRupee,
  Gift,
} from 'lucide-react';
import FAQ from './FAQ';
import LFAProcess from './LFAProcess';
import TestimonialsAndReviews from './TestimonialsAndReviews';

export default function HeroSection({ onBookingClick }) {
  const [visibleItems, setVisibleItems] = useState({
    image: false,
    heading: false,
    description: false,
    offer: false,
    feature1: false,
    feature2: false,
    feature3: false,
    feature4: false,
    feature5: false,
    cta: false
  });

  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Animation handling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      setVisibleItems({
        image: scrollY >= 0,
        heading: scrollY >= 50 || windowHeight > 600,
        description: scrollY >= 100 || windowHeight > 600,
        offer: scrollY >= 150 || windowHeight > 700,
        feature1: scrollY >= 200 || windowHeight > 800,
        feature2: scrollY >= 250 || windowHeight > 800,
        feature3: scrollY >= 300 || windowHeight > 900,
        feature4: scrollY >= 350 || windowHeight > 900,
        feature5: scrollY >= 400 || windowHeight > 1000,
        cta: scrollY >= 450 || windowHeight > 1000
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    const timeouts = [
      setTimeout(() => setVisibleItems(prev => ({ ...prev, image: true })), 100),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, heading: true })), 300),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, description: true })), 500),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, offer: true })), 700),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, feature1: true })), 900),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, feature2: true })), 1100),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, feature3: true })), 1300),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, feature4: true })), 1500),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, feature5: true })), 1700),
      setTimeout(() => setVisibleItems(prev => ({ ...prev, cta: true })), 1900),
    ];

    return () => {
      window.removeEventListener('scroll', handleScroll);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.preload = "auto";
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('muted', '');
    video.setAttribute('autoplay', '');

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    };

    const handlePlaying = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().then(() => setIsPlaying(true));
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const getVideoHeight = () => {
    if (typeof window === 'undefined') return '80vh';
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width < 768) return `${Math.min(height * 0.6, 500)}px`;
    else if (width < 1024) return `${Math.min(height * 0.7, 600)}px`;
    else return `${Math.min(height * 0.8, 700)}px`;
  };

  const getVideoObjectPosition = () => {
    const width = window.innerWidth;
    return width < 768 ? 'center 30%' : 'center 25%';
  };

  return (
    <div className="relative min-h-screen">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        /* Faster animation on mobile */
        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
        }
        
        /* Even faster on very small screens */
        @media (max-width: 380px) {
          .animate-scroll {
            animation: scroll 12s linear infinite;
          }
        }
      `}</style>

      {/* Hero Video Background */}
      <div className="relative w-full overflow-hidden" style={{ height: getVideoHeight() }}>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
          style={{ objectPosition: getVideoObjectPosition() }}
          onClick={handleVideoClick}
          playsInline
          muted
          loop
          autoPlay
        >
          <source src="/lfa-video.mp4" type="video/mp4" />
        </video>

        {isVideoLoaded && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center px-4 sm:px-6 md:px-8 max-w-4xl">
              <h1
                className={`text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 transition-all duration-1000 ${
                  visibleItems.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Modern Laundry Experience
              </h1>
              <p
                className={`text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${
                  visibleItems.description ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Special Offer: New customers get exclusive first-order discounts!
              </p>
            </div>

            {!isPlaying ? (
              <button
                onClick={handleVideoClick}
                className="absolute bottom-8 right-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-4 transition-all duration-300"
                aria-label="Play video"
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleVideoClick}
                className="absolute bottom-8 right-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-4 transition-all duration-300"
                aria-label="Pause video"
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              </button>
            )}
          </div>
        )}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
          <div className="text-xs sm:text-sm">SCROLL</div>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Scrolling Text - Above Features */}
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 py-3 sm:py-4 mb-8 sm:mb-12">
        <div className="flex whitespace-nowrap animate-scroll">
          {[...Array(10)].map((_, i) => (
            <span 
              key={i} 
              className="inline-flex items-center text-white font-semibold text-sm sm:text-base md:text-lg mx-4 sm:mx-6 md:mx-8"
            >
              Rapid Service — Wash, dry & fold your laundry in just 3 Hours ✦
            </span>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {[
            {
              key: 'feature1',
              icon: <Clock className="w-10 h-10 sm:w-12 sm:h-12" />,
              title: 'Rapid Service',
              desc: <>Wash, dry & fold your laundry in just <strong>3 hours</strong></>
            },
            {
              key: 'feature2',
              icon: <Smartphone className="w-10 h-10 sm:w-12 sm:h-12" />,
              title: 'Easy Booking',
              desc: 'Schedule pickups and track orders online or via our app'
            },
            {
              key: 'feature3',
              icon: <Truck className="w-10 h-10 sm:w-12 sm:h-12" />,
              title: 'Free Pickup & Delivery',
              desc: 'At your convenience, right to your home or hotel—no extra charge'
            },
            {
              key: 'feature4',
              icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12" />,
              title: 'Hygienic Cleaning',
              desc: <>Separate wash cycles for each order ensure <strong>100%</strong> hygienic garment care</>
            },
            {
              key: 'feature5',
              icon: <IndianRupee className="w-10 h-10 sm:w-12 sm:h-12" />,
              title: 'Transparent Pricing',
              desc: "Clear rate cards and instant price calculator on our site—no hidden fees",
              extra: 'sm:col-span-2 lg:col-span-1'
            },
          ].map(({ key, icon, title, desc, extra = '' }) => (
            <div
              key={key}
              className={`bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${extra} ${
                visibleItems[key] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="text-cyan-600 mb-4">
                {icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">{title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => {
              if (onBookingClick) onBookingClick();
              else window.location.hash = '#booking';
            }}
            className={`text-white font-bold text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
              visibleItems.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ backgroundColor: '#1aa6b3' }}
            aria-label="Book your laundry service now"
          >
            Book Your Service Now
          </button>
        </div>
      </div>

      {/* Process Section */}
      <LFAProcess />

      {/* FAQ Section */}
      <FAQ />

      {/* Testimonials and Reviews Section */}
      <TestimonialsAndReviews />
    </div>
  );
}
