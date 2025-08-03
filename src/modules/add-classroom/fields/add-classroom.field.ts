import { IDynamicFormField } from "@/lib/types/type";
import { defaultEducationalStageOptions, defaultModalityOptions } from "@/lib/utils/options";

export const addClassroomField: IDynamicFormField[] = [
  {
    col: 1,
    label: "Hilo conductor",
    name: "hiloConductor",
    placeholder: "Introduzca un Hilo conductor...",
    required: true,
    type: "text",
  },
  {
    col: 1,
    label: "Modalidad educativa",
    name: "modalidadEducativa",
    options: defaultModalityOptions,
    placeholder: "Seleccione una opción...",
    required: true,
    type: "dropdown",
  },
  {
    col: 2,
    label: "Etapa educativa",
    name: "etapaEducativa",
    options: defaultEducationalStageOptions,
    placeholder: "Seleccione una opción...",
    required: true,
    type: "dropdown",
  },
  {
    col: 2,
    label: "Clase",
    name: "clase",
    placeholder: "Introduzca una Clase...",
    required: true,
    type: "text",
  },
  {
    col: 3,
    label: "Año Inicio",
    name: "curso.inicio",
    placeholder: "Introduzca un Año Inicio...",
    required: true,
    type: "text",
  },
  {
    col: 3,
    label: "Año Fin",
    name: "curso.fin",
    placeholder: "Introduzca un Año fin...",
    required: true,
    type: "text",
  },
];
