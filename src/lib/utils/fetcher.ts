export const fetcher = (
  url: string,
  method: "GET" | "POST" = "GET",
  body?: Record<string, unknown>,
  signal?: AbortSignal
) =>
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(body),
    signal,
  }).then((res) => res.json());
