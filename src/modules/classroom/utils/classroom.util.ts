import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { educationalCenterBreadcrumbItems } from "@/modules/educational-center/utils/educational-center.util";

export const classroomBreadcrumbItems = (educationalCenterId: string, router: AppRouterInstance) => [
  ...educationalCenterBreadcrumbItems(router),
  { text: educationalCenterId, key: "educational-center-id" },
  { text: "Aula", key: "classroom", onClick: () => router.push(`/educational-center/${educationalCenterId}/classroom`) },
];
