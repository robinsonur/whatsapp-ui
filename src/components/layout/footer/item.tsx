import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import { Activity } from "react";
import { cn } from "@/lib/utils";

type ItemProps = {
  current?: boolean;
  iconName: IconName;
  label: string;
  amount?: number;
};

function Item({ current, iconName, label, amount }: ItemProps) {
  return (
    <button
      type="button"
      className={cn(
        "relative justify-items-center rounded-full px-7 py-1.5 text-sm",
        current && "bg-white/15",
      )}
    >
      <DynamicIcon
        name={iconName}
        className={cn("size-8", current && "fill-white")}
      />
      <span>{label}</span>
      <Activity mode={amount ? "visible" : "hidden"}>
        <span className="absolute top-0 right-0 grid h-6 min-w-6 place-items-center rounded-full bg-primary px-1 text-secondary leading-none">
          {amount}
        </span>
      </Activity>
    </button>
  );
}

export { Item, type ItemProps };
