import { StudentsProps } from "../utils/types";

export const promptPTVAL = (data: StudentsProps[]) => `
  Crea un plan detallado para un curso escolar en el año corriente en Andalucía, dirigido a un alumno determinado con necesidades educativas especiales, 
  basado en los tres ámbitos de desarrollo según la Orden del 19 de octubre de 2002 de la Junta de Andalucía, 
  para la transición a la vida adulta laboral (PTVAL). Importante no sobrepasar el limite de la respuesta por parte de la IA. Formato de respuesta estructurado, organizado y con listados.

  Cada alumno tiene características únicas que deben ser tomadas en cuenta al diseñar las actividades y todo de manera individual. 

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

  Evaluación:
  -Proporciona instrumentos y técnicas de evaluación específicas para cada actividad y ámbito. Deben incluir observación directa, listas de verificación, autoevaluación, cuadernos de campo y registros anecdóticos, para medir el progreso y la autonomía de cada alumno en las diferentes áreas.
  -Formato de respuesta: Estructura la respuesta en un formato organizado, especificando para cada ámbito los contenidos o saberes básicos, actividades, y técnicas de evaluación. Ten en cuenta la duración de cada ámbito y personaliza las actividades y evaluaciones según las características y necesidades de cada alumno.

  A continuacion adjunto datos del alumno:
  ${data.map((student) => {
    return `
    -Nombre: ${student.nombre ?? "No especificado"}
    -Edad: ${student.edad ?? "No especificado"}
    -Psicomotricidad fina: ${
      student["psicomotricidad fina"] ?? "No especificado"
    }
    -Psicomotricidad gruesa: ${
      student["psicomotricidad gruesa"] ?? "No especificado"
    }
    -Coeficiente intelectual: ${
      student["coeficiente intelectual"] ?? "No especificado"
    }
    -Intencionalidad comunicativa: ${
      student["intencionalidad comunicativa"] ?? "No especificado"
    }
    -Comunicacion escrita: ${
      student["comunicacion escrita"] ?? "No especificado"
    }
    -Comunicacion verbal: ${student["comunicacion verbal"] ?? "No especificado"}
    -Observaciones: ${student.observaciones ?? "No especificado"} 
    `;
  })}
  `;
