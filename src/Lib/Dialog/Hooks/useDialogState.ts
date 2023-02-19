import { useContext } from "react";
import { dialogStateContext } from "../Providers/DialogContext";

export function useDialogState() {
  return useContext(dialogStateContext);
}
