import type { MatchdayData } from "@screens";

/*
 * Simulated REST-style client for the football service.
 * Data is mocked.
 */

const API_BASE_URL = "/api/v1";
const SIMULATED_LATENCY_MS = 600;

const ENDPOINTS = {
  matchday: "/matchday",
} as const;

const FCP = { name: "FC Porto", code: "FCP" } as const;
const SCP = { name: "Sporting CP", code: "SCP" } as const;
const FEY = { name: "Feyenoord", code: "FEY" } as const;

const MOCK_MATCHDAY: MatchdayData = {
  lastMatch: {
    id: "ucl-2026-11-24",
    competition: "UEFA Champions League",
    venue: "De Kuip",
    kickoff: "2026-11-24T20:00:00Z",
    home: FEY,
    away: FCP,
    score: { home: 0, away: 1 },
  },
  nextMatch: {
    id: "pl-2026-11-29",
    competition: "Primeira Liga",
    venue: "Estádio do Dragão",
    kickoff: "2026-11-29T20:30:00Z",
    home: FCP,
    away: SCP,
    score: null,
  },
  standings: [
    { position: 1, team: "FC Porto", played: 11, wins: 11, points: 33, isClub: true },
    { position: 2, team: "SL Benfica", played: 11, wins: 9, points: 28, isClub: false },
    { position: 3, team: "Sporting CP", played: 11, wins: 7, points: 24, isClub: false },
    { position: 4, team: "Santa Clara", played: 11, wins: 7, points: 21, isClub: false },
  ],
  checklist: [
    { id: "ticket", label: "Bilhete no telemóvel" },
    { id: "scarf", label: "Cachecol ao pescoço" },
    { id: "arrive", label: "Chegar ao Dragão antecipadamente" },
    { id: "anthem", label: "Vozes afinadas para o hino" },
  ],
};

function mockResponse<T>(payload: T): Promise<T> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(payload), SIMULATED_LATENCY_MS);
  });
}

export const footballApi = {
  getMatchday(): Promise<MatchdayData> {
    return mockResponse(MOCK_MATCHDAY);
  },
} as const;

export { API_BASE_URL, ENDPOINTS };
