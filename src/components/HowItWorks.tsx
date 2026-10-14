import { motion } from "motion/react";
import { HeartPulse, ClipboardCheck, GitCompareArrows, ChartNoAxesCombined } from "lucide-react";

const steps = [
  { number: "01", icon: HeartPulse, title: "Sinais obtidos pelo Sipdus", text: "O MAX30102 registra sinais ópticos dos quais o sistema processa estimativas de frequência cardíaca (BPM) e saturação periférica de oxigênio (SpO₂)." },
  { number: "02", icon: ClipboardCheck, title: "Medições de referência", text: "A glicemia de referência é obtida com glicosímetro clínico ou hospitalar validado. Os sinais vitais e as medições precisam ser registrados em condições e horários compatíveis." },
  { number: "03", icon: GitCompareArrows, title: "Pareamento dos registros", text: "Os dados do Sipdus são organizados e pareados com as medições de referência para permitir a análise das relações entre as variáveis coletadas." },
  { number: "04", icon: ChartNoAxesCombined, title: "Calibração e avaliação", text: "A calibração está em andamento. O desempenho da estimativa glicêmica ainda precisa ser avaliado com métricas de erro e dados independentes daqueles utilizados para ajustar o modelo." },
];

export default function HowItWorks() {
  return (
    <section id="metodologia" className="bg-[#102329] px-6 py-24 text-white lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#08b9d1]">03 — Metodologia</div>
            <h2 className="text-[clamp(40px,5.5vw,72px)] font-extrabold leading-[0.95] tracking-[-0.06em]">Da coleta à <span className="block text-[#08b9d1]">investigação.</span></h2>
            <p className="mt-7 max-w-[520px] text-base leading-7 text-white/70">O Sipdus não mede glicose diretamente pelo sensor óptico. A pesquisa verifica se os dados de BPM e SpO₂, combinados com medições glicêmicas de referência, podem sustentar um modelo de estimativa após calibração.</p>
            <div className="mt-7 rounded-2xl border border-[#08b9d1]/30 bg-white/[0.06] p-5">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#5de5f4]">Estado atual</span>
              <p className="mt-2 text-lg font-semibold">Dados coletados • calibração em andamento</p>
              <p className="mt-2 text-sm leading-6 text-white/65">Ainda não afirmamos que a precisão clínica do modelo foi demonstrada.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return <motion.article key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07 }} viewport={{ once: true }} className="rounded-[26px] border border-white/10 bg-white/[0.06] p-6 transition hover:border-[#08b9d1]/50 hover:bg-white/[0.09]">
                <div className="flex items-center justify-between"><span className="text-xs font-extrabold tracking-[0.18em] text-[#5de5f4]">{step.number}</span><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#08b9d1] text-[#102329]"><Icon size={21} /></div></div>
                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{step.text}</p>
              </motion.article>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
