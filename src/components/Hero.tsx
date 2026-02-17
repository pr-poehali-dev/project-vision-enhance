import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/56ae7473-e71c-4bfb-80d6-cecfa0eafd8b/files/81c56cb0-cea4-4c49-9504-747bd4eb7207.jpg"
          alt="Эвакуатор на ночной дороге"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ЭВАКУАТОР<br />
          <span className="text-amber-400">24/7</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Быстрая подача от 15 минут. Безопасная эвакуация любого транспорта по городу и области
        </p>
        <a
          href="tel:+79001234567"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 text-lg transition-all duration-300 uppercase tracking-wide"
        >
          Вызвать эвакуатор
        </a>
      </div>
    </div>
  );
}
