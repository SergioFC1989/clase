import { Icon, Text } from "@fluentui/react";

import { AddEducationalCenter } from "../../../add-educational-center/AddEducationalCenter";

export const WithoutEducationalCenter = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-4">
      <div className="flex flex-col items-center justify-center">
        <Icon iconName="Street" style={{ fontSize: 48, color: "black" }} />
        <Text variant="xLargePlus">No hay Centro Educativo creado</Text>
        <Text variant="mediumPlus">
          Aún no tienes un centro educativo registrado. Crea uno para comenzar a gestionar clases, estudiantes, etc
        </Text>
      </div>
      <AddEducationalCenter />
    </div>
  );
};
