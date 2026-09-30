import {
  motion,
} from "motion/react";

import {
  HeartPulse,
  Droplets,
  Activity,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: HeartPulse,
    title: "Sinais ópticos",
    text: "O sensor MAX30102 coleta sinais ópticos associados à frequência cardíaca e à oximetria.",
  },
  {
    number: "02",
    icon: Activity,
    title: "Processamento",
    text: "Os dados obtidos são processados para identificar relações entre os sinais e as medições de referência.",
  },
  {
    number: "03",
    icon: Droplets,
    title: "Estimativa em estudo",
    text: "A pesquisa investiga se esses dados podem contribuir para estimativas de glicemia após calibração e validação.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="projeto"
      className="bg-[#102329] px-6 py-28 text-white lg:px-10"
    >

      <div className="mx-auto max-w-[1280px]">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#08b9d1]">
              02 — O projeto
            </div>

            <h2 className="text-[clamp(44px,6vw,76px)] font-extrabold leading-[0.92] tracking-[-0.06em]">
              Da luz aos
              <span className="block text-[#08b9d1]">
                dados.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-base leading-7 text-white/65">
              O SIPDUS pesquisa a utilização de sinais
              ópticos como parte de uma abordagem não
              invasiva para o acompanhamento da glicemia.
            </p>
          </div>

          <div className="grid gap-4">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="group rounded-[28px] border border-white/10 bg-white/[0.06] p-7 transition hover:border-[#08b9d1]/50 hover:bg-white/[0.09]"
                >

                  <div className="flex gap-6">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#08b9d1] text-[#102329]">
                      <Icon size={21} />
                    </div>

                    <div>

                      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#08b9d1]">
                        {step.number}
                      </div>

                      <h3 className="text-xl font-bold">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/60">
                        {step.text}
                      </p>

                    </div>

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}