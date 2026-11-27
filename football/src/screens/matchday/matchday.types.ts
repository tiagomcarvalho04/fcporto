export type RequestStatus = "loading" | "success" | "error";

export type Team = {
  name: string;
  code: string;
}

export type MatchScore = {
  home: number;
  away: number;
}

export type Match = {
  id: string;
  competition: string;
  venue: string;
  kickoff: string;
  home: Team;
  away: Team;
  score: MatchScore | null;
}

export type StandingRow = {
  position: number;
  team: string;
  played: number;
  wins: number;
  points: number;
  isClub: boolean;
}

export type ChecklistItem = {
  id: string;
  label: string;
}

export type MatchdayData = {
  lastMatch: Match;
  nextMatch: Match;
  standings: StandingRow[];
  checklist: ChecklistItem[];
}

export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
}
