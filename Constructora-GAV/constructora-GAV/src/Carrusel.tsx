import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Home.css";

type ImageItem = {
  src: string;
  alt?: string;
  caption?: string;
};

type Props = {
  images: ImageItem[];
  autoPlay?: boolean;
  interval?: number;
};

export default function Carousel({
  images,
  autoPlay = true,
  interval = 4000,
}: Props) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!autoPlay) return;

    clearInterval(timerRef.current as number);

    timerRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timerRef.current as number);
  }, [index, autoPlay, interval, images.length]);

  // const next = () => setIndex((i) => (i + 1) % images.length);
  // const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">

        {/* AREA DE IMAGEN */}
        <div className="relative h-48 sm:h-64 md:h-72 bg-gray-100 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index].src}
              src={images[index].src}
              alt={images[index].alt ?? ""}
              className="carousel-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Botones izq / der */}
          {/* <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronRight size={20} />
          </button> */}

          {/* CAPTION */}
          {images[index].caption && (
            <div className="carousel-caption">
              {images[index].caption}
            </div>
          )}
        </div>

        {/* INDICADORES */}
        <div className="carousel-indicadores">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`indicador ${i === index ? "activo" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



// import React, { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";


// // Props types
// type ImageItem = {
//   src: string;
//   alt?: string;
//   caption?: string;
// };

// type CarouselProps = {
//   images: ImageItem[];
//   className?: string;
//   autoPlay?: boolean;
//   interval?: number; // ms
//   showThumbnails?: boolean;
//   showIndicators?: boolean;
//   startIndex?: number;
// };

// // Default exported component
// export default function CarouselProfesional({
//   images,
//   className = "",
//   autoPlay = true,
//   interval = 5000,
//   showThumbnails = true,
//   showIndicators = true,
//   startIndex = 0,
// }: CarouselProps) {
//   const [index, setIndex] = useState<number>(
//     Math.min(Math.max(0, startIndex), Math.max(0, images.length - 1))
//   );
//   const timerRef = useRef<number | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!autoPlay || images.length <= 1) return;
//     clearTimer();
//     timerRef.current = window.setInterval(() => next(), interval);
//     return () => clearTimer();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [index, autoPlay, interval, images.length]);

//   const clearTimer = () => {
//     if (timerRef.current) {
//       window.clearInterval(timerRef.current);
//       timerRef.current = null;
//     }
//   };

//   const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
//   const next = () => setIndex((i) => (i + 1) % images.length);
//   const goTo = (i: number) => setIndex(Math.min(Math.max(0, i), images.length - 1));

//   // keyboard navigation
//   useEffect(() => {
//     const handler = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") prev();
//       if (e.key === "ArrowRight") next();
//     };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   });

//   // swipe support (pointer events)
//   useEffect(() => {
//     const node = containerRef.current;
//     if (!node) return;
//     let startX: number | null = null;
//     let moved = false;

//     const onPointerDown = (e: PointerEvent) => {
//       startX = e.clientX;
//       moved = false;
//       node.setPointerCapture(e.pointerId);
//       clearTimer();
//     };
//     const onPointerMove = (e: PointerEvent) => {
//       if (startX === null) return;
//       const diff = e.clientX - startX;
//       if (Math.abs(diff) > 30) moved = true;
//     };
//     const onPointerUp = (e: PointerEvent) => {
//       if (startX === null) return;
//       const diff = e.clientX - startX;
//       startX = null;
//       if (!moved) return;
//       if (diff > 40) prev();
//       else if (diff < -40) next();
//       if (autoPlay) timerRef.current = window.setInterval(() => next(), interval);
//     };

//     node.addEventListener("pointerdown", onPointerDown);
//     node.addEventListener("pointermove", onPointerMove);
//     node.addEventListener("pointerup", onPointerUp);
//     node.addEventListener("pointercancel", onPointerUp);

//     return () => {
//       node.removeEventListener("pointerdown", onPointerDown);
//       node.removeEventListener("pointermove", onPointerMove);
//       node.removeEventListener("pointerup", onPointerUp);
//       node.removeEventListener("pointercancel", onPointerUp);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [containerRef.current, autoPlay, interval]);

//   if (!images || images.length === 0) {
//     return (
//       <div className={`w-full p-6 bg-white rounded-2xl shadow-sm text-center ${className}`}>
//         <p className="text-gray-600">No hay imágenes para mostrar.</p>
//       </div>
//     );
//   }

//   return (
//     <div className={`max-w-5xl mx-auto ${className}`}>
//       <div
//         ref={containerRef}
//         className="relative bg-white rounded-2xl overflow-hidden shadow-lg select-none"
//         aria-roledescription="carousel"
//         aria-label="Galería de imágenes"
//       >
//         {/* Image area */}
//         <div className="relative h-56 sm:h-72 md:h-80 bg-gray-50 flex items-center justify-center overflow-hidden rounded-xl">
//           <AnimatePresence initial={false} mode="wait">
//             <motion.img
//               key={images[index].src}
//               src={images[index].src}
//               alt={images[index].alt ?? `Imagen ${index + 1}`}
//               loading="lazy"
//               className="max-h-full max-w-full object-contain"
//               initial={{ opacity: 0, scale: 1.03 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.98 }}
//               transition={{ duration: 0.5 }}
//               draggable={false}
//             />
//           </AnimatePresence>

//           {/* Left / Right controls */}
//           {images.length > 1 && (
//             <>
//               <button
//                 onClick={() => {
//                   clearTimer();
//                   prev();
//                 }}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/75 backdrop-blur-sm hover:bg-white px-2 py-2 rounded-full shadow focus:outline-none"
//                 aria-label="Anterior"
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               <button
//                 onClick={() => {
//                   clearTimer();
//                   next();
//                 }}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/75 backdrop-blur-sm hover:bg-white px-2 py-2 rounded-full shadow focus:outline-none"
//                 aria-label="Siguiente"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </>
//           )}

//           {/* Caption */}
//           {images[index].caption && (
//             <div className="absolute left-6 right-6 bottom-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent text-white p-4 rounded-lg">
//               <p className="text-sm sm:text-base leading-tight">{images[index].caption}</p>
//             </div>
//           )}
//         </div>

//         {/* Indicators */}
//         {showIndicators && images.length > 1 && (
//           <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
//             {images.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => {
//                   clearTimer();
//                   goTo(i);
//                 }}
//                 aria-label={`Ir a la imagen ${i + 1}`}
//                 className={`w-3 h-3 rounded-full focus:outline-none transition-all shadow-sm ${i === index ? "scale-110 bg-white" : "bg-white/60"
//                   }`}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Thumbnails */}
//       {showThumbnails && images.length > 1 && (
//         <div className="mt-4 grid grid-cols-5 gap-3">
//           {images.map((img, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 clearTimer();
//                 goTo(i);
//               }}
//               className={`overflow-hidden rounded-xl border-2 focus:outline-none transition-shadow ${i === index ? "border-sky-400 shadow-lg" : "border-transparent"
//                 }`}
//               aria-label={`Miniatura ${i + 1}`}
//             >
//               <img src={img.src} alt={img.alt ?? `Miniatura ${i + 1}`} className="w-full h-20 object-cover" loading="lazy" draggable={false} />
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// /*
//   Uso ejemplo:

//   import CarouselProfesional from './CarouselProfesional';

//   const fotos = [
//     { src: '/images/paraíso.jpg', alt: 'Paraíso', caption: 'Proyecto en Paraíso — 2025' },
//     { src: '/images/escazu.jpg', alt: 'Escazú', caption: 'Oficinas centrales — Escazú' },
//     // ... más
//   ];

//   <CarouselProfesional images={fotos} autoPlay interval={4500} showThumbnails />

//   Requisitos:
//   - TailwindCSS configurado en el proyecto.
//   - framer-motion y lucide-react instalados (opcionales pero recomendados):
//     npm install framer-motion lucide-react

//   Sugerencias de personalización:
//   - Cambie tamaños ajustando las clases de Tailwind (height en el area de imagen).
//   - Reemplace los iconos si prefiere otros o usa shadcn/ui para botones.
// */
