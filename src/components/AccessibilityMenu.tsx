import {
  Accessibility as AccessibilityIcon,
  Minus,
  Plus,
  RotateCcw,
  Eye,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

type ColorVisionMode =
  | "typical"
  | "protanopia"
  | "deuteranopia"
  | "tritanopia";

type FontSizeLevel = -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;

const FONT_SCALE: Record<FontSizeLevel, number> = {
  [-3]: 0.82,
  [-2]: 0.88,
  [-1]: 0.94,
  [0]: 1,
  [1]: 1.08,
  [2]: 1.16,
  [3]: 1.25,
  [4]: 1.35,
};

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const [colorVision, setColorVision] =
    useState<ColorVisionMode>("typical");

  const [fontSize, setFontSize] =
    useState<FontSizeLevel>(0);

  const menuRef = useRef<HTMLDivElement>(null);

  /*
   * ----------------------------------------------------
   * APLICA O TAMANHO DA FONTE
   * ----------------------------------------------------
   */

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--font-scale",
      String(FONT_SCALE[fontSize])
    );
  }, [fontSize]);

  /*
   * ----------------------------------------------------
   * APLICA O MODO DE PERCEPÇÃO DAS CORES
   * ----------------------------------------------------
   */

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(
      "protanopia",
      "deuteranopia",
      "tritanopia"
    );

    if (colorVision !== "typical") {
      root.classList.add(colorVision);
    }
  }, [colorVision]);

  /*
   * ----------------------------------------------------
   * FECHAR AO CLICAR FORA
   * ----------------------------------------------------
   */

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [isOpen]);

  /*
   * ----------------------------------------------------
   * TAMANHO DA FONTE
   * ----------------------------------------------------
   */

  function increaseFont() {
    setFontSize((current) => {
      if (current >= 4) return 4;

      return (current + 1) as FontSizeLevel;
    });
  }

  function decreaseFont() {
    setFontSize((current) => {
      if (current <= -3) return -3;

      return (current - 1) as FontSizeLevel;
    });
  }

  function resetFont() {
    setFontSize(0);
  }

  /*
   * ----------------------------------------------------
   * RESET
   * ----------------------------------------------------
   */

  function resetAccessibility() {
    setColorVision("typical");
    setFontSize(0);

    document.documentElement.classList.remove(
      "protanopia",
      "deuteranopia",
      "tritanopia"
    );
  }

  /*
   * ----------------------------------------------------
   * MODOS DE DALTONISMO
   * ----------------------------------------------------
   */

  const colorModes: {
    value: ColorVisionMode;
    label: string;
  }[] = [
    {
      value: "typical",
      label: "Visão típica",
    },
    {
      value: "protanopia",
      label: "Protanopia",
    },
    {
      value: "deuteranopia",
      label: "Deuteranopia",
    },
    {
      value: "tritanopia",
      label: "Tritanopia",
    },
  ];

  /*
   * ----------------------------------------------------
   * TEXTO DO TAMANHO
   * ----------------------------------------------------
   */

  const fontSizeLabel =
    fontSize > 0 ? `+${fontSize}` : `${fontSize}`;

  return (
    <div
      ref={menuRef}
      className="fixed bottom-5 right-5 z-[200]"
    >
      {/* BOTÃO PRINCIPAL */}
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#102329]
          text-white
          shadow-xl
          transition
          hover:bg-[#08b9d1]
          focus:outline-none
          focus:ring-4
          focus:ring-[#08b9d1]/30
        "
        aria-label={
          isOpen
            ? "Fechar opções de acessibilidade"
            : "Abrir opções de acessibilidade"
        }
        aria-expanded={isOpen}
      >
        <AccessibilityIcon size={23} />
      </button>

      {/* PAINEL */}
      {isOpen && (
        <div
          className="
            absolute
            bottom-16
            right-0
            w-[330px]
            max-w-[calc(100vw-32px)]
            rounded-[24px]
            border
            border-black/10
            bg-white
            p-5
            text-[#102329]
            shadow-2xl
          "
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {/* CABEÇALHO */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-[#102329]">
                Acessibilidade
              </p>

              <p className="mt-1 text-xs text-[#60777d]">
                Personalize sua experiência.
              </p>
            </div>

            <Eye
              size={19}
              className="text-[#08b9d1]"
            />
          </div>

          {/* CORES */}
          <div className="mt-6">
            <p
              className="
                mb-2
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-[#60777d]
              "
            >
              Percepção das cores
            </p>

            <div className="grid gap-1.5">
              {colorModes.map((mode) => (
                <button
                  key={mode.value}
                  type="button"
                  onClick={() =>
                    setColorVision(mode.value)
                  }
                  className={`
                    rounded-xl
                    px-3
                    py-2.5
                    text-left
                    text-sm
                    transition
                    ${
                      colorVision === mode.value
                        ? "bg-[#dff7f9] font-bold text-[#087f93]"
                        : "hover:bg-[#f1f4f4]"
                    }
                  `}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          {/* TAMANHO DO TEXTO */}
          <div className="mt-6">
            <p
              className="
                mb-2
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-[#60777d]
              "
            >
              Tamanho do texto
            </p>

            <div className="grid grid-cols-[44px_1fr_44px] gap-2">
              {/* DIMINUIR */}
              <button
                type="button"
                onClick={decreaseFont}
                disabled={fontSize <= -3}
                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#f1f4f4]
                  text-[#102329]
                  transition
                  hover:bg-[#dff7f9]
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
                aria-label="Diminuir tamanho do texto"
              >
                <Minus size={17} />
              </button>

              {/* NÍVEL ATUAL */}
              <button
                type="button"
                onClick={resetFont}
                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#102329]
                  text-base
                  font-bold
                  text-white
                  transition
                  hover:bg-[#08b9d1]
                "
                aria-label="Restaurar tamanho padrão"
              >
                {fontSizeLabel}
              </button>

              {/* AUMENTAR */}
              <button
                type="button"
                onClick={increaseFont}
                disabled={fontSize >= 4}
                className="
                  flex
                  h-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#f1f4f4]
                  text-[#102329]
                  transition
                  hover:bg-[#dff7f9]
                  disabled:cursor-not-allowed
                  disabled:opacity-30
                "
                aria-label="Aumentar tamanho do texto"
              >
                <Plus size={17} />
              </button>
            </div>
          </div>

          {/* RESET */}
          <button
            type="button"
            onClick={resetAccessibility}
            className="
              mt-5
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-black/10
              py-2.5
              text-xs
              font-semibold
              text-[#102329]
              transition
              hover:bg-[#f1f4f4]
            "
          >
            <RotateCcw size={14} />

            Restaurar acessibilidade
          </button>
        </div>
      )}
    </div>
  );
}