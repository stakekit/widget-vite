import "@stakekit/widget/package/css";
import { SKApp, darkTheme } from "@stakekit/widget";
import { config } from "./config";

function App() {
  return (
    <SKApp
      theme={darkTheme}
      connectKitForceTheme="darkMode"
      apiKey={config.apiKey}
    />
  );
}

export default App;
