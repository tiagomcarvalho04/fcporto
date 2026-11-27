import { Table } from "@mantine/core";
import type { StandingRow } from "@screens";

interface StandingsTableProps {
  rows: StandingRow[];
}

export function StandingsTable({ rows }: StandingsTableProps) {
  return (
    <Table verticalSpacing="xs" highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>#</Table.Th>
          <Table.Th>Equipa</Table.Th>
          <Table.Th ta="right">J</Table.Th>
          <Table.Th ta="right">V</Table.Th>
          <Table.Th ta="right">P</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows.map((row) => (
          <Table.Tr
            key={row.team}
            bg={row.isClub ? "fcp.0" : undefined}
            c={row.isClub ? "fcp.7" : undefined}
            fw={row.isClub ? 700 : 400}
          >
            <Table.Td>{row.position}</Table.Td>
            <Table.Td>{row.team}</Table.Td>
            <Table.Td ta="right">{row.played}</Table.Td>
            <Table.Td ta="right">{row.wins}</Table.Td>
            <Table.Td ta="right">{row.points}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
