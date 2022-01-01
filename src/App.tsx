import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { ReactElement } from "react";
import theme from "./theme";

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
