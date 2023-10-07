import { PrimeReactProvider } from "primereact/api";
import { Chat } from "./pages/chat/chat";

import "./App.scss";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <PrimeReactProvider>
      <Chat />
    </PrimeReactProvider>
  );
}

export default App;
