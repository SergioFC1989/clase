"use client";
import { DefaultButton, Icon, IIconProps, Modal, Text } from "@fluentui/react";

import Form from "@/lib/components/form/Form";

import { addEducationalCenterField } from "./fields/add-educational-center.field";
import { useAddEducationalCenter } from "./hooks/useAddEducationalCenter";

export const AddEducationalCenter = () => {
  const addIcon: IIconProps = { iconName: "Add", style: { color: "black" } };

  const { handleAddEducationlCenterForm, handleIsOpen, handleSubmit, isOpen, reset, control } = useAddEducationalCenter();

  return (
    <>
      <DefaultButton iconProps={addIcon} onClick={() => handleIsOpen(true)}>
        Crear Centro Educativo
      </DefaultButton>
      <Modal containerClassName="w-full lg:w-[50%]" isOpen={isOpen}>
        <div className="w-full flex flex-col justify-center gap-4 p-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-3">
              <Icon iconName="FormLibrary" style={{ fontSize: 24, color: "black" }} />
              <Text variant="xLarge">Crear Centro Educativo</Text>
            </div>
            <Icon
              className="cursor-pointer"
              iconName="Cancel"
              onClick={() => {
                reset();
                handleIsOpen(false);
              }}
              style={{ color: "black", fontSize: 24 }}
              title="Cerrar"
            />
          </div>
          <Form
            control={control}
            handleSubmit={handleSubmit}
            labelButtonSubmit="Crear"
            listFields={addEducationalCenterField}
            onSubmit={handleAddEducationlCenterForm}
            reset={reset}
          />
        </div>
      </Modal>
    </>
  );
};
