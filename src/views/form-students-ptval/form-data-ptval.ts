import { disorderOptions, defaultOptions } from "@/utils/options";
import { FormDataProps, StudentsProps } from "@/utils/types";

interface FormDataPTVALProps extends FormDataProps {
  name: keyof StudentsProps;
}

export const formDataPTVAL: FormDataPTVALProps[] = [
  {
    type: "text",
    label: "Nombre",
    name: "nombre",
    placeholder: "Introduzca un nombre...",
    col: 1,
    required: true,
  },
  {
    type: "slider",
    label: "Edad",
    name: "edad",
    col: 2,
    min: 0,
    max: 50,
    step: 1,
    required: true,
  },
  {
    type: "dropdown",
    label: "Tipo de discapacidad",
    name: "discapacidad",
    placeholder: "Seleccione una o varias opciones...",
    col: 3,
    options: disorderOptions,
    required: true,
    isMultiSelect: true,
  },
  {
    type: "dropdown",
    label: "Psicomotricidad fina",
    name: "psicomotricidad fina",
    placeholder: "Seleccione una opción...",
    col: 4,
    options: defaultOptions,
    required: true,
  },
  {
    type: "dropdown",
    label: "Psicomotricidad gruesa",
    name: "psicomotricidad gruesa",
    placeholder: "Seleccione una opción...",
    col: 4,
    options: defaultOptions,
    required: true,
  },
  {
    type: "dropdown",
    label: "Coeficiente intelectual",
    name: "coeficiente intelectual",
    placeholder: "Seleccione una opción...",
    col: 5,
    options: defaultOptions,
    required: true,
  },
  {
    type: "dropdown",
    label: "Comunicacion escrita",
    name: "comunicacion escrita",
    placeholder: "Seleccione una opción...",
    col: 6,
    options: defaultOptions,
    required: true,
  },
  {
    type: "dropdown",
    label: "Comunicacion verbal",
    name: "comunicacion verbal",
    placeholder: "Seleccione una opción...",
    col: 6,
    options: defaultOptions,
    required: true,
  },
  {
    type: "dropdown",
    label: "Intencionalidad comunicativa",
    name: "intencionalidad comunicativa",
    placeholder: "Seleccione una opción...",
    col: 7,
    options: defaultOptions,
    required: true,
  },
  {
    type: "text",
    label: "Observaciones",
    name: "observaciones",
    placeholder: "Si lo desea, deje sus observaciones...",
    col: 8,
    rows: 5,
    isMultiline: true,
  },
];

export const defaultValuesPTVAL: StudentsProps = {
  nombre: "",
  edad: 0,
  discapacidad: "",
  "psicomotricidad fina": "",
  "psicomotricidad gruesa": "",
  "coeficiente intelectual": "",
  "comunicacion escrita": "",
  "comunicacion verbal": "",
  "intencionalidad comunicativa": "",
  observaciones: "",
};
