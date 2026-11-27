import { Tone } from "@components";
import { useCountdown } from "@hooks";

export const useCountdownTimerHelper = (targetIsoDate: string, tone: Tone) => {
  const time = useCountdown(targetIsoDate);

  function padTwo(value: number): string {
    return String(value).padStart(2, "0");
  }

  const units = [
    { value: String(time.days), label: "dias" },
    { value: padTwo(time.hours), label: "horas" },
    { value: padTwo(time.minutes), label: "min" },
    { value: padTwo(time.seconds), label: "seg" },
  ];

  const isDark = tone === "dark";

  return { time, units, isDark };
};
