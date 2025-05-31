import { cn } from "@/lib/utils";

interface WrapProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Wrap = ({ className, children }: Readonly<WrapProps>) => {
  return (
    <div
      className={cn(
        "flex h-auto min-h-fit w-full min-w-fit flex-wrap items-start justify-start",
        className,
      )}
    >
      {children}
    </div>
  );
};

export { Wrap, type WrapProps };
