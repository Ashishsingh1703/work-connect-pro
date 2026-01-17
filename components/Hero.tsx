"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 lg:px-8 overflow-hidden">
      
      {/* Animated Chili Background with Photography Effects */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
        initial={{ scale: 1.15, filter: "blur(8px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Subtle Ken Burns Continuous Animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
        animate={{ 
          scale: [1, 1.05, 1],
          x: [0, 10, 0],
          y: [0, -5, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* Cinematic Letterbox Bars */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/60 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent z-10" />

      {/* Photography Light Leak Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/10 to-red-500/20 pointer-events-none"
        animate={{ 
          opacity: [0, 0.3, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Spotlight Effect on Chili */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 60% 50%, transparent 0%, rgba(0,0,0,0.5) 100%)"
        }}
        animate={{
          opacity: [0.6, 0.4, 0.6]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Left Side Dark Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl lg:ml-20">
        <h1 className="text-5xl font-light tracking-tight text-white sm:text-7xl lg:text-8xl max-w-5xl mx-auto text-balance font-display">
          We bring visual stories <br className="hidden sm:block" />
          <span className="text-zinc-400 italic font-serif">to life.</span>
        </h1>

        <p className="mt-6 text-lg text-zinc-300 max-w-2xl leading-relaxed font-serif font-light tracking-wide">
          Social media videos, podcasts, and event content — professionally
          produced, platform-ready, and reliable.
        </p>

        <a
          href="/contact"
          className="inline-block mt-10 px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition"
        >
          Book a Call
        </a>
      </div>

      {/* Film Grain Overlay for Photography Feel */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  );
}