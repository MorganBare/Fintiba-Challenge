
import { GlobalStyle } from "./styles/GlobalReset";

import { Check_IBAN } from "./components";

import { IBAN_PROVIDER } from "./context/IBAN_Context";

function App() {

  return (
    <IBAN_PROVIDER>
      <GlobalStyle/>
      <Check_IBAN/>
    </IBAN_PROVIDER>
  );
}

export default App;
