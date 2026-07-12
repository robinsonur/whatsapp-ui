import { UsersIcon } from "lucide-react";
import { Activity } from "react";
import { Counter, IconButton } from "@/components/ui";
import { cn } from "@/lib/utils";

type ConversationProps = {
  title: string;
  summary: string;
  time: string;
  amount?: number;
};

function Conversation({ title, summary, time, amount }: ConversationProps) {
  return (
    <article className="grid grid-cols-[auto_1fr_auto] grid-rows-3 items-center gap-x-4 gap-y-1">
      <IconButton className="col-start-1 row-span-3 row-start-2 border-0 bg-amber-700">
        <UsersIcon />
      </IconButton>
      <span className="col-start-2 col-end-4 row-start-1 border-white/10 border-t" />
      <strong className="col-start-2 row-start-2 min-w-0 truncate">
        {title}
      </strong>
      <span
        className={cn(
          "col-start-3 row-start-2 justify-self-end text-white/50",
          amount && "text-primary",
        )}
      >
        {time}
      </span>
      <p className="col-start-2 row-start-3 min-w-0 truncate text-white/50">
        {summary}
      </p>
      <Activity mode={amount ? "visible" : "hidden"}>
        <Counter className="col-start-3 row-start-3 justify-self-end">
          {amount}
        </Counter>
      </Activity>
    </article>
  );
}

export { Conversation, type ConversationProps };
