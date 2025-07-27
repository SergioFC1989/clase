import { Text } from "@fluentui/react";

export const renderLabelWithDescription = (label: string, description?: string) => (
  <div className="flex flex-col">
    <Text variant="medium" className=" font-bold">
      {label}
    </Text>
    <Text variant="medium">{description}</Text>
  </div>
);
