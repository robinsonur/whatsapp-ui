import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import { Activity } from "react";
import { Counter } from "@/components/ui";
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
        "relative min-w-0 rounded-full px-1 py-1.5 text-[clamp(0.625rem,2.7vw,0.875rem)]",
        current && "bg-white/15",
      )}
    >
      <DynamicIcon
        name={iconName}
        className={cn("mx-auto size-[clamp(1.35rem,6vw,2rem)]", current && "fill-white")}
      />
      <span>{label}</span>
      <Activity mode={amount ? "visible" : "hidden"}>
        <Counter className="absolute top-0 right-0">{amount}</Counter>
      </Activity>
    </button>
  );
}

export { Item, type ItemProps };
