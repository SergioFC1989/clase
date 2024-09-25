import { DefaultButton, Text } from "@fluentui/react";
import Markdown from "marked-react";

interface ContentMarkdownProps {
  title: string;
  content: string;
  labelButton?: string;
  onClick?: () => void;
}

const ContentMarkdown: React.FC<ContentMarkdownProps> = ({
  title,
  content,
  labelButton,
  onClick,
}) => (
  <div className="flex flex-col gap-4">
    <Text className="text-gray-500" variant="xLarge" block>
      {title}
    </Text>
    <Markdown>{content}</Markdown>
    <div className="w-full flex justify-center">
      <DefaultButton className="my-4 sm:w-3/4 items-center" onClick={onClick}>
        {labelButton}
      </DefaultButton>
    </div>
  </div>
);

export default ContentMarkdown;
