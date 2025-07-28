"use client";
import Form from "@/lib/components/form/Form";
import LoadingView from "@/lib/components/loading-view/LoadingView";

import { anualPlanFormFields } from "./fields/annual-plan-form.fields";
import { useAnnualPlanForm } from "./hooks/useAnnualPlanForm";

const AnnualPlanForm = () => {
  const { control, handleSubmit, handleSubmitAnnualPlan, isLoading, reset } = useAnnualPlanForm();

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
        listFields={anualPlanFormFields}
        labelButtonSubmit="Aceptar"
        labelButtonReset="Limpiar"
      />
    </div>
  );
};

export default AnnualPlanForm;
