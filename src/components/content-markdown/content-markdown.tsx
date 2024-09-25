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
    <DefaultButton className="mb-4" onClick={onClick}>
      {labelButton}
    </DefaultButton>
  </div>
);

export default ContentMarkdown;
