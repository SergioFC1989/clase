import { Separator, Spinner, Text } from "@fluentui/react";

import { ILoadingView } from "./types/loading-view.type";

const LoadingView = ({ title, message }: ILoadingView) => (
  <>
    <Text variant="xLarge" className="text-base sm:text-lg">
      {title}
    </Text>
    <Separator />
    <Spinner className="flex justify-start items-start" label={message} ariaLive="assertive" labelPosition="right" />
  </>
);

export default LoadingView;
