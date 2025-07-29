import { IDynamicFormField } from "@/lib/types/type";

export const addEducationalCenterField: IDynamicFormField[] = [
  {
    col: 1,
    label: "Nombre del Centro",
    name: "nombre",
    placeholder: "Introduce el nombre del centro educativo",
    required: true,
    type: "text",
  },
  {
    col: 1,
    label: "Localidad",
    name: "localidad",
    placeholder: "Introduce la localidad del centro educativo",
    required: true,
    type: "text",
  },
];
