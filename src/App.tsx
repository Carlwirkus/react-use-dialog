import { DialogProvider } from "./Lib/Dialog/Providers/DialogProvider";
import { Home } from "./Pages/Home";

function App() {
  return (
    <DialogProvider>
      <Home />
    </DialogProvider>
  );
}

export default App;
