import { cn } from "@/lib/utils";

type ColumnProps = React.HTMLAttributes<HTMLDivElement>;

const Column = ({ className, children, ...props }: Readonly<ColumnProps>) => {
  return (
    <div
      className={cn(
        "flex h-auto min-h-fit w-full flex-col items-start justify-start",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Column, type ColumnProps };
