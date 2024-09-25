"use client";

import {
  Dropdown,
  PrimaryButton,
  Slider,
  Spinner,
  Text,
  TextField,
  values,
} from "@fluentui/react";

import Markdown from "marked-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

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
        ...data,
      });

      setContent(response.content);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col w-1/2 py-5 gap-4"
      onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <Text className="text-gray-500" variant="xLarge" block>
        Formulario de estudiantes PTVAL
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
            placeholder="Seleccione varios valores si lo desea..."
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
        render={({ field: { onChange } }) => {
          return (
            <Slider
              label="Edad"
              onChange={onChange}
              min={0}
              max={50}
              step={1}
            />
          );
        }}
      />
      <div className="w-full flex gap-8">
        <Controller
          control={control}
          name="psicomotricidad fina"
          rules={{ required: true }}
          render={({ field: { onChange } }) => {
            return (
              <Dropdown
                label="Psicomotricidad fina"
                className="w-full"
                onChange={(e, option) => onChange(option?.text)}
                placeholder="Seleccione un valor..."
                options={defaultOptions}
                required
              />
            );
          }}
        />
        <Controller
          control={control}
          name="psicomotricidad gruesa"
          rules={{ required: true }}
          render={({ field: { onChange } }) => {
            return (
              <Dropdown
                label="Psicomotricidad gruesa"
                className="w-full"
                onChange={(e, option) => onChange(option?.text)}
                placeholder="Seleccione un valor..."
                options={defaultOptions}
                required
              />
            );
          }}
        />
      </div>
      <Controller
        control={control}
        name="coeficiente intelectual"
        rules={{ required: true }}
        render={({ field: { onChange } }) => {
          return (
            <Dropdown
              label="Coeficiente intelectual"
              className="w-full"
              onChange={(e, option) => onChange(option?.text)}
              placeholder="Seleccione un valor..."
              options={defaultOptions}
              required
            />
          );
        }}
      />
      <div className="w-full flex gap-8">
        <Controller
          control={control}
          name="comunicacion escrita"
          rules={{ required: true }}
          render={({ field: { onChange } }) => {
            return (
              <Dropdown
                label="Comunicación escrita"
                className="w-full"
                onChange={(e, option) => onChange(option?.text)}
                placeholder="Seleccione un valor..."
                options={defaultOptions}
                required
              />
            );
          }}
        />
        <Controller
          control={control}
          name="comunicacion verbal"
          rules={{ required: true }}
          render={({ field: { onChange } }) => {
            return (
              <Dropdown
                label="Comunicación verbal"
                className="w-full"
                onChange={(e, option) => onChange(option?.text)}
                placeholder="Seleccione un valor..."
                options={defaultOptions}
                required
              />
            );
          }}
        />
      </div>
      <Controller
        control={control}
        name="intencionalidad comunicativa"
        rules={{ required: true }}
        render={({ field: { onChange } }) => {
          return (
            <Dropdown
              label="Intencionalidad comunicativa"
              className="w-full"
              onChange={(e, option) => onChange(option?.text)}
              placeholder="Seleccione un valor..."
              options={defaultOptions}
              required
            />
          );
        }}
      />
      <TextField
        label="Nombre"
        placeholder="Introduzca unas observaciones si lo desea..."
        rows={5}
        multiline
        {...register("observaciones")}
      />
      <PrimaryButton
        className="mt-4 w-1/2 content-center"
        disabled={isLoading}
        type="submit"
      >
        Aceptar
      </PrimaryButton>
      {isLoading && (
        <Spinner
          label="Generando contenido..."
          ariaLive="assertive"
          labelPosition="right"
        />
      )}
      {!isLoading && content && <Markdown>{content}</Markdown>}
    </form>
  );
};

export default FormStudentsPtval;
