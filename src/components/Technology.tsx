import {
  motion,
} from "motion/react";

import {
  Cpu,
  HeartPulse,
  Bluetooth,
  Smartphone,
} from "lucide-react";

const technologies = [
  {
    icon: HeartPulse,
    title: "MAX30102",
    text: "Sensor óptico utilizado para obtenção de dados de frequência cardíaca e oximetria.",
  },
  {
    icon: Cpu,
    title: "ESP32",
    text: "Microcontrolador responsável pelo processamento e comunicação dos dados do protótipo.",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth",
    text: "Comunicação sem fio entre o dispositivo e o aplicativo.",
  },
  {
    icon: Smartphone,
    title: "Aplicativo",
    text: "Interface para apresentação e acompanhamento das informações coletadas.",
  },
];

export default function Technology() {
  return (
    <section
      id="tecnologia"
      className="bg-[#f1f4f4] px-6 py-28 lg:px-10"
    >

      <div className="mx-auto max-w-[1280px]">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#087f93]">
              03 — Tecnologia
            </div>

            <h2 className="text-[clamp(44px,6vw,76px)] font-extrabold leading-[0.92] tracking-[-0.06em] text-[#102329]">

              Componentes que
              <span className="block text-[#08b9d1]">
                fazem a diferença.
              </span>

            </h2>

            <p className="mt-7 max-w-[500px] text-base leading-7 text-[#60777d]">
              O protótipo reúne componentes eletrônicos,
              sensores ópticos e software em uma única
              proposta de pesquisa.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {technologies.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
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
                  className="rounded-[28px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff7f9] text-[#087f93]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#102329]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#60777d]">
                    {item.text}
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