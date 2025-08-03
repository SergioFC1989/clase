"use client";
import { Breadcrumb } from "@fluentui/react";
import { useParams, useRouter } from "next/navigation";

import { studentsBreadcrumbItems } from "./utils/students.util";

const Students = () => {
  const router = useRouter();
  const params = useParams();
  const { classroomId, educationalCenterId } = params as unknown as { classroomId: string; educationalCenterId: string };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex sm:flex-row flex-col justify-between gap-2">
        <Breadcrumb
          items={studentsBreadcrumbItems(educationalCenterId, classroomId, router)}
          overflowAriaLabel="Más elementos"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Students;
