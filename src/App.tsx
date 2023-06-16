import "./App.css";
import ATMContainer from "./features/atm/components/AtmContainer";
import { AtmProvider } from "./features/atm/store/ATMContext";

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
