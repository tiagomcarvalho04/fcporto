// Dados mockados. Substituir por uma fonte real (API) quando existir.
import type { Match, StandingRow, Team } from "../types";

export const FCP: Team = { name: "FC Porto", code: "FCP" };
const SCP: Team = { name: "Sporting CP", code: "SCP" };
const FEY: Team = { name: "Feyenoord", code: "FEY" };

export const lastMatch: Match = {
  id: "ucl-2026-11-24",
  competition: "UEFA Champions League",
  venue: "De Kuip",
  kickoff: "2026-11-24T20:00:00Z",
  home: FEY,
  away: FCP,
  score: { home: 0, away: 1 },
};

export const nextMatch: Match = {
  id: "pl-2026-11-29",
  competition: "Primeira Liga",
  venue: "Estádio do Dragão",
  kickoff: "2026-11-29T20:30:00Z",
  home: FCP,
  away: SCP,
};

export const standings: StandingRow[] = [
  { position: 1, team: "FC Porto", played: 11, wins: 11, points: 33 },
  { position: 2, team: "SL Benfica", played: 11, wins: 9, points: 28 },
  { position: 3, team: "Sporting CP", played: 11, wins: 7, points: 24 },
  { position: 4, team: "Santa Clara", played: 11, wins: 7, points: 21 },
];
