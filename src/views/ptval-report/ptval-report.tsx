"use client";

import { useRouter } from "next/navigation";

import TitleNav from "@/components/title-nav/title-nav";
import { useAnnualPlan } from "@/hooks/useAnnualPlan";

import PTVALStudentData from "./ptval-student-data";

const PTVALReport = () => {
  const router = useRouter();
  const { content } = useAnnualPlan();

  return (
    <>
      <TitleNav
        title="Informe Programación Anual PTVAL"
        onClickNavigateBack={() => router.push("/")}
        isVisibleButtons
      />
      <div className="w-full flex gap-2">
        <PTVALStudentData content={content?.ptval ?? null} />
        <div className="w-full flex flex-col">
          {content &&
            content.ptval.plan.map((item, index) => (
              <div key={index}>{item.contenidos}</div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PTVALReport;
