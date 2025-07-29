import { DefaultButton, IIconProps } from "@fluentui/react";

export const AddButtonEducationalCenter = ({ className }: { className?: string }) => {
  const addIcon: IIconProps = { iconName: "Add", style: { color: "black" } };

  return (
    <DefaultButton className={className} iconProps={addIcon} allowDisabledFocus>
      Crear Centro Educativo
    </DefaultButton>
  );
};
