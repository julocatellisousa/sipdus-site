import {
  useEffect,
  useState,
} from "react";

export type ColorVisionMode =
  | "typical"
  | "protanopia"
  | "deuteranopia"
  | "tritanopia";

export type FontSizeLevel =
  | -3
  | -2
  | -1
  | 0
  | 1
  | 2
  | 3
  | 4;

const FONT_SIZES: Record<
  FontSizeLevel,
  number
> = {
  [-3]: 0.82,
  [-2]: 0.88,
  [-1]: 0.94,
  [0]: 1,
  [1]: 1.08,
  [2]: 1.16,
  [3]: 1.25,
  [4]: 1.35,
};

export function useAccessibility() {
  const [
    colorVision,
    setColorVision,
  ] = useState<ColorVisionMode>("typical");

  const [
    highContrast,
    setHighContrast,
  ] = useState(false);

  const [
    fontSize,
    setFontSize,
  ] = useState<FontSizeLevel>(0);

  useEffect(() => {
    const body = document.body;

    body.classList.remove(
      "protanopia",
      "deuteranopia",
      "tritanopia"
    );

    if (colorVision !== "typical") {
      body.classList.add(colorVision);
    }

    body.classList.toggle(
      "high-contrast",
      highContrast
    );

    body.style.setProperty(
      "--font-scale",
      String(FONT_SIZES[fontSize])
    );

    body.setAttribute(
      "data-font-size",
      String(fontSize)
    );

    return () => {
      body.classList.remove(
        "protanopia",
        "deuteranopia",
        "tritanopia",
        "high-contrast"
      );

      body.style.removeProperty(
        "--font-scale"
      );

      body.removeAttribute(
        "data-font-size"
      );
    };
  }, [
    colorVision,
    highContrast,
    fontSize,
  ]);

  function increaseFont() {
    setFontSize((current) => {
      if (current >= 4) return current;

      return (current + 1) as FontSizeLevel;
    });
  }

  function decreaseFont() {
    setFontSize((current) => {
      if (current <= -3) return current;

      return (current - 1) as FontSizeLevel;
    });
  }

  function resetFont() {
    setFontSize(0);
  }

  function resetAccessibility() {
    setColorVision("typical");
    setHighContrast(false);
    setFontSize(0);
  }

  return {
    colorVision,
    setColorVision,

    highContrast,
    setHighContrast,

    fontSize,

    increaseFont,
    decreaseFont,
    resetFont,

    resetAccessibility,
  };
}