import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const classroomBreadcrumbItems = (_id: string, router: AppRouterInstance) => [
  { text: "Inicio", key: "home", onClick: () => router.push("/") },
  { text: "Centro Educativo", key: "educational-center", onClick: () => router.push("/educational-center") },
  { text: _id, key: "id-educational-center" },
  { text: "Aula", key: "classroom" },
];
