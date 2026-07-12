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
    <footer className="fixed w-full bottom-0">
      <Container className="mb-4 flex gap-x-4 justify-between backdrop-blur-2xs bg-secondary-muted/95 px-4 py-1 rounded-3xl">
        {items.map(props => <Item key={props.iconName+props.label} {...props} />)}
      </Container>
    </footer>
  );
}

export { Footer };
