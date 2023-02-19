import { GenericDialog } from "./GenericDialog";
import { useDialog } from "../Hooks/useDialog";
import { useDialogState } from "../Hooks/useDialogState";

export function NestedDialog() {
  const { depth } = useDialogState();

  return (
    <GenericDialog>
      <div className="font-bold">Nested Dialog --- Layer {depth}</div>

      <div className="mt-6">
        <Button />
      </div>
    </GenericDialog>
  );
}

function Button() {
  const { open } = useDialog(NestedDialog);

  return (
    <button
      type="button"
      className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full text-center"
      onClick={() => open({})}
    >
      Open Nested Dialog
    </button>
  );
}
