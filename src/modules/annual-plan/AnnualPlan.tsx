"use client";
import Form from "@/lib/components/form/Form";
import LoadingView from "@/lib/components/loading-view/LoadingView";

import { anualFormPlanFields } from "./fields/annual-plan.fields";
import { useAnnualPlan } from "./hooks/useAnnualPlan";

const AnnualPlan = () => {
  const { handleSubmit, control, reset, handleSubmitAnnualPlan, isLoading } = useAnnualPlan();

  if (isLoading) {
    return <LoadingView title="Por favor, espere..." message="Generando programación anual individualizado..." />;
  }

  return (
    <div className="w-full xl:w-1/2 flex flex-col">
      <Form
        title="Programación Anual Individualizado"
        control={control}
        reset={reset}
        handleSubmit={handleSubmit}
        onSubmit={handleSubmitAnnualPlan}
        listFields={anualFormPlanFields}
        labelButtonSubmit="Aceptar"
        labelButtonReset="Limpiar"
      />
    </div>
  );
};

export default AnnualPlan;
