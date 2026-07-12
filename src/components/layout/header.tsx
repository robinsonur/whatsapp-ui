import { EllipsisIcon, CameraIcon, PlusIcon } from "lucide-react";
import { Container, IconButton } from "@/components/ui";

function Header() {
  return (
    <header className="fixed w-full top-0">
      <Container className="mt-4 flex gap-x-4">
        <IconButton className="mr-auto">
          <EllipsisIcon />
        </IconButton>
        <IconButton>
          <CameraIcon className="stroke-secondary fill-white" />
        </IconButton>
        <IconButton className="bg-primary border-primary">
          <PlusIcon className="stroke-secondary" />
        </IconButton>
      </Container>
    </header>
  );
}

export { Header };
