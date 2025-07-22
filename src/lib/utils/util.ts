import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clase",
  description: "Author: Sergio Fernández Cuellar",
  category: "Education",
};

export const sanitizerJSON = (json: string) => {
  const sanitized = json
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
  return JSON.parse(sanitized);
};
