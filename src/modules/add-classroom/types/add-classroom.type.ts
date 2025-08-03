import { TEducationalModality, TEducationalStage } from "@/lib/types/type";

export interface IAddClassroomValue {
  centroEducativoId: string;
  clase: string;
  curso: {
    fin: string;
    inicio: string;
  };
  etapaEducativa: TEducationalStage;
  hiloConductor: string;
  modalidadEducativa: TEducationalModality;
  usuarioId?: string;
}

export interface IAddClassroom {
  educationalCenterId: string;
}
