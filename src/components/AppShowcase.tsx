
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
} from "lucide-react";

const appImages = Array.from({ length: 9 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    src: `/images/app/app-${number}.png`,
    alt: `Captura de tela ${index + 1} do aplicativo Sipdus`,
    number: index + 1,
  };
});

export default function AppCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const currentImage = appImages[currentIndex];

  function previousImage() {
    setCurrentIndex((index) =>
      index === 0 ? appImages.length - 1 : index - 1
    );
    setImageError(false);
  }

  function nextImage() {
    setCurrentIndex((index) =>
      index === appImages.length - 1 ? 0 : index + 1
    );
    setImageError(false);
  }

  function selectImage(index: number) {
    setCurrentIndex(index);
    setImageError(false);
  }

  return (
    <section
      id="aplicativo"
      className="bg-slate-50 px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-800">
            <Smartphone size={17} />
            Aplicativo Sipdus
          </div>

          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Tecnologia pensada para o dia a dia
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Conheça as telas do aplicativo Sipdus e suas funcionalidades
            de acompanhamento e acessibilidade.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-4 shadow-lg sm:p-8">
          <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[480px]">
            <AnimatePresence mode="wait">
              {imageError ? (
                <motion.div
                  key={`error-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[300px] flex-col items-center justify-center gap-3 text-center text-slate-500"
                >
                  <Smartphone size={48} />
                  <p className="font-semibold">
                    Não foi possível carregar esta imagem.
                  </p>
                  <p className="text-sm">
                    Confira se o arquivo{" "}
                    <code>{`app-${String(currentImage.number).padStart(2, "0")}.png`}</code>{" "}
                    está na pasta <code>public/images/app/</code>.
                  </p>
                </motion.div>
              ) : (
                <motion.img
                  key={currentImage.src}
                  src={currentImage.src}
                  alt={currentImage.alt}
                  onError={() => setImageError(true)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="max-h-[480px] max-w-full rounded-2xl object-contain"
                />
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={previousImage}
              aria-label="Ver imagem anterior"
              className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md transition hover:bg-cyan-50 hover:text-cyan-700 sm:-left-5"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Ver próxima imagem"
              className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md transition hover:bg-cyan-50 hover:text-cyan-700 sm:-right-5"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="mt-6 flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-slate-600">
              Imagem {currentIndex + 1} de {appImages.length}
            </p>

            <div
              className="flex flex-wrap justify-center gap-2"
              aria-label="Selecionar imagem"
            >
              {appImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => selectImage(index)}
                  aria-label={`Ir para imagem ${image.number}`}
                  aria-current={
                    currentIndex === index ? "true" : undefined
                  }
                  className={`h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? "w-8 bg-cyan-600"
                      : "w-3 bg-slate-300 hover:bg-cyan-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
