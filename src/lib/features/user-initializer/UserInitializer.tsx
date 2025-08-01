"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { useExpiringLocalStorage } from "@/lib/hooks/useExpiringLocalStorage";
import { userIdState } from "@/lib/states/expiring-local-storage.state";

export const UserInitializer = () => {
  const router = useRouter();

  const { get } = useExpiringLocalStorage("userId");

  const setUserId = useSetRecoilState(userIdState);

  useEffect(() => {
    const id = get() as string;

    if (!id) {
      router.push("/login");
    } else {
      setUserId(id);
    }
  }, [get, router, setUserId]);

  return null;
};
