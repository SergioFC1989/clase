"use client";

import Form from "@/components/form/form";
import LoadingView from "@/components/loading-view/loading-view";

import { useAnnualPlan } from "@/hooks/useAnnualPlan";

import { AnualPlanFormFields } from "./data";

const AnnualFormPlan = () => {
  const { handleSubmit, control, reset, onSubmit, isLoading } = useAnnualPlan();

  if (isLoading) {
    return (
      <LoadingView
        title="Por favor, espere..."
        message="Generando programación anual individualizado..."
      />
    );
  }

  return (
    <div className="w-full xl:w-1/2 flex flex-col">
      <Form
        title="Programación Anual Individualizado"
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
