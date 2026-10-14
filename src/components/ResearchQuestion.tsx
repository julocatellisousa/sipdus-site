import { motion } from "motion/react";

export default function ResearchQuestion() {
  return (
    <section id="pergunta" className="bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="relative overflow-hidden rounded-[36px] border border-[#08b9d1]/20 bg-[#eefbfc] px-6 py-16 text-center md:px-20 md:py-20">
          <div className="absolute left-8 top-8 h-3 w-3 rounded-full bg-[#ef4b55]" />
          <div className="absolute bottom-8 right-8 h-16 w-16 rounded-full border border-[#08b9d1]/30" />
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087f93]">Nossa pergunta motivadora</div>
          <h2 className="mx-auto mt-8 max-w-[1050px] text-[clamp(38px,5.5vw,74px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#102329]">É possível utilizar métodos não invasivos no monitoramento diário da <span className="text-[#08b9d1]">glicemia?</span></h2>
          <p className="mx-auto mt-8 max-w-[760px] text-base leading-7 text-[#60777d]">Essa pergunta orienta todas as etapas do Sipdus. Para investigá-la, comparamos sinais obtidos pelo protótipo com medições de referência e estudamos se os dados permitem desenvolver uma estimativa confiável.</p>
          <p className="mx-auto mt-4 max-w-[760px] text-sm leading-6 text-[#60777d]">A pesquisa ainda está em fase de calibração. A pergunta permanece em investigação, e não é apresentada como uma capacidade clínica já comprovada.</p>
        </motion.div>
      </div>
    </section>
  );
}
