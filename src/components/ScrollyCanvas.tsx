'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollyCanvas() {
  const { scrollYProgress } = useScroll();

  // Subtle cinematic scrollytelling motion transforms
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [0.85, 0.9, 0.65]);

  return (
    <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#0a0a0a] z-0">
      {/* Background Image with Cinematic Scroll Transforms */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale, y, opacity }}
      >
        <img
          src="/hero-bg.jpg"
          alt="Sameer Kumar Singh"
          className="w-full h-full object-cover object-center filter contrast-110 brightness-95"
        />
      </motion.div>

      {/* Atmospheric Vignette & Gradient Overlays for Golden Artwork Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Corner Monogram Badge */}
      <div className="absolute bottom-0 right-0 z-[100] pb-2 pr-4 md:pb-4 md:pr-6 pointer-events-none">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-[#000000]/90 backdrop-blur-3xl rounded-tl-2xl blur-[4px] scale-[1.2] -z-10" />
          
          <div className="bg-[#0a0a0a]/90 backdrop-blur-2xl border-t border-l border-white/10 px-5 py-2.5 rounded-tl-xl shadow-2xl overflow-hidden min-w-[75px] min-h-[45px] flex items-center justify-center">
            <h1 
              className="font-display font-black text-xl md:text-2xl tracking-wider text-[#FFD700] drop-shadow-md leading-none"
              style={{ textShadow: "0 0 10px rgba(255,215,0,0.3)" }}
            >
              SKS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
