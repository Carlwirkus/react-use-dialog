import { createContext } from "react";
import { DialogContext, DialogState } from "./DialogProvider";

export const dialogContext = createContext<DialogContext>(null!);
export const dialogStateContext = createContext<DialogState>(null!);
