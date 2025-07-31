"use client";
import { Breadcrumb, Text } from "@fluentui/react";
import { useParams, useRouter } from "next/navigation";

const Classroom = () => {
  const params = useParams();
  const { _id } = params as unknown as { _id: string };

  const router = useRouter();

  const breadcrumbItems = [
    { text: "Inicio", key: "home", onClick: () => router.push("/") },
    { text: "Centro Educativo", key: "educational-center", onClick: () => router.push("/educational-center") },
    { text: _id, key: "id-educational-center" },
    { text: "Aula", key: "classroom" },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} maxDisplayedItems={4} overflowAriaLabel="Más elementos" className="w-full" />
      <Text variant="xLarge">Classroom Page {_id}</Text>;
    </div>
  );
};

export default Classroom;
