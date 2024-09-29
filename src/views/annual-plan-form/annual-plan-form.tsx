"use client";

import { DefaultButton, Separator, Spinner, Text } from "@fluentui/react";
import Markdown from "marked-react";

import Form from "@/components/form/form";

import { AnualPlanFormFields } from "./data";
import { useAnnualPlan } from "./useAnnualPlan";

const AnnualPlanForm = () => {
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
      <>
        <Text variant="xLarge" className="text-base sm:text-lg">
          Por favor, espere...
        </Text>
        <Separator />
        <Spinner
          className="flex justify-start items-start"
          label="Generando programación anual invidualizada..."
          ariaLive="assertive"
          labelPosition="right"
        />
      </>
    );
  }

  if (!isLoading && content) {
    return (
      <>
        <Text variant="xLarge" className="text-base sm:text-lg">
          Informe Programación Anual Individualizado
        </Text>
        <Separator />
        <section className="flex flex-col gap-4">
          <Markdown value={content} />
          <div className="w-full flex justify-center">
            <DefaultButton
              className="my-4 w-3/4 lg:w-2/4 items-center"
              onClick={() => onChangeContent("")}
            >
              Volver al formulario
            </DefaultButton>
          </div>
        </section>
      </>
    );
  }

  return (
    <div className="w-full xl:w-1/2 flex flex-col">
      <Text variant="xLarge" className="text-base sm:text-lg">
        Programación Anual Individualizado
      </Text>
      <Separator />
      <Form
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

export default AnnualPlanForm;
