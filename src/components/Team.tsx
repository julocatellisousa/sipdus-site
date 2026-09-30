import {
  motion,
} from "motion/react";

const members = [
  {
    name: "Giovana Gomes",
    role: "Aplicativo e programação",
  },
  {
    name: "Julia Rodrigues",
    role: "Prototipagem do dispositivo",
  },
  {
    name: "Julia Locatelli",
    role: "Calibração e processamento de dados",
  },
];

export default function Team() {
  return (
    <section
      id="equipe"
      className="bg-[#f1f4f4] px-6 py-28 lg:px-10"
    >

      <div className="mx-auto max-w-[1280px]">

        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#087f93]">
              06 — Equipe
            </div>

            <h2 className="text-[clamp(44px,6vw,76px)] font-extrabold leading-[0.92] tracking-[-0.06em] text-[#102329]">

              Pessoas por trás
              <span className="block text-[#08b9d1]">
                da pesquisa.
              </span>

            </h2>

          </div>

          <div className="grid gap-4">

            {members.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className="flex items-center justify-between rounded-[26px] bg-white p-6"
              >

                <div>
                  <h3 className="text-lg font-bold text-[#102329]">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm text-[#60777d]">
                    {member.role}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dff7f9] text-sm font-extrabold text-[#087f93]">
                  {String(index + 1).padStart(2, "0")}
                </div>

              </motion.article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}