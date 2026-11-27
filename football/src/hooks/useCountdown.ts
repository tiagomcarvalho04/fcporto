import { useEffect, useState } from "react";
import type { CountdownParts } from "@screens";

const TICK_INTERVAL_MS = 1_000;

export function useCountdown(targetIsoDate: string): CountdownParts {
  const [now, setNow] = useState<number>(() => Date.now());

  function getCountdownParts(
    targetIsoDate: string,
    nowMs: number,
  ): CountdownParts {
    const remainingMs = Math.max(0, Date.parse(targetIsoDate) - nowMs);
    const totalSeconds = Math.floor(remainingMs / 1000);

    return {
      days: Math.floor(totalSeconds / 86_400),
      hours: Math.floor((totalSeconds % 86_400) / 3_600),
      minutes: Math.floor((totalSeconds % 3_600) / 60),
      seconds: totalSeconds % 60,
      finished: remainingMs === 0,
    };
  }

  useEffect(() => {
    const intervalId = window.setInterval(
      () => setNow(Date.now()),
      TICK_INTERVAL_MS,
    );
    return () => window.clearInterval(intervalId);
  }, []);

  return getCountdownParts(targetIsoDate, now);
}
