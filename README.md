# React Use Dialog

An example of how you can construct a hook to invoke dialogs in React.

## Features

- Invoke a dialog component with minimal code
- Dialogs can be invoked as a promise (useful for forms)
- Supports nested dialogs (dialog can invoke another dialog)
- Access to a depth property (useful for styling)


## Usage

```js
  const { open, openAsPromise } = useDialog(RegularDialog);


    // open the dialog
    open({ title: 'Hello World' });
    
    
    //open the dialog and wait for a response
    const response = await openAsPromise({ title: 'Hello World' });
```


## Dialog Component

```js
  const RegularDialog = ({ title }) => {
    const { isOpen, depth, close, uuid, reject, resolve} = useDialogState();
    
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={() => close()}>Close</button>
      </div>
    );
  };
```