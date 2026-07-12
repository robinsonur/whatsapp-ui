import { cn } from "@/lib/utils";

type FilterProps = {
  active?: boolean;
  label: string;
};

function Filter({ active, label }: FilterProps) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-full border border-white/20 bg-white/7 px-3 py-0.5 text-white/50",
        active && "border-primary/40 bg-primary/22 text-white/80",
      )}
    >
      {label}
    </button>
  );
}

export { Filter, type FilterProps };
