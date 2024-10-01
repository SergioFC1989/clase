import { Text } from "@fluentui/react";

import { ResponseAnnualPlanProps } from "@/utils/types";

import Tag from "@/components/tag/tag";

interface PTVALStudentDataProps {
  content: ResponseAnnualPlanProps["ptval"] | null;
}

const renderLabelWithDescription = (label: string, description?: string) => (
  <div className="flex flex-col gap-1">
    <Text variant="medium" className=" font-bold">
      {label}
    </Text>
    <Text variant="medium">{description}</Text>
  </div>
);

const PTVALStudentData = ({ content }: PTVALStudentDataProps) => {
  const descriptionStudent = `${content?.alumno.edad} años - ${content?.alumno.modalidad} - ${content?.alumno["etapa educativa"]}`;

  return (
    <section className="w-full md:w-1/3 print:w-1/3 h-max flex flex-col p-3 rounded-xl print bg-gray-50">
      <div className="w-full flex flex-col gap-1">
        <Text variant="xLargePlus" title={content?.alumno.nombre}>
          {content?.alumno.nombre}
        </Text>
        <Text variant="medium">{descriptionStudent}</Text>
        {content?.alumno.discapacidad?.length ? (
          <article className="flex flex-wrap gap-2">
            {content?.alumno.discapacidad.map((elem, index) => (
              <Tag key={index} description={elem} />
            ))}
          </article>
        ) : null}
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex flex-col gap-4">
            {renderLabelWithDescription(
              "Psicomotricidad fina",
              content?.alumno["psicomotricidad fina"]
            )}
            {renderLabelWithDescription(
              "Psicomotricidad gruesa",
              content?.alumno["psicomotricidad gruesa"]
            )}
            {renderLabelWithDescription(
              "Coeficiente intelectual",
              content?.alumno["coeficiente intelectual"]
            )}
            {renderLabelWithDescription(
              "Intencionalidad comunicativa",
              content?.alumno["intencionalidad comunicativa"]
            )}
            {renderLabelWithDescription(
              "Comunicación escrita",
              content?.alumno["comunicacion escrita"]
            )}
            {renderLabelWithDescription(
              "Comunicación verbal",
              content?.alumno["comunicacion verbal"]
            )}
            {renderLabelWithDescription(
              "Observaciones",
              content?.alumno.observaciones ?? "N/A"
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PTVALStudentData;
