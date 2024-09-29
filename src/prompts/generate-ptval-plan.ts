import { AnnualPlanProps } from "../utils/types";

export const generateAnnualPlan = (data: AnnualPlanProps) => `
Crea un plan detallado para un curso escolar en el año corriente en Andalucía, dirigido a un alumno determinado con necesidades únicas dependiendo de la etapa educativa, que pueden ser:
-Educación Infantil: Orden del 30 de mayo de 2023 de la Junta de Andalucía.
-Educación Primaria: Orden del 30 de mayo de 2023 de la Junta de Andalucía.
-Educación Secundaria: Orden del 30 de mayo de 2023 de la Junta de Andalucía.
-Post Obligatoria: Orden del 30 de mayo de 2023 de la Junta de Andalucía.
-PTVAL: Orden del 19 de septiembre de 2002 de la Junta de Andalucía.

Importante no sobrepasar el limite de la respuesta por parte de la IA. Formato de respuesta Markdown: estructurado, organizado y con listados.

Cada alumno tiene características únicas que deben ser tomadas en cuenta al diseñar las actividades y todo de manera individual. Hay que tener muy en cuenta los datos del alumno que adjunto a continuación para poder realizar el plan detallado:
${(Object.keys(data) as (keyof AnnualPlanProps)[])
  .map((key) => `- ${key}: ${data[key] || "No especificado"}`)
  .join("\n")}

Los ámbitos de desarrollo son:
-Autonomía Personal (7-10 horas)
-Integración Social y Comunitaria (6-8 horas)
-Habilidades y Destrezas Laborales (7-10 horas)

Requerimientos para cada ámbito de desarrollo:
Autonomía Personal (7-10 horas):
-Diseña actividades para mejorar la independencia de cada alumno en sus tareas diarias, ajustándose a sus capacidades cognitivas y emocionales. Por ejemplo, planificación diaria, control de impulsos, o resolución de problemas.
-Proporciona técnicas de evaluación como observación directa, listas de verificación, y registros anecdóticos para medir el progreso en la autonomía personal de cada alumno.
-Centro de interés: Conocimiento de su propio cuerpo, cambios hormonales y las emociones.

Integración Social y Comunitaria (6-8 horas):
-Las actividades deben fomentar la interacción social respetuosa y la participación en la comunidad. Diseña talleres, salidas al entorno comunitario y juegos cooperativos para mejorar las habilidades sociales de cada alumno. Usa técnicas de evaluación como cuadernos de campo, observación directa y autoevaluaciones con apoyo visual para medir la capacidad de integración social de cada estudiante.
-Centro de interés: Educacion vial y supermercados

Habilidades y Destrezas Laborales (7-10 horas):
-Las actividades deben centrarse en la ejecución de tareas laborales sencillas, responsabilidad y autonomía, ajustadas a las capacidades de cada alumno. Por ejemplo, simula tareas de oficina, gestión de recursos o trabajos en entornos reales.
-Proporciona listas de verificación, entrevistas de autoevaluación y evaluación del producto final como técnicas de evaluación.
-Centro de interés: Taller de cocina y labores domesticas

Actividades:
-Diseña actividades específicas para cada ámbito de desarrollo, teniendo en cuenta las características y necesidades de cada alumno.

Evaluación:
-Proporciona instrumentos y técnicas de evaluación específicas para cada actividad y ámbito. Deben incluir observación directa, listas de verificación, autoevaluación, cuadernos de campo y registros anecdóticos, para medir el progreso y la autonomía de cada alumno en las diferentes áreas.
-Formato de respuesta: Estructura la respuesta en un formato organizado, especificando para cada ámbito los contenidos o saberes básicos, actividades, y técnicas de evaluación. Ten en cuenta la duración de cada ámbito y personaliza las actividades y evaluaciones según las características y necesidades de cada alumno.
`;
