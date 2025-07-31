import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";

import { messageBarState } from "../states/message-bar.state";
import { IMessageBarState } from "../types/message-bar.type";

export const useMessageBar = () => {
  const [messageBar, setMessageBar] = useRecoilState(messageBarState);

  const openMessageBar = useCallback(
    (message: IMessageBarState["message"], type: IMessageBarState["type"]) => {
      setMessageBar((prev) => ({
        ...prev,
        isOpen: true,
        message,
        type,
      }));
    },
    [setMessageBar],
  );

  const closeMessageBar = useCallback(() => {
    setMessageBar((prev) => ({
      ...prev,
      isOpen: false,
      message: "",
      type: "info",
    }));
  }, [setMessageBar]);

  const values = useMemo(
    () => ({
      messageBar,
      openMessageBar,
      closeMessageBar,
    }),
    [messageBar, openMessageBar, closeMessageBar],
  );

  return values;
};
