/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        s: "412px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "primary-color": "#28a88f",
      },
    },
  },
  plugins: [
    function ({ addComponents }: { addComponents: (components: Record<string, any>) => void }) {
      const newComponents = {
        ".text-ellipsis-custom": {
          "@apply text-ellipsis overflow-hidden whitespace-nowrap": {},
        },
      };

      addComponents(newComponents);
    },
    function ({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<string, any>,
        options?: {
          variants?: string[];
          respectPrefix?: boolean;
          respectImportant?: boolean;
        },
      ) => void;
    }) {
      const printUtilities = {
        "@media print": {
          ".print": {
            "-webkit-print-color-adjust": "exact",
            "print-color-adjust": "exact",
          },
        },
      };

      addUtilities(printUtilities);
    },
  ],
};
export default config;
