import { cn } from "@/lib/utils";

type IconButtonProps = React.ComponentProps<"button"> & {};

function IconButton({ type = "button", className, ...props }: IconButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "rounded-full border bg-secondary-muted/65 p-2.5 backdrop-blur-2xs",
        className,
      )}
      {...props}
    />
  );
}

export { IconButton, type IconButtonProps };
