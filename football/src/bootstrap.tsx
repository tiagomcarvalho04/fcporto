import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { theme } from "utilities/theme";
import { MatchdayScreen } from "./screens";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root not found in index.html");
}

createRoot(rootElement).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <MatchdayScreen />
    </MantineProvider>
  </StrictMode>,
);
