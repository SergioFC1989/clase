import { Separator, Text } from "@fluentui/react";

import Tag from "@/lib/components/tag/Tag";

import { renderLabelWithDescription } from "../../helpers/annual-plan-report.helper";
import { IStudentData } from "./types/student-data.type";

export const StudentData = ({ content }: IStudentData) => {
  if (!content) return null;

  const descriptionStudent = `${content?.edad} años - ${content?.modalidad} - ${content?.["etapa educativa"]}`;

  return (
    <section className="w-full md:w-1/3 print:w-1/3 h-max flex flex-col p-3">
      <div className="w-full flex flex-col gap-1">
        <Text variant="xLargePlus" className="text-primary-color" title={content?.nombre}>
          {content?.nombre?.toUpperCase()}
        </Text>
        <Text variant="medium">{descriptionStudent}</Text>
        {content?.discapacidad?.length ?
          <article className="flex flex-wrap gap-2">
            {content?.discapacidad.map((elem, index) => (
              <Tag key={index} description={elem} />
            ))}
          </article>
        : null}
        <Separator className="print" />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {renderLabelWithDescription("Psicomotricidad fina", content?.["psicomotricidad fina"])}
            {renderLabelWithDescription("Psicomotricidad gruesa", content?.["psicomotricidad gruesa"])}
            {renderLabelWithDescription("Coeficiente intelectual", content?.["coeficiente intelectual"])}
            {renderLabelWithDescription("Intencionalidad comunicativa", content?.["intencionalidad comunicativa"])}
            {renderLabelWithDescription("Comunicación escrita", content?.["comunicacion escrita"])}
            {renderLabelWithDescription("Comunicación verbal", content?.["comunicacion verbal"])}
            {renderLabelWithDescription("Observaciones", content?.observaciones || "N/A")}
          </div>
        </div>
      </div>
    </section>
  );
};
