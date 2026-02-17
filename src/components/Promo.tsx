import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/56ae7473-e71c-4bfb-80d6-cecfa0eafd8b/files/d171ba68-a06f-4b7c-bf0b-2869bad7a747.jpg"
            alt="Срочная помощь на дороге"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-amber-400 uppercase z-10 text-sm md:text-base lg:text-lg font-bold">
        Работаем без выходных
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10">
        Сломались на трассе? Попали в ДТП? Не заводится мотор?
        Звоните — приедем быстро, погрузим аккуратно, доставим куда нужно.
      </p>
    </div>
  );
}
