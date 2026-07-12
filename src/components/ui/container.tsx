import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & {
  asChild?: boolean;
};

function Container({ asChild, className, ...props }: ContainerProps) {
  const Component = asChild ? Slot : "div";
  return (
    <Component className={cn("container mx-auto", className)} {...props} />
  );
}

export { Container, type ContainerProps };
