import { Group, Stack, Text } from "@mantine/core";
import type { Match } from "@screens";
import { TeamSide } from "./components";
import { useMatchCardHelper } from "./MatchCard.helper";
import { Tone } from "@components";

interface MatchCardProps {
  match: Match;
  label: string;
  tone?: Tone;
}

export function MatchCard({ match, label, tone = "light" }: MatchCardProps) {
  const { mutedColor, primaryColor, formatKickoff, formatScore } =
    useMatchCardHelper(tone);

  return (
    <Stack gap="sm">
      <Text size="xs" fw={700} tt="uppercase" c={primaryColor}>
        {label}
      </Text>
      <Text size="sm" c={mutedColor}>
        {match.competition}
      </Text>
      <Group justify="space-between" align="center" wrap="nowrap">
        <TeamSide team={match.home} tone={tone} />
        <Text
          ff="headings"
          fw={800}
          fz={64}
          lh={1}
          tt="uppercase"
          c={primaryColor}
        >
          {formatScore(match.score)}
        </Text>
        <TeamSide team={match.away} tone={tone} />
      </Group>
      <Text size="sm" c={mutedColor} ta="center">
        {formatKickoff(match.kickoff)} · {match.venue}
      </Text>
    </Stack>
  );
}
