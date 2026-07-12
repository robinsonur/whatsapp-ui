import { CameraIcon, EllipsisIcon, PlusIcon } from "lucide-react";
import { Container, IconButton } from "@/components/ui";

function Header() {
  return (
    <header className="sticky top-4 w-full">
      <Container className="mt-4 flex gap-x-4">
        <IconButton className="mr-auto">
          <EllipsisIcon />
        </IconButton>
        <IconButton>
          <CameraIcon className="fill-white stroke-secondary" />
        </IconButton>
        <IconButton className="border-primary bg-primary">
          <PlusIcon className="stroke-secondary" />
        </IconButton>
      </Container>
    </header>
  );
}

export { Header };
