import { cn } from "@/lib/utils";

interface RowProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Row = ({ className, children }: Readonly<RowProps>) => {
  return (
    <div
      className={cn(
        "flex h-auto min-h-fit w-full flex-row items-start justify-start",
        className,
      )}
    >
      {children}
    </div>
  );
};

export { Row, type RowProps };
