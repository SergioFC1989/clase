import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const breadcrumbItems = (router: AppRouterInstance) => [
  { text: "Inicio", key: "home", onClick: () => router.push("/") },
  { text: "Centro Educativo", key: "educational-center" },
];
