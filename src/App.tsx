import { BrowserRouter } from "react-router-dom";
import { Global, ThemeProvider } from "@emotion/react";
import reset from "@styles/reset";
import theme from "@styles/theme";
import RootNavigation from "@routes/RootNavigation";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <RootNavigation />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
