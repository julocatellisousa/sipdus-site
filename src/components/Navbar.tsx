import {
  Menu,
  X,
} from "lucide-react";

import {
  useState,
} from "react";

const links = [
  {
    label: "Início",
    href: "#inicio",
  },
  {
    label: "Projeto",
    href: "#projeto",
  },
  {
    label: "Tecnologia",
    href: "#tecnologia",
  },
  {
    label: "Acessibilidade",
    href: "#acessibilidade",
  },
  {
    label: "Pesquisa",
    href: "#pesquisa",
  },
  {
    label: "Equipe",
    href: "#equipe",
  },
];

export default function Navbar() {
  const [
    open,
    setOpen,
  ] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-[150] w-full border-b border-black/5 bg-white/90 backdrop-blur-xl">

      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-10">

        <a
          href="#inicio"
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#08b9d1] text-sm font-extrabold text-white">
            S
          </div>

          <span className="text-lg font-extrabold tracking-[-0.04em] text-[#102329]">
            SIPDUS
          </span>
        </a>

        {/* DESKTOP */}

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#60777d] transition hover:text-[#08b9d1]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#pergunta"
          className="hidden rounded-full bg-[#102329] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#08b9d1] md:block"
        >
          Conheça a pesquisa
        </a>

        {/* MOBILE */}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1f4f4] text-[#102329] md:hidden"
          aria-label="Abrir menu"
        >
          {open ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white px-6 py-5 md:hidden">

          <div className="grid gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() =>
                  setOpen(false)
                }
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#102329] hover:bg-[#dff7f9]"
              >
                {link.label}
              </a>
            ))}
          </div>

        </nav>
      )}
    </header>
  );
}