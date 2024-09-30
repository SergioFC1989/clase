"use client";

import Form from "@/components/form/form";
import LoadingView from "@/components/loading-view/loading-view";
import ReportSection from "@/components/report-section/report-section";

import { useAnnualPlan } from "@/hooks/useAnnualPlan";

import { AnualPlanFormFields } from "./data";

const AnnualFormPlan = () => {
  const {
    handleSubmit,
    control,
    reset,
    onSubmit,
    content,
    onChangeContent,
    isLoading,
  } = useAnnualPlan();

  if (isLoading) {
    return (
      <LoadingView
        title="Por favor, espere..."
        message="Generando programación anual invidualizada..."
      />
    );
  }

  if (!isLoading && content) {
    return (
      <ReportSection
        title="Informe Programación Anual Individualizado"
        content={content}
        onClickNavigateBack={() => onChangeContent("")}
      />
    );
  }

  return (
    <div className="w-full xl:w-1/2 flex flex-col">
      <Form
        title="Programación Anual Individualizada"
        control={control}
        reset={reset}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        listFields={AnualPlanFormFields}
        labelButtonSubmit="Aceptar"
        labelButtonReset="Limpiar"
      />
    </div>
  );
};

export default AnnualFormPlan;
