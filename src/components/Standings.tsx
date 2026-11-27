import type { StandingRow } from "../types";

interface StandingsProps {
  rows: StandingRow[];
}

export function Standings({ rows }: StandingsProps) {
  return (
    <table border={1} cellPadding={2}>
      <thead>
        <tr>
          <th>#</th>
          <th>Equipa</th>
          <th>J</th>
          <th>V</th>
          <th>PT</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.team}>
            <td>{row.position}</td>
            <td>{row.team}</td>
            <td>{row.played}</td>
            <td>{row.wins}</td>
            <td>{row.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
