import { useEffect, useState } from "react";
import { footballApi } from "@services";
import type { MatchdayData, RequestStatus } from "@screens";

interface MatchdayState {
  status: RequestStatus;
  data: MatchdayData | null;
  error: string | null;
}

const INITIAL_STATE: MatchdayState = {
  status: "loading",
  data: null,
  error: null,
};

export function useMatchday(): MatchdayState {
  const [state, setState] = useState<MatchdayState>(INITIAL_STATE);

  useEffect(() => {
    let isActive = true;

    footballApi
      .getMatchday()
      .then((data) => {
        if (isActive) setState({ status: "success", data, error: null });
      })
      .catch((cause: unknown) => {
        if (!isActive) return;
        const message =
          cause instanceof Error ? cause.message : "Unexpected error";
        setState({ status: "error", data: null, error: message });
      });

    return () => {
      isActive = false;
    };
  }, []);

  return state;
}
