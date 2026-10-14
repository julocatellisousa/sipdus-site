import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, HeartPulse, Droplets } from "lucide-react";
import Device3D from "./Device3D";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#f1f4f4] pt-[72px]">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-[1400px] items-center gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
          <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#087f93]">
            <span className="h-2 w-2 rounded-full bg-[#ef4b55]" /> Pesquisa • Tecnologia • Acessibilidade
          </div>
          <h1 className="max-w-[700px] text-[clamp(48px,6.4vw,86px)] font-extrabold leading-[0.94] tracking-[-0.065em] text-[#102329]">
            Entender a glicemia também é <span className="text-[#08b9d1]">cuidar.</span>
          </h1>
          <p className="mt-8 max-w-[600px] text-base leading-7 text-[#60777d] lg:text-lg">
            O diabetes mellitus é uma condição crônica em que a glicose no sangue permanece elevada. Seu acompanhamento é importante para orientar os cuidados com a saúde. O Sipdus investiga se sinais ópticos podem contribuir para uma forma complementar e não invasiva de acompanhar a glicemia no dia a dia.
          </p>
          <div className="mt-7 grid max-w-[590px] gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#08b9d1]/20 bg-white/80 p-4">
              <HeartPulse className="mb-3 text-[#087f93]" size={22} />
              <h2 className="font-bold text-[#102329]">Acompanhamento</h2>
              <p className="mt-1 text-sm leading-6 text-[#60777d]">O monitoramento ajuda a compreender as variações da glicose e apoiar o cuidado contínuo.</p>
            </div>
            <div className="rounded-2xl border border-[#ef4b55]/20 bg-white/80 p-4">
              <Droplets className="mb-3 text-[#c9323c]" size={22} />
              <h2 className="font-bold text-[#102329]">Desafio atual</h2>
              <p className="mt-1 text-sm leading-6 text-[#60777d]">Investigar alternativas que possam reduzir a necessidade de punções, sem comprometer a segurança.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pergunta" className="inline-flex items-center gap-2 rounded-full bg-[#102329] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#087f93]">Conheça nossa pergunta <ArrowUpRight size={17} /></a>
            <a href="#metodologia" className="inline-flex items-center gap-2 rounded-full border border-[#102329]/15 bg-white px-6 py-3.5 text-sm font-bold text-[#102329] transition hover:border-[#08b9d1] hover:text-[#087f93]">Como pesquisamos</a>
          </div>
          <div className="mt-10 hidden items-center gap-3 text-xs font-semibold text-[#60777d] lg:flex"><ArrowDown size={16} /> Role para explorar</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
          <div className="absolute right-[8%] top-[8%] h-24 w-24 rounded-full bg-[#ef4b55] opacity-70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[40px] border border-[#08b9d1]/20 bg-[#dff7f9]">
            <Device3D />
          </div>
          <p className="mt-3 text-center text-xs text-[#60777d]">Protótipo em desenvolvimento • modelo 3D interativo</p>
        </motion.div>
      </div>
      <div className="h-2 bg-[#08b9d1]" />
    </section>
  );
}
