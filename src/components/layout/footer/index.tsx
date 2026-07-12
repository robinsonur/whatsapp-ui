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
    <footer className="sticky bottom-4 w-full">
      <Container className="my-4 grid grid-cols-5 gap-x-1 rounded-3xl bg-secondary/80 px-2 py-1 backdrop-blur-2xs">
        {items.map((props) => (
          <Item key={props.iconName + props.label} {...props} />
        ))}
      </Container>
    </footer>
  );
}

export { Footer };
