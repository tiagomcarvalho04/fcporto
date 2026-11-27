import { Countdown } from "./components/Countdown";
import { MatchLine } from "./components/MatchLine";
import { Standings } from "./components/Standings";
import { lastMatch, nextMatch, standings } from "./data/matchData";

export default function App() {
  return (
    <div>
      <h1>FC Porto</h1>
      <p>futebol - clube - noticias - bilhetes - socios - dar feedback</p>
      <hr />

      <h2>Próximo jogo</h2>
      <MatchLine match={nextMatch} />
      <Countdown target={nextMatch.kickoff} />

      <h2>Último jogo</h2>
      <MatchLine match={lastMatch} />

      <h2>Classificação</h2>
      <Standings rows={standings} />

      <hr />
    </div>
  );
}
