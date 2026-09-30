import {
  useEffect,
} from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (options: {
        rootPath: string;
        personalization?: string;
        avatar?: string;
        position?: string;
      }) => unknown;
    };
  }
}

export default function VLibras() {
  useEffect(() => {
    const existingScript =
      document.querySelector(
        'script[src="https://vlibras.gov.br/app/vlibras-plugin.js"]'
      );

    if (existingScript) {
      initializeVLibras();
      return;
    }

    const script =
      document.createElement("script");

    script.src =
      "https://vlibras.gov.br/app/vlibras-plugin.js";

    script.async = true;

    script.onload = () => {
      initializeVLibras();
    };

    document.body.appendChild(script);

    function initializeVLibras() {
      if (
        window.VLibras &&
        window.VLibras.Widget
      ) {
        new window.VLibras.Widget({
          rootPath:
            "https://vlibras.gov.br/app",
          personalization:
            "https://vlibras.gov.br/config/default_logo.json",
          avatar: "random",
          position: "R",
        });
      }
    }

    return () => {
      // O widget é mantido pelo script oficial.
    };
  }, []);

  return null;
}