import { FieldValues } from "react-hook-form";

import { IForm } from "@/lib/components/form/types/form.type";

export interface IEntityCreateModal<T extends FieldValues = FieldValues> extends IForm<T> {
  iconName?: string;
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onOpen: () => void;
}
