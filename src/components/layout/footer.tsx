import { Container } from "@/components/ui/container";
import { MessageCircleIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="fixed w-full bottom-0">
      <Container className="mb-4 flex gap-x-4 backdrop-blur-2xs bg-secondary-muted/95 px-4 py-1 rounded-3xl">
        <button type="button" className="justify-items-center px-5 rounded-full py-1.5">
          <MessageCircleIcon className="fill-white" />
          <span>Chats</span>
        </button>
      </Container>
    </footer>
  );
}

export { Footer };
