import { Container } from "@/components/ui";
import { Conversation, type ConversationProps } from "./conversation";
import { Filter, type FilterProps } from "./filter";

const filters: FilterProps[] = [
  {
    active: true,
    children: "All",
  },
  {
    children: "Unread 363",
  },
  {
    children: "Favorites",
  },
  {
    children: "Groups 64",
  },
];

const conversations: ConversationProps[] = [
  {
    title: "Mia Johnson",
    summary: "Can you send me the final screenshots before lunch?",
    time: "09:42",
    amount: 2,
  },
  {
    title: "Design Review",
    summary: "Alex: The glass effect feels much better on the latest build.",
    time: "09:18",
    amount: 8,
  },
  {
    title: "Ethan Carter",
    summary: "I'll be there in 10 minutes.",
    time: "08:55",
  },
  {
    title: "Frontend Team",
    summary: "Nora: Let's keep the mobile layout clean and simple.",
    time: "08:21",
    amount: 14,
  },
  {
    title: "Olivia Brown",
    summary: "That animation looks smooth on iPhone now.",
    time: "Yesterday",
  },
  {
    title: "Family Group",
    summary: "Mom: Dinner is at 7 today.",
    time: "Yesterday",
    amount: 5,
  },
  {
    title: "Noah Wilson",
    summary: "Perfect, I just pushed the latest changes.",
    time: "Yesterday",
  },
  {
    title: "Product Ideas",
    summary: "Let's add this interaction to the prototype backlog.",
    time: "Yesterday",
    amount: 3,
  },
  {
    title: "Emma Davis",
    summary: "The colors feel closer to WhatsApp on iOS.",
    time: "Mon",
  },
  {
    title: "Lucas Martin",
    summary: "Can you check the spacing between the chat rows?",
    time: "Mon",
    amount: 1,
  },
  {
    title: "UI Inspiration",
    summary: "Sofia: I found a reference for the bottom navigation.",
    time: "Sun",
    amount: 12,
  },
  {
    title: "Ava Thompson",
    summary: "Looks great, just reduce the blur a little.",
    time: "Sun",
  },
  {
    title: "Open Source Friends",
    summary: "Daniel: The README should explain the design decisions.",
    time: "Sat",
    amount: 6,
  },
  {
    title: "James Anderson",
    summary: "Let's test this on a smaller mobile viewport.",
    time: "Sat",
  },
  {
    title: "Sophia Lee",
    summary: "The unread badge is finally perfectly round.",
    time: "Fri",
    amount: 4,
  },
  {
    title: "Mobile UI Lab",
    summary: "Grace: We should avoid adding a UI library for this.",
    time: "Fri",
    amount: 9,
  },
  {
    title: "Benjamin Clark",
    summary: "I'll review the component structure tonight.",
    time: "Thu",
  },
  {
    title: "Creative Direction",
    summary: "Keep the interface elegant, light, and close to iOS.",
    time: "Thu",
    amount: 7,
  },
  {
    title: "Charlotte Hall",
    summary: "The search input needs a softer background.",
    time: "Wed",
  },
  {
    title: "Henry Young",
    summary: "Try using a stronger contrast for the timestamps.",
    time: "Wed",
    amount: 2,
  },
  {
    title: "Startup Crew",
    summary: "Liam: The demo is ready for the portfolio section.",
    time: "Tue",
    amount: 18,
  },
  {
    title: "Amelia King",
    summary: "Send me the preview link when it is live.",
    time: "Tue",
  },
  {
    title: "Code Review",
    summary: "Mason: The grid version is cleaner than flex here.",
    time: "Jul 5",
    amount: 11,
  },
  {
    title: "Harper Scott",
    summary: "Nice work on the liquid glass background.",
    time: "Jul 5",
  },
  {
    title: "React Builders",
    summary: "Evelyn: Activity keeps the state without remounting.",
    time: "Jul 4",
    amount: 21,
  },
  {
    title: "Jack Adams",
    summary: "The icon color should come from currentColor.",
    time: "Jul 4",
  },
  {
    title: "Isabella Green",
    summary: "Can we make the chat preview clamp to two lines?",
    time: "Jul 3",
    amount: 1,
  },
  {
    title: "Portfolio Feedback",
    summary: "Mateo: This project shows strong frontend taste.",
    time: "Jul 3",
    amount: 10,
  },
  {
    title: "Elijah Baker",
    summary: "Use fewer tokens and keep the naming semantic.",
    time: "Jul 2",
  },
  {
    title: "Luna Mitchell",
    summary: "The footer tabs feel very close to the native app.",
    time: "Jul 2",
    amount: 3,
  },
  {
    title: "Design Systems",
    summary: "Aria: Primary and muted are enough for most states.",
    time: "Jul 1",
    amount: 16,
  },
  {
    title: "William Turner",
    summary: "Biome is working again after the update.",
    time: "Jul 1",
  },
  {
    title: "Grace Nelson",
    summary: "This would look great in an open source showcase.",
    time: "Jun 30",
    amount: 2,
  },
  {
    title: "iOS Details",
    summary: "Owen: The separator color should be more subtle.",
    time: "Jun 30",
    amount: 13,
  },
  {
    title: "Daniel Perez",
    summary: "Let's keep the avatar placeholder simple for now.",
    time: "Jun 29",
  },
  {
    title: "Weekend Plans",
    summary: "Chloe: Coffee at the usual place?",
    time: "Jun 29",
    amount: 4,
  },
  {
    title: "Mason Rivera",
    summary: "The badge should show 99+ when the count is too high.",
    time: "Jun 28",
  },
  {
    title: "Tailwind Chat",
    summary: "Ella: Custom spacing tokens are working nicely.",
    time: "Jun 28",
    amount: 19,
  },
  {
    title: "Logan Cooper",
    summary: "I like the new rounded search field.",
    time: "Jun 27",
  },
  {
    title: "Friends",
    summary: "Zoe: We are waiting outside.",
    time: "Jun 27",
    amount: 6,
  },
  {
    title: "Nora Bennett",
    summary: "The mock data makes the UI feel more realistic.",
    time: "Jun 26",
  },
  {
    title: "Component Notes",
    summary: "Ryan: Conversation should stay small and readable.",
    time: "Jun 26",
    amount: 5,
  },
  {
    title: "Aiden Brooks",
    summary: "Try reducing the horizontal padding on small screens.",
    time: "Jun 25",
  },
  {
    title: "Glass UI Research",
    summary: "Ivy: SVG filters are optional, CSS blur is enough.",
    time: "Jun 25",
    amount: 15,
  },
  {
    title: "Samuel Price",
    summary: "The chat list scroll feels natural now.",
    time: "Jun 24",
  },
  {
    title: "Launch Prep",
    summary: "Victoria: Add a short project description before publishing.",
    time: "Jun 24",
    amount: 9,
  },
  {
    title: "Leo Foster",
    summary: "Use line-clamp for long summaries.",
    time: "Jun 23",
  },
  {
    title: "Daily Standup",
    summary: "Max: No blockers today, only UI polish.",
    time: "Jun 23",
    amount: 27,
  },
  {
    title: "Sofia Ramirez",
    summary: "The current version already looks portfolio ready.",
    time: "Jun 22",
  },
  {
    title: "WhatsApp Clone Notes",
    summary: "Keep it frontend-only and avoid backend complexity.",
    time: "Jun 22",
    amount: 31,
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
      <Container
        className="scrollbar-none flex gap-x-2 overflow-x-auto whitespace-nowrap"
        asChild
      >
        <section>
          {filters.map((props) => (
            <Filter key={props.children as string} {...props} />
          ))}
          <Filter className="text-white">+</Filter>
        </section>
      </Container>
      <Container asChild>
        <section>
          {conversations.map((props) => (
            <Conversation
              key={props.title + props.summary + props.time}
              {...props}
            />
          ))}
        </section>
      </Container>
    </main>
  );
}

export { Main };
