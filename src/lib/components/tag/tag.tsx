import { Text } from "@fluentui/react";

import { ITag } from "./types/tag.type";

const Tag = ({ description }: ITag) => (
  <div className="flex w-max p-2 rounded-full bg-gray-200 print">
    <Text variant="small">{description}</Text>
  </div>
);

export default Tag;
