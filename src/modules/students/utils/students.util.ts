import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { classroomBreadcrumbItems } from "@/modules/classroom/utils/classroom.util";

export const studentsBreadcrumbItems = (educationalCenterId: string, classroomId: string, router: AppRouterInstance) => [
  ...classroomBreadcrumbItems(educationalCenterId, router),
  { text: educationalCenterId, key: "classroom-id" },
  {
    text: "Estudiantes",
    key: "students",
    onClick: () => router.push(`/educational-center/${educationalCenterId}/classroom/${classroomId}/students`),
  },
];
