"use client";

import { useRouter } from "next/navigation";

import TitleNav from "@/components/title-nav/title-nav";
import { useAnnualPlan } from "@/hooks/useAnnualPlan";

import PTVALStudentData from "./ptval-student-data";
import { Separator, Text } from "@fluentui/react";

const PTVALReport = () => {
  const router = useRouter();
  const { content } = useAnnualPlan();
  console.log(content);
  return (
    <>
      <TitleNav
        title="Informe Programación Anual PTVAL"
        onClickNavigateBack={() => router.push("/")}
        isVisibleButtons
      />
      <div className="w-full flex flex-col md:flex-row print:flex-row gap-2">
        <PTVALStudentData content={content?.ptval ?? null} />
        <div className="w-full flex flex-col p-3 gap-8">
          {content?.ptval &&
            content.ptval.plan.map((item, index) => (
              <>
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <Text variant="xLargePlus">{item.ambito}</Text>
                    <Text variant="smallPlus">
                      {item.horas} horas semanales
                    </Text>
                  </div>
                  <div className="flex flex-col">
                    <Text variant="mediumPlus" className="font-bold">
                      Contenido
                    </Text>
                    <Text variant="medium">{item.contenidos}</Text>
                  </div>
                  <div className="flex flex-col">
                    <Text variant="mediumPlus" className="font-bold">
                      Evaluación general
                    </Text>
                    <Text variant="medium">{item.evaluacion_general}</Text>
                  </div>
                  <div className="flex flex-col gap-4 p-2 rounded-xl bg-gray-50 print">
                    <Text variant="large" className="font-bold">
                      Actividades
                    </Text>
                    <div className="flex flex-col gap-8">
                      {item.actividades.map((actividad, index) => (
                        <div key={index} className="flex flex-col gap-1">
                          <Text variant="large">{actividad.nombre}</Text>
                          <Text variant="medium" className="font-bold">
                            Objetivo
                          </Text>
                          <Text variant="medium">{actividad.descripcion}</Text>
                          <Text variant="medium" className="font-bold">
                            Evaluación
                          </Text>
                          <Text variant="medium">{actividad.evaluacion}</Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <Separator className="print" />
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default PTVALReport;
