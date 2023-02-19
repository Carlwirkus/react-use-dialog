import { useDialog } from "../Lib/Dialog/Hooks/useDialog";
import { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { RegularDialog } from "../Lib/Dialog/Components/RegularDialog";
import { FormDialog } from "../Lib/Dialog/Components/FormDialog";
import { NestedDialog } from "../Lib/Dialog/Components/NestedDialog";

export function Home() {
  const { open, openAsPromise } = useDialog(RegularDialog);
  const { openAsPromise: formDialogOpen } = useDialog(FormDialog);
  const { open: openNestedDialog } = useDialog(NestedDialog);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  return (
    <div className="flex items-center flex-col space-y-6 mt-6">
      <button
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        type="button"
        onClick={() =>
          open({
            title: "asd",
          })
        }
      >
        open
      </button>

      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={async () => {
          setIsLoading(true);
          try {
            const res = await openAsPromise({
              title: "asd",
            });

            setIsLoading(false);
          } catch (e) {
            setIsLoading(false);
          }
        }}
      >
        open as promise{" "}
        {isLoading && <ArrowPathIcon className="animate-spin " />}
      </button>

      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={async () => {
          setIsLoading2(true);
          try {
            const res = await formDialogOpen({});
            console.log("resolved", res);
          } catch (e) {
            console.log("rejected");
          } finally {
            setIsLoading2(false);
          }
        }}
      >
        open with form
        {isLoading2 && <ArrowPathIcon className="animate-spin " />}
      </button>

      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={async () => openNestedDialog({})}
      >
        open nested dialog
      </button>
    </div>
  );
}
