export interface Team {
  name: string;
  code: string;
}

export interface MatchScore {
  home: number;
  away: number;
}

export interface Match {
  id: string;
  competition: string;
  venue: string;
  /** Data e hora em ISO 8601 (UTC). */
  kickoff: string;
  home: Team;
  away: Team;
  score?: MatchScore;
}

export interface StandingRow {
  position: number;
  team: string;
  played: number;
  wins: number;
  points: number;
}
