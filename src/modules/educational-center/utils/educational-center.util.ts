import router from "next/router";

export const breadcrumbItems = [
  { text: "Inicio", key: "home", onClick: () => router.push("/") },
  { text: "Centro Educativo", key: "educational-center" },
];
