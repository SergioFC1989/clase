import { MessageBar as FMessageBar, MessageBarType, Text } from "@fluentui/react";
import { useEffect } from "react";

import { useMessageBar } from "./hooks/useMessageBar";
import { IMessageBar } from "./types/message-bar.type";

const MessageBar = ({ ...props }: IMessageBar) => {
  const { closeMessageBar, messageBar } = useMessageBar();

  useEffect(() => {
    if (messageBar.isOpen) {
      const timer = setTimeout(() => {
        closeMessageBar();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [messageBar.isOpen, closeMessageBar]);

  return messageBar.isOpen ?
      <FMessageBar
        dismissButtonAriaLabel="Close"
        isMultiline
        messageBarType={MessageBarType[messageBar.type]}
        onDismiss={closeMessageBar}
        truncated={true}
        {...props}
      >
        {typeof messageBar.message === "string" ?
          <Text variant="medium">{messageBar.message}</Text>
        : messageBar.message}
      </FMessageBar>
    : null;
};

export default MessageBar;
