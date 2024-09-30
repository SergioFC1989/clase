import { IconButton, Separator, Text } from "@fluentui/react";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";

interface ReportSectionProps {
  title: string;
  content: string;
  onClickNavigateBack?: () => void;
}

const ReportSection = ({
  title,
  content,
  onClickNavigateBack,
}: ReportSectionProps) => (
  <>
    <div className="w-full flex flex-col s:flex-row s:justify-between s:items-center">
      <Text variant="xLarge" className="text-base sm:text-lg">
        {title}
      </Text>
      <div className="flex">
        <IconButton
          className="print:hidden"
          iconProps={{ iconName: "NavigateBack", style: { fontSize: 18 } }}
          title="Atrás"
          ariaLabel="Atrás"
          onClick={onClickNavigateBack}
        />
        <IconButton
          className="print:hidden"
          iconProps={{ iconName: "Save", style: { fontSize: 18 } }}
          title="Guardar"
          ariaLabel="Guardar"
          onClick={() => window.print()}
        />
      </div>
    </div>
    <Separator />
    <Markdown
      className="whitespace-pre-wrap"
      rehypePlugins={[rehypeKatex]}
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </Markdown>
  </>
);

export default ReportSection;
