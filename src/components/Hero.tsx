import {
  motion,
} from "motion/react";

import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import Device3D from "./Device3D";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#f1f4f4] pt-[72px]"
    >

      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-[1400px] items-center gap-8 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-10">

        {/* TEXTO */}

        <div className="relative z-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#087f93]">
              <span className="h-2 w-2 rounded-full bg-[#ef4b55]" />
              Pesquisa • Tecnologia • Acessibilidade
            </div>

            <h1 className="max-w-[700px] text-[clamp(50px,7vw,94px)] font-extrabold leading-[0.91] tracking-[-0.065em] text-[#102329]">

              Monitorar também é

              <span className="block text-[#08b9d1]">
                uma forma de cuidar.
              </span>

            </h1>

            <p className="mt-8 max-w-[570px] text-base leading-7 text-[#60777d] lg:text-lg">
              O SIPDUS nasceu da busca por alternativas
              que possam tornar o acompanhamento diário
              da glicemia mais confortável, informativo
              e acessível.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#pergunta"
                className="inline-flex items-center gap-2 rounded-full bg-[#102329] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#08b9d1]"
              >
                Conheça a pesquisa

                <ArrowUpRight size={17} />
              </a>

              <a
                href="#projeto"
                className="inline-flex items-center gap-2 rounded-full border border-[#102329]/15 bg-white px-6 py-3.5 text-sm font-bold text-[#102329] transition hover:border-[#08b9d1] hover:text-[#087f93]"
              >
                Como funciona
              </a>

            </div>

          </motion.div>

          <div className="mt-12 hidden items-center gap-3 text-xs font-semibold text-[#60777d] lg:flex">
            <ArrowDown size={16} />
            Role para explorar
          </div>

        </div>

        {/* 3D */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="relative"
        >

          <div className="absolute right-[8%] top-[8%] h-20 w-20 rounded-full bg-[#ef4b55] opacity-80 blur-2xl" />

          <div className="relative overflow-hidden rounded-[40px] border border-[#08b9d1]/20 bg-[#dff7f9]">
            <Device3D />
          </div>

        </motion.div>

      </div>

      <div className="h-2 bg-[#08b9d1]" />

    </section>
  );
}