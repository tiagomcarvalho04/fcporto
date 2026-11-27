import { useCrestHelper } from "./Crest.helper";

export interface CrestProps {
  code: string;
  size?: number;
  highlight?: boolean;
}

export function Crest({ code, size = 48, highlight = false }: CrestProps) {
  const { CREST_IMAGES, badgeStyle } = useCrestHelper(highlight, size);
  const imageSrc = CREST_IMAGES[code];

  if (imageSrc) {
    return (
      <span
        role="img"
        aria-label={code}
        style={{ ...badgeStyle, background: "#ffffff" }}
      >
        <img
          src={imageSrc}
          alt=""
          style={{ width: "76%", height: "76%", objectFit: "contain" }}
        />
      </span>
    );
  }

  return (
    <span
      role="img"
      aria-label={code}
      style={{
        ...badgeStyle,
        fontFamily: "var(--mantine-font-family-headings)",
        fontWeight: 800,
        fontSize: size * 0.32,
        color: highlight ? "#ffffff" : "#0b1b2e",
      }}
    >
      {code}
    </span>
  );
}
