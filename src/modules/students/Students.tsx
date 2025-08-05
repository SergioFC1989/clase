"use client";
import { Breadcrumb } from "@fluentui/react";
import { useParams, useRouter } from "next/navigation";

import { EntityEmptyState } from "@/lib/features/entity-empty-state/EntityEmptyState";

import { AddSingleStudent } from "../add-single-student/AddSingleStudent";
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
        <div className="flex">
          <AddSingleStudent classroomId={classroomId} educationalCenterId={educationalCenterId} />
        </div>
      </div>
      <EntityEmptyState
        iconName="AccountManagement"
        subtitle="Aún no tienes un Estudiante registrado. Crea uno para comenzar a gestionar los informes individualizados anuales"
        title="No hay Estudiante creado"
      />
    </div>
  );
};

export default Students;
