"use client";
import { useRouter } from "next/navigation";

import TitleNav from "@/lib/components/title-nav/TitleNav";
import { useAppContext } from "@/lib/context/app-context";

import { StudentData } from "./components/student-data/StudentData";
import { SummaryData } from "./components/summary-data/SummaryData";

const AnnualPlanReport = () => {
  const router = useRouter();
  const { educationPlans } = useAppContext();

  return (
    <section>
      <TitleNav title="Informe Programación Anual PTVAL" onClickNavigateBack={() => router.push("/")} isVisibleButtons />
      <div className="w-full flex flex-col md:flex-row print:flex-row gap-2">
        <StudentData content={educationPlans?.ptval?.alumno ?? null} />
        <SummaryData data={educationPlans?.ptval?.plan ?? []} />
      </div>
    </section>
  );
};

export default AnnualPlanReport;
