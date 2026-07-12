import { DynamicIcon, type IconName } from "lucide-react/dynamic";
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
      className={cn("justify-items-center px-7 rounded-full py-1.5", current && "bg-white/15")}
    >
      <DynamicIcon name={iconName} className={cn("size-8", current && "fill-white")} />
      <span className="text-sm">{label}</span>
    </button>
  );
}

export { Item, type ItemProps };
