"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { Spinner } from "@fluentui/react";

import { formDataPTVAL } from "./form-data-ptval";

import ContentMarkdown from "@/components/content-markdown/content-markdown";
import Form from "@/components/form/form";

import { promptPTVAL } from "@/lib/prompts/ptval";
import { fetcher } from "@/lib/utils/fetcher";
import { StudentsProps } from "@/lib/utils/types";

const FormStudentsPtval = () => {
  const { handleSubmit, register, control } = useForm();

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
      <Spinner
        className="flex justify-start items-start"
        label="Generando contenido..."
        ariaLive="assertive"
        labelPosition="right"
      />
    );
  }

  if (!isLoading && content) {
    return (
      <ContentMarkdown
        title="Contenido PTVAL generado por la I.A"
        content={content}
        labelButton="Volver al formulario"
        onClick={() => window.location.reload()}
      />
    );
  }

  return (
    <Form
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      control={control}
      data={formDataPTVAL}
      labelButtonPrimary="Aceptar"
    />
  );
};

export default FormStudentsPtval;
