import { useMatchday } from "@hooks";

export const useMatchdayHelper = () => {
  const HERO_BACKGROUND = [
    "repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.03) 0 2px, transparent 2px 28px)",
    "radial-gradient(800px 320px at 90% -10%, rgba(43, 143, 224, 0.55), transparent 60%)",
    "linear-gradient(120deg, #06152b 0%, #0c3a78 60%, #0a2a57 100%)",
  ].join(", ");
  const FEATURED_BACKGROUND =
    "linear-gradient(145deg, #0c4fa6 0%, #06254a 100%)";
  const CARD_PROPS = {
    withBorder: true,
    radius: "lg",
    p: "xl",
    shadow: "sm",
    bg: "white",
  } as const;

  const { status, data, error } = useMatchday();

  return {
    HERO_BACKGROUND,
    FEATURED_BACKGROUND,
    CARD_PROPS,
    status,
    data,
    error,
  };
};
