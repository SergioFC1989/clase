import { IDynamicFormField } from "@/lib/types/type";

export const loginField: IDynamicFormField[] = [
  {
    col: 1,
    label: "Email",
    name: "email",
    placeholder: "Introduce el email...",
    required: true,
    type: "text",
  },
  {
    col: 2,
    label: "Contraseña",
    name: "clave",
    placeholder: "Introduce la contraseña...",
    required: true,
    type: "password",
  },
];
