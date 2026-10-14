import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  HeartPulse,
  Mic,
  Volume2,
  ArrowRight,
} from "lucide-react";

const technologies = [
  {
    name: "ESP32 com tela LVGL",
    description:
      "Microcontrolador responsável pelo controle do dispositivo e pela apresentação das informações na tela.",
    image: "/images/components/esp32-lvgl.png",
    icon: Cpu,
  },
  {
    name: "Sensor MAX30102",
    description:
      "Sensor óptico utilizado para coletar sinais relacionados à frequência cardíaca e à saturação de oxigênio.",
    image: "/images/components/max30102.png",
    icon: HeartPulse,
  },
  {
    name: "Módulo de microfone GY-MAX4466",
    description:
      "Permite captar a voz do usuário para possibilitar interações por comando de voz.",
    image: "/images/components/gy-max4466.png",
    icon: Mic,
  },
  {
    name: "Alto-falante",
    description:
      "Permite emitir respostas sonoras e fornecer retorno por áudio, contribuindo para a acessibilidade.",
    image: "/images/components/alto-falante.png",
    icon: Volume2,
  },
];

function ComponentVisual({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex h-52 w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-50 p-5">
      {!imageError ? (
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex flex-col items-center gap-3 text-center text-slate-400">
          <Cpu size={40} strokeWidth={1.5} />
          <span className="text-sm">
            Imagem não encontrada
          </span>
          <span className="text-xs">
            Verifique o nome e a pasta do arquivo
          </span>
        </div>
      )}
    </div>
  );
}

export default function Technology() {
  return (
    <section
      id="tecnologia"
      className="relative overflow-hidden bg-white px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            <Cpu size={16} />
            Tecnologia Sipdus
          </span>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Conheça os componentes do nosso protótipo
          </h2>

          <p className="text-base leading-7 text-slate-600 md:text-lg">
            O Sipdus integra componentes eletrônicos para coletar
            sinais ópticos, processar informações e explorar formas
            mais acessíveis de interação com o dispositivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <motion.article
                key={technology.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                className="group rounded-3xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <ComponentVisual
                  image={technology.image}
                  name={technology.name}
                />

                <div className="px-2 pb-3 pt-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    <Icon size={22} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-slate-900">
                    {technology.name}
                  </h3>

                  <p className="text-sm leading-6 text-slate-600">
                    {technology.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-700">
                    <span>Componente do protótipo</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-8 text-sm leading-6 text-slate-500">
          O protótipo está em desenvolvimento. A estimativa de glicemia
          depende da calibração e da validação dos dados coletados;
          os sinais de frequência cardíaca e SpO₂ não medem a glicose
          diretamente.
        </p>
      </div>
    </section>
  );
}