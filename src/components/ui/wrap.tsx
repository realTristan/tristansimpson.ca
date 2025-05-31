import { cn } from "@/lib/utils";

type WrapProps = React.HTMLAttributes<HTMLDivElement>;

const Wrap = ({ className, children, ...props }: Readonly<WrapProps>) => {
  return (
    <div
      className={cn(
        "flex h-auto min-h-fit w-full min-w-fit flex-wrap items-start justify-start",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Wrap, type WrapProps };
