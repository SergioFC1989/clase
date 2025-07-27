export interface IActivitySummary {
  nombre: string;
  descripcion: string;
  evaluacion: string;
}

export type TScopeSummary = {
  ambito: string;
  horas: string;
  contenidos: string;
  actividades: IActivitySummary[];
};

export interface ISummaryData {
  data: TScopeSummary[];
}
