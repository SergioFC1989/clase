export const sanitizerJSON = (json: string) => {
  const sanitized = json
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
  return JSON.parse(sanitized);
};
