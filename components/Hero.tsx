"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for parallax
  const springConfig = { damping: 25, stiffness: 150 };
  const parallaxX = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [0, 1], [-10, 10]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth);
      mouseY.set(clientY / innerHeight);
      setMousePosition({ x: clientX / innerWidth, y: clientY / innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-[100vh] flex items-center px-6 lg:px-8 overflow-hidden">
      
      {/* Animated Chili Background with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ 
          backgroundImage: "url('/hero.jpg')",
          x: parallaxX,
          y: parallaxY,
        }}
        initial={{ scale: 1.3, filter: "blur(12px) saturate(0.5)" }}
        animate={{ scale: 1.1, filter: "blur(0px) saturate(1.2)" }}
        transition={{ duration: 2.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Subtle Ken Burns Continuous Animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ 
          backgroundImage: "url('/hero.jpg')",
          x: parallaxX,
          y: parallaxY,
        }}
        animate={{ 
          scale: [1.1, 1.15, 1.1],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* Cinematic Letterbox Bars */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

      {/* Animated Heat Shimmer Effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(239,68,68,0.1) 50%, transparent 100%)",
          backgroundSize: "100% 200%",
        }}
        animate={{ 
          backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* Chili Glow Pulse Effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 55% 45%, rgba(239,68,68,0.15) 0%, transparent 60%)"
        }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* Dynamic Light Leak Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/10 to-red-500/20 pointer-events-none"
        animate={{ 
          opacity: [0, 0.4, 0.2, 0.5, 0],
          x: ["-10%", "5%", "-5%", "10%", "-10%"],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles Effect */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-500/40 rounded-full pointer-events-none"
          style={{
            left: `${20 + (i * 10)}%`,
            top: `${30 + (i * 5)}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 30, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Spotlight Effect on Chili */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 40% at ${50 + (mousePosition.x - 0.5) * 20}% ${50 + (mousePosition.y - 0.5) * 20}%, transparent 0%, rgba(0,0,0,0.6) 100%)`
        }}
        animate={{
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Left Side Dark Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Animated Vignette */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 200px 80px rgba(0,0,0,0.7)"
        }}
        animate={{
          opacity: [0.8, 0.6, 0.8]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-20 max-w-4xl lg:ml-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-6"
        >
          <span className="text-red-500 text-sm tracking-[0.3em] uppercase font-medium">
            Photography • Videography • Stories
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl font-light tracking-tight text-white sm:text-7xl lg:text-8xl max-w-5xl mx-auto text-balance font-display"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          We bring visual stories <br className="hidden sm:block" />
          <motion.span 
            className="text-zinc-400 italic font-serif inline-block"
            animate={{ 
              textShadow: [
                "0 0 0px rgba(239,68,68,0)",
                "0 0 30px rgba(239,68,68,0.3)",
                "0 0 0px rgba(239,68,68,0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            to life.
          </motion.span>
        </motion.h1>

        <motion.p 
          className="mt-6 text-lg text-zinc-300 max-w-2xl leading-relaxed font-serif font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          Social media videos, podcasts, and event content — professionally
          produced, platform-ready, and reliable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-10 flex items-center gap-6"
        >
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black text-sm font-medium rounded-full transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Book a Call</span>
            <motion.div
              className="absolute inset-0 bg-red-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
            >
              Book a Call
            </motion.span>
          </motion.a>

          <motion.a
            href="/work"
            className="text-zinc-400 text-sm font-medium hover:text-white transition-colors flex items-center gap-2 group"
            whileHover={{ x: 5 }}
          >
            View Our Work 
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-white/50 rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Film Grain Overlay for Photography Feel */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-30 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Scanlines */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-30 opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 0.1, repeat: Infinity }}
      />
    </section>
  );
}