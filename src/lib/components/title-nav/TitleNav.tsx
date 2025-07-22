import { IconButton, Separator, Text } from "@fluentui/react";

import { ITitleNav } from "./types/title-nav.type";

const TitleNav = ({ title, isVisibleButtons = false, onClickNavigateBack }: ITitleNav) => (
  <>
    <div className="w-full flex flex-col s:flex-row s:justify-between s:items-center">
      <Text variant="xLarge" className="text-base sm:text-lg">
        {title}
      </Text>
      {isVisibleButtons ?
        <div className="flex">
          <IconButton
            className="print:hidden"
            iconProps={{ iconName: "NavigateBack", style: { fontSize: 20 } }}
            title="Atrás"
            ariaLabel="Atrás"
            onClick={onClickNavigateBack}
          />
          <IconButton
            className="print:hidden"
            iconProps={{ iconName: "Print", style: { fontSize: 20 } }}
            title="Imprimir"
            ariaLabel="Imprimir"
            onClick={() => window.print()}
          />
        </div>
      : null}
    </div>
    <Separator className="print" />
  </>
);

export default TitleNav;
