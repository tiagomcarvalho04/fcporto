import { createTheme, type MantineColorsTuple } from "@mantine/core";

const BODY_FONT =
  '"Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", sans-serif';
const HEADING_FONT = '"Plus Jakarta Sans", system-ui, sans-serif';

const fcp: MantineColorsTuple = [
  "#e6f0fb",
  "#c2d9f3",
  "#9bc0ea",
  "#70a5e1",
  "#4a8dd8",
  "#2b78cf",
  "#0c4fa6",
  "#0a417f",
  "#083364",
  "#06254a",
];

export const theme = createTheme({
  primaryColor: "fcp",
  colors: { fcp },
  defaultRadius: "md",
  fontFamily: BODY_FONT,
  headings: { fontFamily: HEADING_FONT, fontWeight: "700" },
});
