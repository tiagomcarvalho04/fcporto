import { fcpCrest, scpCrest, feyCrest } from "@assets";
import { CSSProperties } from "react";

export function useCrestHelper(highlight: boolean, size: number) {
  const CREST_IMAGES: Record<string, string> = {
    FCP: fcpCrest,
    SCP: scpCrest,
    FEY: feyCrest,
  };

  const badgeStyle: CSSProperties = {
    width: size,
    height: size,
    flexShrink: 0,
    display: "grid",
    placeItems: "center",
    borderRadius: "50%",
    background: highlight ? "var(--mantine-color-fcp-6)" : "#ffffff",
    border: highlight ? "2px solid #ffffff" : "1px solid #e4e7ec",
    boxShadow: "0 2px 8px rgba(6, 21, 43, 0.18)",
    overflow: "hidden",
  };

  return { CREST_IMAGES, badgeStyle };
}
