export const DEFAULT_LIST_STATUS_ERROR = [400, 404, 424, 500, 502, 503, 504];

export const OPTIONS_GEN_AI = {
  model: "gemini-1.5-flash",
  systemInstruction: "Eres un experto en el ámbito educacional en España y tienes en cuenta todas las leyes, ordenes y decretos del mismo",
};

export const REQUEST_DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

export const REQUEST_DEFAULT_PARAMS = {
  data: {},
  pageNumber: 1,
  pageSize: 100,
};
