import { GenericDialog } from "./GenericDialog";
import { useState } from "react";
import { useDialogState } from "../Hooks/useDialogState";

export function FormDialog() {
  const [val, setVal] = useState("");
  const { resolve, close } = useDialogState();

  return (
    <GenericDialog>
      <div className="font-bold">Form Dialog</div>
      <div className="mt-6">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Text will be logged to the console
        </label>
        <div className="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
            placeholder="Text to be resolved"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="inline-flex w-full mt-2 items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => {
            close();
            resolve?.(val);
          }}
        >
          Resolve "{val}"
        </button>
      </div>
    </GenericDialog>
  );
}
