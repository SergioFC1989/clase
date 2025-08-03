"use client";
import {
  Breadcrumb,
  DirectionalHint,
  DocumentCard,
  DocumentCardLogo,
  DocumentCardTitle,
  IconButton,
  TeachingBubble,
} from "@fluentui/react";
import { useRouter } from "next/navigation";

import { EntityEmptyState } from "@/lib/features/entity-empty-state/EntityEmptyState";

import { AddEducationalCenter } from "../add-educational-center/AddEducationalCenter";
import { useEducationalCenter } from "./hooks/useEducationalCenter";
import { breadcrumbItems } from "./utils/educational-center.util";

const EducationalCenter = () => {
  const router = useRouter();
  const { data, handleDeleteEducationalCenter, setVisibleBubbleId, visibleBubbleId } = useEducationalCenter();

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex sm:flex-row flex-col justify-between gap-2">
        <Breadcrumb items={breadcrumbItems(router)} maxDisplayedItems={4} overflowAriaLabel="Más elementos" className="w-full" />
        <div className="flex">
          <AddEducationalCenter />
        </div>
      </div>
      {Array.isArray(data) && !data.length ?
        <EntityEmptyState
          iconName="Street"
          subtitle="Aún no tienes un centro educativo registrado. Crea uno para comenzar a gestionar clases, estudiantes, etc"
          title="No hay Centro Educativo creado"
        />
      : <div className="w-full h-full flex flex-col gap-10">
          <div className="w-full flex flex-wrap place-content-start gap-4">
            {data &&
              data.map((elem) => {
                const id = `delete-button-${elem._id}`;
                const isVisible = visibleBubbleId === elem._id;

                return (
                  <DocumentCard
                    className="w-full flex flex-col justify-center p-2 border border-solid cursor-pointer border-neutral-300 hover:border-primary-color"
                    key={elem._id}
                  >
                    <div className="flex flex-row items-center">
                      <DocumentCardLogo className="m-0 p-0 self-center" logoIcon="SingleBookmark" />
                      <div className="truncate w-full max-w-full" onClick={() => router.push(`/educational-center/${elem._id}/classroom`)}>
                        <DocumentCardTitle className="truncate font-semibold text-xl" title={elem.nombre} />
                        <DocumentCardTitle className="truncate" showAsSecondaryTitle title={elem.localidad} />
                      </div>
                      <IconButton
                        ariaLabel="Eliminar"
                        id={id}
                        className="m-0 p-0 self-center *:hover:cursor-pointer *:hover:opacity-50"
                        iconProps={{ iconName: "Delete", style: { color: "red", fontSize: 20 } }}
                        onClick={() => setVisibleBubbleId(elem._id)}
                        title="Eliminar"
                      />
                      {isVisible && (
                        <TeachingBubble
                          calloutProps={{ directionalHint: DirectionalHint.bottomCenter }}
                          closeButtonAriaLabel="Close"
                          hasCloseButton={true}
                          headline="Eliminar Centro Educativo"
                          isWide={true}
                          onDismiss={() => setVisibleBubbleId(null)}
                          primaryButtonProps={{
                            text: "Eliminar",
                            onClick: (e) => {
                              e.stopPropagation();
                              setVisibleBubbleId(null);
                              handleDeleteEducationalCenter(elem._id);
                            },
                            color: "red",
                          }}
                          target={`#${id}`}
                        >
                          <p>¿Estás seguro de que quieres eliminar el Centro Educativo {elem.nombre}? Esta acción no se puede deshacer.</p>
                        </TeachingBubble>
                      )}
                    </div>
                  </DocumentCard>
                );
              })}
          </div>
        </div>
      }
    </div>
  );
};

export default EducationalCenter;
