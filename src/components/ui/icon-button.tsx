import { cn } from "@/lib/utils";

type IconButtonProps = React.ComponentProps<"button"> & {};

function IconButton({ type = "button", className, ...props }: IconButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "rounded-full p-2.5 backdrop-blur-2xs bg-secondary-muted/65 border",
        className,
      )}
      {...props}
    />
  );
}

export { IconButton, type IconButtonProps };
