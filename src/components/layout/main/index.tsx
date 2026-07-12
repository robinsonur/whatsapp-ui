import { Container } from "@/components/ui";
import { Filter, type FilterProps } from "./filter";

const filters: FilterProps[] = [
  {
    active: true,
    label: "All",
  },
  {
    label: "Unread 363",
  },
  {
    label: "Favorites",
  },
  {
    label: "Groups 64",
  },
];

function Main() {
  return (
    <main className="space-y-6">
      <Container className="space-y-4" asChild>
        <section>
          <h2 className="font-bold text-4xl">Chats</h2>
          <input
            className="w-full rounded-full bg-white/10 p-2.5 outline-0"
            placeholder="Ask Meta AI or Search"
          />
        </section>
      </Container>
      <Container className="space-x-2" asChild>
        <section>
          {filters.map((props) => (
            <Filter key={props.label} {...props} />
          ))}
        </section>
      </Container>
    </main>
  );
}

export { Main };
