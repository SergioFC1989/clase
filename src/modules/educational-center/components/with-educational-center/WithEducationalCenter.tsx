import { DocumentCard, DocumentCardLogo, DocumentCardTitle } from "@fluentui/react/lib/DocumentCard";

import { AddButtonEducationalCenter } from "../add-button-educational-center/AddButtonEducationalCenter";

const data = [
  {
    id: "1",
    nombre: "I.E.S Mar de Cádiz",
    localidad: "El Puerto de Santa María",
  },
  {
    id: "2",
    nombre: "Colegio San Luis Gonzaga",
    localidad: "El Puerto de Santa María",
  },
  {
    id: "3",
    nombre: "I.E.S. La Marisma",
    localidad: "El Puerto de Santa María",
  },
  {
    id: "4",
    nombre: "Colegio San Juan Bosco",
    localidad: "El Puerto de Santa María",
  },
  {
    id: "5",
    nombre: "I.E.S. José Luis Tejada",
    localidad: "El Puerto de Santa María",
  },
  {
    id: "6",
    nombre: "Colegio La Salle",
    localidad: "El Puerto de Santa María",
  },
  {
    id: "7",
    nombre: "I.E.S. Pedro Muñoz Seca",
    localidad: "El Puerto de Santa María",
  },
  {
    id: "8",
    nombre: "Colegio San José",
    localidad: "El Puerto de Santa María",
  },
];

export const WithEducationalCenter = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <AddButtonEducationalCenter className="self-end" />
      <div className="w-full flex flex-wrap place-content-start gap-4">
        {data.map((elem) => (
          <DocumentCard
            className="w-full flex flex-col justify-center p-2 border border-solid border-neutral-300 hover:border-primary-color"
            key={elem.id}
            onClick={() => {}}
          >
            <div className="flex flex-row items-center">
              <DocumentCardLogo className="m-0 p-0 self-center" logoIcon="SingleBookmark" />
              <div className="w-full flex flex-col">
                <DocumentCardTitle className="font-semibold text-xl" title={elem.nombre} />
                <DocumentCardTitle showAsSecondaryTitle title={elem.localidad} />
              </div>
            </div>
          </DocumentCard>
        ))}
      </div>
    </div>
  );
};
