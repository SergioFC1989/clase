import { Separator, Text } from "@fluentui/react";

import { renderLabelWithDescription } from "../../helpers/annual-plan-report.helper";
import { ISummaryData } from "./types/summary-data.type";

export const SummaryData = ({ data }: ISummaryData) => {
  if (!data.length) return null;

  return (
    <div className="w-full flex flex-col px-3 gap-8">
      {data.map((info, index) => (
        <div key={index} className="flex flex-col print p-2 rounded-xl bg-gray-50">
          {/* Información del ámbito */}
          <div className="flex flex-col">
            <Text variant="xLargePlus">{info.ambito}</Text>
            <Text variant="medium">{info.horas} horas semanales</Text>
            <Text variant="mediumPlus" className="font-thin">
              {info.contenidos}
            </Text>
            <Separator className="print" />
          </div>

          {/* Actividades */}
          <div className="flex flex-col gap-10">
            {info.actividades.map((act, index) => (
              <div key={index} className="flex flex-col gap-2">
                <Text variant="large" className="text-gray-600">
                  {act.nombre}
                </Text>
                {renderLabelWithDescription("Objetivo", act.descripcion)}
                {renderLabelWithDescription("Evaluación", act.evaluacion)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
