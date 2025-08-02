import { Icon, Text } from "@fluentui/react";

import { IEntityEmptyState } from "./types/entity-empty-state.type";

export const EntityEmptyState = ({ children, iconName, subtitle, title }: IEntityEmptyState) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-4">
      <div className="flex flex-col items-center justify-center">
        <Icon iconName={iconName} style={{ fontSize: 48, color: "black" }} />
        <Text variant="xLargePlus">{title}</Text>
        <Text variant="mediumPlus">{subtitle}</Text>
      </div>
      {children}
    </div>
  );
};
