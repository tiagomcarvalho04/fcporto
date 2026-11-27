import { Tone } from "@components";
import { MatchScore } from "@screens";

export const useMatchCardHelper = (tone: Tone) => {
  const DISPLAY_TIME_ZONE = "Europe/Lisbon";

  const kickoffFormatter = new Intl.DateTimeFormat("pt-PT", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: DISPLAY_TIME_ZONE,
  });

  const isDark = tone === "dark";
  const mutedColor = isDark ? "rgba(255, 255, 255, 0.7)" : "dimmed";
  const primaryColor = isDark ? "white" : undefined;

  function formatKickoff(isoDate: string): string {
    const formatted = kickoffFormatter.format(new Date(isoDate));
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }

  function formatScore(score: MatchScore | null): string {
    return score ? `${score.home} : ${score.away}` : "vs";
  }

  return { mutedColor, primaryColor, formatKickoff, formatScore };
};
