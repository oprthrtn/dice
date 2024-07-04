import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoute } from "./routes";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { themeValues } from "./styles/themeValues";
import { GlobalStyles } from "./styles/global";
import { DiceGameProvider } from "shared/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={(name) => !name.startsWith("$")}>
      <ThemeProvider theme={themeValues}>
        <GlobalStyles />
        <DiceGameProvider initialBalance={100}>
          <AppRoute />
        </DiceGameProvider>
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>
);
