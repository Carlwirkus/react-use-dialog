import { dialogContext, dialogStateContext } from "./DialogContext";
import { FC, ReactNode, useMemo, useState } from "react";

export type DialogContext = {
  dialogs: Record<string, Dialog>;
  createDialog: (uuid: string, data: DialogInput) => void;
  removeDialog: (uuid: string) => void;
  depth: number;
};

export type Dialog<TParams = any> = {
  Component: FC<TParams>;
  props: TParams;
  isOpen: boolean;
  close: () => void;
  uuid: string;
  resolve?: (value: any) => void;
  reject?: (value: any) => void;
};

export type DialogInput = Omit<Dialog, "close" | "uuid">;

export type DialogState = Omit<Dialog<never>, "props" | "Component"> & {
  depth: number;
};

export function DialogProvider({
  depth = 0,
  children,
}: {
  depth?: number;
  children: ReactNode;
}) {
  const [dialogs, setDialogs] = useState<Record<string, Dialog>>({});

  const value = useMemo(
    () => ({
      depth,
      dialogs,
      createDialog: (uuid: string, data: DialogInput) => {
        setDialogs({
          ...dialogs,
          [uuid]: {
            ...data,
            uuid,
            close: () => {
              setDialogs((value) => ({
                ...value,
                [uuid]: {
                  ...value[uuid],
                  isOpen: false,
                },
              }));
            },
          },
        });
      },
      removeDialog: (uuid: string) => {
        const newDialogs = { ...dialogs };
        delete newDialogs[uuid];
        setDialogs(newDialogs);
      },
    }),
    [dialogs, depth]
  );

  return (
    <dialogContext.Provider value={value}>
      {children}
      {Object.entries(dialogs).map(([uuid, { Component, props, ...rest }]) => {
        return (
          <dialogStateContext.Provider value={{ ...rest, depth }} key={uuid}>
            <Component {...props} />
          </dialogStateContext.Provider>
        );
      })}
    </dialogContext.Provider>
  );
}
