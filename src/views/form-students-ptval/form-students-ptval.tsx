"use client";

import { DefaultButton, Separator, Spinner, Text } from "@fluentui/react";
import Markdown from "marked-react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { defaultValuesPTVAL, formFieldsPTVAL } from "./data";

import Form from "@/components/form/form";

import { generateAnnualPlan } from "@/prompts/generate-ptval-plan";

import { fetcher } from "@/utils/fetcher";

const FormStudentsPtval = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: defaultValuesPTVAL,
  });
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      const response = await fetcher("/api/gemini/generate-content", "POST", {
        prompt: generateAnnualPlan(data),
      });
      setContent(response.content);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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
              onClick={() => setContent("")}
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
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        control={control}
        reset={reset}
        data={formFieldsPTVAL}
        labelButtonSubmit="Aceptar"
        labelButtonReset="Limpiar"
      />
    </div>
  );
};

export default FormStudentsPtval;
