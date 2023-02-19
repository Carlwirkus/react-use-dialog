import { GenericDialog } from "./GenericDialog";

export function RegularDialog({ title }: { title: string }) {
  return (
    <GenericDialog>
      <div>{title}</div>
    </GenericDialog>
  );
}
