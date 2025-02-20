'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { id: 1, image: "/banner1.jpg", title: "Explora el mundo" },
  { id: 2, image: "/banner2.jpg", title: "Nuevos personajes" },
  { id: 3, image: "/banner3.gif", type: "video", title: "Combates épicos" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Cambio automático de slides
  useEffect(() => {
    if (isHovered) return; // Pausa si el usuario está interactuando

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative h-[700px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[700px] w-full flex-shrink-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={slide.id === slides[current].id}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all"
        aria-label="Siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 flex w-full justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              i === current ? 'bg-violet-400 scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir a la slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}