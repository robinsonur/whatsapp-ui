import { cn } from "@/lib/utils";

type CounterProps = React.ComponentProps<"span"> & {};

function Counter({ className, ...props }: CounterProps) {
  return (
    <span
      className={cn(
        "grid h-6 min-w-6 place-items-center rounded-full bg-primary px-1 text-secondary leading-none",
        className,
      )}
      {...props}
    />
  );
}

export { Counter, type CounterProps };
