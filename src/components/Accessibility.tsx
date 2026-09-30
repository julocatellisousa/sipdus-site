import {
  motion,
} from "motion/react";

import {
  Eye,
  Mic,
  Languages,
} from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Interface clara",
    text: "Informações organizadas para facilitar a leitura e a interação.",
  },
  {
    icon: Mic,
    title: "Interação por voz",
    text: "Um assistente pode responder perguntas e ampliar as formas de interação.",
  },
  {
    icon: Eye,
    title: "Percepção das cores",
    text: "O site oferece modos específicos para diferentes formas de percepção das cores.",
  },
  {
    icon: Languages,
    title: "Tradução para Libras",
    text: "Integração com o VLibras para oferecer uma alternativa de tradução automática do conteúdo.",
  },
];

export default function Accessibility() {
  return (
    <section
      id="acessibilidade"
      className="bg-[#087f93] px-6 py-28 text-white lg:px-10"
    >

      <div className="mx-auto max-w-[1280px]">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8df3ff]">
              04 — Acessibilidade
            </div>

            <h2 className="text-[clamp(44px,6vw,76px)] font-extrabold leading-[0.92] tracking-[-0.06em]">

              Tecnologia
              <br />
              também precisa ser

              <span className="block text-[#5de5f4]">
                acessível.
              </span>

            </h2>

            <p className="mt-7 max-w-[500px] text-base leading-7 text-white/75">
              A evolução do SIPDUS passou a considerar
              não apenas a medição, mas também a maneira
              como diferentes pessoas acessam e
              compreendem as informações.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="rounded-[26px] border border-white/20 bg-white/[0.08] p-7 backdrop-blur-sm transition hover:bg-white/[0.13]"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5de5f4] text-[#087f93]">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {card.text}
                  </p>

                </motion.article>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}