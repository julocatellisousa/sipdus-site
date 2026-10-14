import { motion } from "motion/react";
import { Accessibility, Leaf, ShieldCheck, HeartHandshake } from "lucide-react";

const impacts = [
  { icon: HeartHandshake, title: "Praticidade no dia a dia", text: "A pesquisa busca contribuir para uma experiência de acompanhamento mais confortável, caso a abordagem demonstre desempenho adequado." },
  { icon: Accessibility, title: "Acessibilidade", text: "Recursos de áudio e interação por voz podem ampliar as formas de acesso às informações para pessoas com deficiência visual." },
  { icon: Leaf, title: "Potencial ambiental", text: "Um método óptico que não utilize tiras reagentes ou lancetas em sua operação poderia reduzir o consumo desses descartáveis e os resíduos associados." },
  { icon: ShieldCheck, title: "Uso complementar", text: "O Sipdus é investigado como possível recurso auxiliar. Não substitui glicosímetros ou outros métodos clinicamente validados." },
];

export default function Impact() {
  return (
    <section id="impactos" className="bg-[#f1f4f4] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-[780px]">
          <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#087f93]">06 — Impactos possíveis</div>
          <h2 className="text-[clamp(40px,5.5vw,72px)] font-extrabold leading-[0.95] tracking-[-0.06em] text-[#102329]">Pensar na saúde. <span className="text-[#08b9d1]">Considerar o planeta.</span></h2>
          <p className="mt-6 text-base leading-7 text-[#60777d]">Se a abordagem não invasiva demonstrar precisão, segurança e utilidade, poderá oferecer uma alternativa complementar para o cotidiano. O impacto social e ambiental ainda depende de validação e de estudos sobre o uso real do dispositivo.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {impacts.map((item, index) => { const Icon = item.icon; return <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07 }} viewport={{ once: true }} className="rounded-[26px] border border-[#dce5e6] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff7f9] text-[#087f93]"><Icon size={22} /></div><h3 className="mt-6 text-lg font-bold text-[#102329]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[#60777d]">{item.text}</p></motion.article>; })}
        </div>
        <div className="mt-8 rounded-[26px] border border-[#ef4b55]/20 bg-[#ffe5e7]/60 p-6"><p className="text-sm leading-6 text-[#7f343a]"><strong>Nota científica:</strong> a coleta de BPM e SpO₂ não equivale à medição direta da glicose. Até que a calibração e a validação sejam concluídas, o Sipdus não deve ser usado para decisões de tratamento nem para substituir medições recomendadas por profissionais de saúde.</p></div>
      </div>
    </section>
  );
}
