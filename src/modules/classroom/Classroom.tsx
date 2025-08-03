"use client";
import {
  Breadcrumb,
  DirectionalHint,
  DocumentCard,
  DocumentCardLogo,
  DocumentCardTitle,
  IconButton,
  Link,
  TeachingBubble,
} from "@fluentui/react";
import { useParams, useRouter } from "next/navigation";

import Tag from "@/lib/components/tag/Tag";
import { EntityEmptyState } from "@/lib/features/entity-empty-state/EntityEmptyState";

import { AddClassroom } from "../add-classroom/AddClassroom";
import { useClassroom } from "./hooks/useClassroom";
import { classroomBreadcrumbItems } from "./utils/classroom.util";

const Classroom = () => {
  const router = useRouter();
  const params = useParams();
  const { educationalCenterId } = params as unknown as { educationalCenterId: string };

  const { data, handleDeleteEducationalCenter, setVisibleBubbleId, visibleBubbleId } = useClassroom(educationalCenterId);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex sm:flex-row flex-col justify-between gap-2">
        <Breadcrumb
          items={classroomBreadcrumbItems(educationalCenterId, router)}
          maxDisplayedItems={4}
          overflowAriaLabel="Más elementos"
          className="w-full"
        />
        <div className="flex">
          <AddClassroom educationalCenterId={educationalCenterId} />
        </div>
      </div>
      {Array.isArray(data) && !data.length ?
        <EntityEmptyState
          iconName="ClassroomLogo"
          subtitle="Aún no tienes una Aula registrada. Crea una para comenzar a gestionar estudiantes y otros procesos"
          title="No hay Aula creada"
        >
          <Link onClick={() => router.push("/educational-center")}>¿Quieres volver a la página de Centros Educativos?</Link>
        </EntityEmptyState>
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
                      <DocumentCardLogo className="m-0 p-0 self-center" logoIcon="ClassroomLogo" />
                      <div className="truncate w-full max-w-full" onClick={() => router.push(`classroom/${elem._id}/students`)}>
                        <Tag description={elem.modalidadEducativa} />
                        <DocumentCardTitle className="truncate font-semibold text-xl" title={`${elem.etapaEducativa} - ${elem.clase}`} />
                        <DocumentCardTitle className="truncate" showAsSecondaryTitle title={elem.hiloConductor} />
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
                          headline="Eliminar Aula"
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
                          <p>
                            ¿Estás seguro de que quieres eliminar el Aula {elem.etapaEducativa}-{elem.clase}? Esta acción no se puede
                            deshacer.
                          </p>
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

export default Classroom;
