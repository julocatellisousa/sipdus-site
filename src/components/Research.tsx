import {
  motion,
} from "motion/react";

const stages = [
  {
    number: "01",
    title: "Investigação",
    text: "Levantamento de referências e estudo de métodos não invasivos relacionados ao monitoramento da glicemia.",
  },
  {
    number: "02",
    title: "Protótipo",
    text: "Desenvolvimento do dispositivo, integração dos componentes eletrônicos e construção da interface.",
  },
  {
    number: "03",
    title: "Coleta",
    text: "Planejamento da obtenção de dados pareados entre os sinais ópticos e medições de referência.",
  },
  {
    number: "04",
    title: "Validação",
    text: "Avaliação experimental da relação entre os dados coletados e as estimativas de glicemia.",
  },
];

export default function Research() {
  return (
    <section
      id="pesquisa"
      className="bg-white px-6 py-28 lg:px-10"
    >

      <div className="mx-auto max-w-[1280px]">

        <div className="mb-16 max-w-[760px]">

          <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#087f93]">
            05 — Pesquisa
          </div>

          <h2 className="text-[clamp(44px,6vw,76px)] font-extrabold leading-[0.92] tracking-[-0.06em] text-[#102329]">

            Uma ideia que precisa
            <span className="block text-[#08b9d1]">
              ser investigada.
            </span>

          </h2>

          <p className="mt-7 text-base leading-7 text-[#60777d]">
            O SIPDUS é um projeto de pesquisa. Por isso,
            o desenvolvimento do protótipo é acompanhado
            por etapas de coleta, processamento e
            validação experimental.
          </p>

        </div>

        <div className="grid gap-4 md:grid-cols-2">

          {stages.map((stage, index) => (
            <motion.article
              key={stage.number}
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
              className="group rounded-[30px] border border-[#dce5e6] bg-[#f1f4f4] p-8 transition hover:border-[#08b9d1] hover:bg-[#eefbfc]"
            >

              <div className="flex items-start justify-between">

                <span className="text-sm font-extrabold text-[#08b9d1]">
                  {stage.number}
                </span>

                {index === 3 && (
                  <span className="rounded-full bg-[#ffe5e7] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#c9323c]">
                    Em estudo
                  </span>
                )}

              </div>

              <h3 className="mt-12 text-2xl font-bold text-[#102329]">
                {stage.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#60777d]">
                {stage.text}
              </p>

            </motion.article>
          ))}

        </div>

        <div className="mt-16 rounded-[30px] bg-[#102329] p-8 text-white md:p-12">

          <div className="max-w-[850px]">

            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#08b9d1]">
              O objetivo da investigação
            </div>

            <p className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.025em] md:text-4xl">
              Procuramos validar se é possível utilizar
              métodos não invasivos no monitoramento
              diário.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}