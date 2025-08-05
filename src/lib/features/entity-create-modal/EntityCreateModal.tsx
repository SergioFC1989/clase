import { DefaultButton, Icon, IIconProps, Modal, Text } from "@fluentui/react";
import { FieldValues } from "react-hook-form";

import Form from "@/lib/components/form/Form";

import { IEntityCreateModal } from "./types/entity-create-modal.type";

export const EntityCreateModal = <T extends FieldValues>({
  iconName = "FormLibrary",
  isOpen,
  title,
  onClose,
  onOpen,
  ...formProps
}: IEntityCreateModal<T>) => {
  const addIcon: IIconProps = { iconName: "Add", style: { color: "black" } };

  return (
    <>
      <DefaultButton iconProps={addIcon} onClick={onOpen}>
        {title}
      </DefaultButton>
      <Modal containerClassName="w-full lg:w-[70%]" isOpen={isOpen}>
        <div className="w-full flex flex-col justify-center gap-4 p-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-3">
              <Icon iconName={iconName} style={{ fontSize: 24, color: "black" }} />
              <Text variant="xLarge">{title}</Text>
            </div>
            <Icon
              className="cursor-pointer"
              iconName="Cancel"
              onClick={() => {
                if (formProps?.reset) {
                  formProps.reset();
                }

                onClose();
              }}
              style={{ color: "black", fontSize: 24 }}
              title="Cerrar"
            />
          </div>
          <Form {...formProps} />
        </div>
      </Modal>
    </>
  );
};
