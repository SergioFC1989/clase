"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import {
  Dropdown,
  PrimaryButton,
  Slider,
  Spinner,
  Text,
  TextField,
} from "@fluentui/react";

import ContentMarkdown from "@/components/content-markdown/content-markdown";

import { promptPTVAL } from "@/lib/prompts/ptval";
import { fetcher } from "@/lib/utils/fetcher";
import { defaultOptions, disorderOptions } from "@/lib/utils/options";
import { StudentsProps } from "@/lib/utils/types";

const FormStudentsPtval = () => {
  const { handleSubmit, register, control } = useForm<StudentsProps>();

  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnSubmit = async (data: StudentsProps) => {
    console.log({ data });

    setIsLoading(true);
    try {
      const response = await fetcher("/api/gemini/generate-content", "POST", {
        prompt: promptPTVAL([data]),
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
    <form
      className="flex flex-col gap-4"
      onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <Text className="text-gray-500" variant="xLarge" block>
        Formulario de estudiante PTVAL
      </Text>
      <TextField
        label="Nombre"
        placeholder="Introduzca un nombre"
        required
        {...register("nombre", { required: true })}
      />
      <Controller
        control={control}
        name="discapacidad"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Dropdown
            label="Tipo de discapacidad"
            onChange={(e, option) =>
              option?.selected
                ? onChange([
                    ...(Array.isArray(value) ? value : []),
                    option?.text,
                  ])
                : onChange(
                    (Array.isArray(value) ? value : []).filter(
                      (v) => v !== option?.text
                    )
                  )
            }
            placeholder="Seleccione uno o varios valores..."
            options={disorderOptions}
            multiSelect
            required
          />
        )}
      />
      <Controller
        control={control}
        name="edad"
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <Slider label="Edad" onChange={onChange} min={0} max={50} step={1} />
        )}
      />
      <div className="w-full flex gap-8">
        <Controller
          control={control}
          name="psicomotricidad fina"
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <Dropdown
              label="Psicomotricidad fina"
              className="w-full"
              onChange={(e, option) => onChange(option?.text)}
              placeholder="Seleccione un valor..."
              options={defaultOptions}
              required
            />
          )}
        />
        <Controller
          control={control}
          name="psicomotricidad gruesa"
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <Dropdown
              label="Psicomotricidad gruesa"
              className="w-full"
              onChange={(e, option) => onChange(option?.text)}
              placeholder="Seleccione un valor..."
              options={defaultOptions}
              required
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="coeficiente intelectual"
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <Dropdown
            label="Coeficiente intelectual"
            className="w-full"
            onChange={(e, option) => onChange(option?.text)}
            placeholder="Seleccione un valor..."
            options={defaultOptions}
            required
          />
        )}
      />
      <div className="w-full flex gap-8">
        <Controller
          control={control}
          name="comunicacion escrita"
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <Dropdown
              label="Comunicación escrita"
              className="w-full"
              onChange={(e, option) => onChange(option?.text)}
              placeholder="Seleccione un valor..."
              options={defaultOptions}
              required
            />
          )}
        />
        <Controller
          control={control}
          name="comunicacion verbal"
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <Dropdown
              label="Comunicación verbal"
              className="w-full"
              onChange={(e, option) => onChange(option?.text)}
              placeholder="Seleccione un valor..."
              options={defaultOptions}
              required
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="intencionalidad comunicativa"
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <Dropdown
            label="Intencionalidad comunicativa"
            className="w-full"
            onChange={(e, option) => onChange(option?.text)}
            placeholder="Seleccione un valor..."
            options={defaultOptions}
            required
          />
        )}
      />
      <TextField
        label="Observaciones"
        placeholder="Introduzca unas observaciones si lo desea..."
        rows={5}
        multiline
        {...register("observaciones")}
      />
      <div className="flex flex-row gap-3">
        <PrimaryButton className="w-full" type="submit" disabled={isLoading}>
          Aceptar
        </PrimaryButton>
      </div>
    </form>
  );
};

export default FormStudentsPtval;
