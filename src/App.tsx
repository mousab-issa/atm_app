import "./App.css";
import ATMContainer from "./features/atm/AtmContainer";

import { AtmProvider } from "./features/atm/ATMContext";

function App() {
  return (
    <div>
      <AtmProvider>
        <ATMContainer />
      </AtmProvider>
    </div>
  );
}

export default App;
