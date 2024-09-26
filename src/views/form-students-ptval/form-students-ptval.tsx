"use client";

import Markdown from "marked-react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { DefaultButton, Separator, Spinner, Text } from "@fluentui/react";

import { defaultValuesPTVAL, formDataPTVAL } from "./form-data-ptval";

import Form from "@/components/form/form";

import { promptPTVAL } from "@/prompts/ptval";

import { fetcher } from "@/utils/fetcher";
import { StudentsProps } from "@/utils/types";

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
        prompt: promptPTVAL([data as StudentsProps]),
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
          label="Generando ficha de evaluación inicial para PTVAL"
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
          Plan detallado PTVAL
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
        Ficha de Evaluación Inicial para PTVAL
      </Text>
      <Separator />
      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        control={control}
        reset={reset}
        data={formDataPTVAL}
        labelButtonSubmit="Aceptar"
        labelButtonReset="Limpiar"
      />
    </div>
  );
};

export default FormStudentsPtval;
