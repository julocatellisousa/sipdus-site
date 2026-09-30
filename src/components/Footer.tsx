import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#eef5f6]">
      {/* Detalhes decorativos */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-[#5ddce6]/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          bottom-0
          h-52
          w-52
          rounded-full
          bg-[#e5484d]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* PARTE SUPERIOR */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* MARCA */}
          <div className="max-w-md">
            <div className="mb-5 flex items-center gap-3">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#08aebe]
                  font-bold
                  text-white
                  shadow-lg
                  shadow-cyan-900/10
                "
              >
                S
              </div>

              <span
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-[#172326]
                "
              >
                SIPDUS
              </span>
            </div>

            <p
              className="
                max-w-sm
                text-sm
                leading-7
                text-[#667579]
              "
            >
              Pesquisa e desenvolvimento de uma alternativa
              não invasiva para o monitoramento diário da
              glicemia, com foco em acessibilidade e tecnologia.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:projetosipdus@gmail.com"
              className="
                mt-6
                inline-flex
                items-center
                gap-3
                text-sm
                font-medium
                text-[#172326]
                transition-colors
                hover:text-[#08aebe]
              "
            >
              <Mail size={17} strokeWidth={1.8} />
              projetosipdus@gmail.com
            </a>
          </div>

          {/* NAVEGAÇÃO */}
          <div>
            <h3
              className="
                mb-5
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#172326]
              "
            >
              Explorar
            </h3>

            <nav className="flex flex-col gap-3">
              <a href="#inicio" className="footer-link">
                Início
              </a>

              <a href="#projeto" className="footer-link">
                O projeto
              </a>

              <a href="#tecnologia" className="footer-link">
                Tecnologia
              </a>

              <a href="#pesquisa" className="footer-link">
                Pesquisa
              </a>

              <a href="#equipe" className="footer-link">
                Equipe
              </a>
            </nav>
          </div>

          {/* ACESSIBILIDADE */}
          <div>
            <h3
              className="
                mb-5
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#172326]
              "
            >
              Acessibilidade
            </h3>

            <nav className="flex flex-col gap-3">
              <a href="#acessibilidade" className="footer-link">
                Recursos de acessibilidade
              </a>

              <a href="#acessibilidade" className="footer-link">
                Filtro de cores
              </a>

              <a href="#acessibilidade" className="footer-link">
                Tamanho do texto
              </a>

              <a href="#acessibilidade" className="footer-link">
                Alto contraste
              </a>

              <a href="#acessibilidade" className="footer-link">
                VLibras
              </a>
            </nav>
          </div>

          {/* REDES SOCIAIS */}
          <div>
            <h3
              className="
                mb-5
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#172326]
              "
            >
              Acompanhe
            </h3>

            <div className="flex flex-col gap-3">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/sipdus/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-slate-200
                  bg-white/70
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-[#172326]
                  transition-all
                  hover:-translate-y-0.5
                  hover:border-[#08aebe]/40
                  hover:bg-white
                "
              >
                <span className="flex items-center gap-3">

                  {/* ÍCONE INSTAGRAM */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                    />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.5"
                      fill="currentColor"
                    />
                  </svg>

                  Instagram
                </span>

                <ArrowUpRight
                  size={15}
                  className="
                    opacity-40
                    transition-transform
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/sipdus-glicosímetro-não-invasivo-3091ba389"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-slate-200
                  bg-white/70
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-[#172326]
                  transition-all
                  hover:-translate-y-0.5
                  hover:border-[#08aebe]/40
                  hover:bg-white
                "
              >
                <span className="flex items-center gap-3">

                  {/* ÍCONE LINKEDIN */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"
                    />

                    <rect
                      x="2"
                      y="9"
                      width="4"
                      height="12"
                    />

                    <circle
                      cx="4"
                      cy="4"
                      r="2"
                    />
                  </svg>

                  LinkedIn
                </span>

                <ArrowUpRight
                  size={15}
                  className="
                    opacity-40
                    transition-transform
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>

            </div>
          </div>
        </div>

        {/* LINHA */}
        <div className="my-12 h-px bg-slate-200" />

        {/* AVISO CIENTÍFICO */}
        <div
          className="
            rounded-2xl
            border
            border-cyan-100
            bg-white/60
            px-5
            py-5
            lg:px-6
          "
        >
          <p
            className="
              text-xs
              leading-6
              text-[#667579]
            "
          >
            <strong className="font-semibold text-[#172326]">
              Sobre o SIPDUS:
            </strong>{" "}
            o projeto é um protótipo de pesquisa em
            desenvolvimento. Os resultados apresentados no
            site têm caráter experimental e informativo e não
            substituem métodos clínicos de medição ou
            avaliação profissional.
          </p>
        </div>

        {/* RODAPÉ FINAL */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-4
            text-xs
            text-[#667579]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {currentYear} SIPDUS. Todos os direitos reservados.
          </p>

          <p>
            Pesquisa • Tecnologia • Acessibilidade
          </p>
        </div>
      </div>

      {/* ESTILOS DOS LINKS */}
      <style>{`
        .footer-link {
          width: fit-content;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: #667579;
          transition:
            color 180ms ease,
            transform 180ms ease;
        }

        .footer-link:hover {
          color: #08aebe;
          transform: translateX(3px);
        }
      `}</style>
    </footer>
  );
}