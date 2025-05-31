import { cn } from "@/lib/utils";

interface ColumnProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Column = ({ className, children }: Readonly<ColumnProps>) => {
  return (
    <div
      className={cn(
        "flex h-auto min-h-fit w-full flex-col items-start justify-start",
        className,
      )}
    >
      {children}
    </div>
  );
};

export { Column, type ColumnProps };
