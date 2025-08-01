import { useCallback, useMemo } from "react";

type ExpiringValue<T> = {
  value: T;
  expiry: number;
};

export const useExpiringLocalStorage = <T>(key: string) => {
  const get = useCallback((): T | null => {
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    try {
      const item: ExpiringValue<T> = JSON.parse(raw);
      return Date.now() < item.expiry ? item.value : (localStorage.removeItem(key), null);
    } catch {
      localStorage.removeItem(key);
      return null;
    }
  }, [key]);

  const remove = useCallback((): void => {
    localStorage.removeItem(key);
  }, [key]);

  const set = useCallback(
    (value: T, ttlMs: number): void => {
      const item: ExpiringValue<T> = {
        value,
        expiry: Date.now() + ttlMs,
      };
      localStorage.setItem(key, JSON.stringify(item));
    },
    [key],
  );

  const values = useMemo(
    () => ({
      get,
      remove,
      set,
    }),
    [get, remove, set],
  );

  return values;
};
