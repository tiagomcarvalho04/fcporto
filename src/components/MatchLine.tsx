import type { Match } from "../types";
import { formatKickoff } from "../utils/format";

interface MatchLineProps {
  match: Match;
}

export function MatchLine({ match }: MatchLineProps) {
  const { competition, venue, kickoff, home, away, score } = match;

  return (
    <section>
      <h3>{competition}</h3>
      <p>
        {formatKickoff(kickoff)} · {venue}
      </p>
      <p>
        {home.name} {score ? `${score.home}:${score.away}` : "vs"} {away.name}
      </p>
    </section>
  );
}
