import { cn } from "@/lib/utils";

type RowProps = React.HTMLAttributes<HTMLDivElement>;

const Row = ({ className, children, ...props }: Readonly<RowProps>) => {
  return (
    <div
      className={cn(
        "flex h-auto min-h-fit w-full flex-row items-start justify-start",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Row, type RowProps };
