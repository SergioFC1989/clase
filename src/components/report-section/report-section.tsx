import { DefaultButton, Separator, Text } from "@fluentui/react";
import Markdown from "marked-react";

interface ReportSectionProps {
  title: string;
  content: string;
  onClick: () => void;
  labelButton: string;
}

const ReportSection = ({
  title,
  content,
  onClick,
  labelButton,
}: ReportSectionProps) => (
  <>
    <Text variant="xLarge" className="text-base sm:text-lg">
      {title}
    </Text>
    <Separator />
    <section className="flex flex-col gap-4">
      <Markdown value={content} />
      <div className="w-full flex justify-center">
        <DefaultButton
          className="my-4 w-3/4 lg:w-2/4 items-center"
          onClick={onClick}
        >
          {labelButton}
        </DefaultButton>
      </div>
    </section>
  </>
);

export default ReportSection;
