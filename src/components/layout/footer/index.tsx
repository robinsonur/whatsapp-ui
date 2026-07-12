import { Container } from "@/components/ui/container";
import { Item, type ItemProps } from "./item";

const items: ItemProps[] = [
  {
    iconName: "rss",
    label: "Updates",
  },
  {
    iconName: "phone",
    label: "Calls",
    amount: 3,
  },
  {
    iconName: "users",
    label: "Communities",
  },
  {
    iconName: "message-circle",
    label: "Chats",
    current: true,
    amount: 363,
  },
  {
    iconName: "cog",
    label: "Settings",
  },
];

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full">
      <Container className="mb-4 flex justify-between gap-x-4 rounded-3xl bg-secondary-muted/95 px-4 py-1 backdrop-blur-2xs">
        {items.map((props) => (
          <Item key={props.iconName + props.label} {...props} />
        ))}
      </Container>
    </footer>
  );
}

export { Footer };
