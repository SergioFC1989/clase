import { IMessageBarProps, MessageBarType } from "@fluentui/react";

export interface IMessageBarState {
  isOpen: boolean;
  message: string;
  type: keyof typeof MessageBarType;
}

export interface IMessageBar extends IMessageBarProps {}
