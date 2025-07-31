import { atom } from "recoil";

export const backdropState = atom<boolean>({
  key: "backdropState",
  default: false,
});
