import { FC, useContext, useEffect, useState } from "react";
import { dialogContext } from "../Providers/DialogContext";
import { v4 as uuidv4 } from "uuid";

export function useDialog<P>(dialog: FC<P>) {
  const [uuid] = useState(uuidv4());
  const { createDialog, removeDialog } = useContext(dialogContext);

  const open = (props: P) => {
    createDialog(uuid, {
      Component: dialog,
      isOpen: true,
      props,
    });
  };

  const openAsPromise = async (props: P) => {
    return new Promise((resolve, reject) => {
      createDialog(uuid, {
        Component: dialog,
        props,
        resolve,
        reject,
        isOpen: true,
      });
    });
  };

  useEffect(() => {
    return () => {
      removeDialog(uuid);
    };
  }, []);

  return { open, openAsPromise };
}
