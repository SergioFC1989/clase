import { atom } from "recoil";

import { IMessageBarState } from "../types/message-bar.type";

export const messageBarState = atom<IMessageBarState>({
  key: "messageBarState",
  default: {
    isOpen: false,
    message: "",
    type: "info",
  },
});
