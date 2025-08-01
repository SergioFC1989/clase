import { atom } from "recoil";

export const entityCreateModalState = atom<boolean>({
  key: "entityCreateModalState",
  default: false,
});
