import { Tone } from "@components";
import { Stack, Text } from "@mantine/core";
import { Team } from "@screens";
import { Crest } from "utilities/components";

interface TeamSideProps {
  team: Team;
  tone: Tone;
}

export function TeamSide({ team, tone }: TeamSideProps) {
  return (
    <Stack gap={8} align="center" style={{ flex: 1, minWidth: 0 }}>
      <Crest code={team.code} size={64} highlight={team.code === "FCP"} />
      <Text
        size="sm"
        fw={600}
        ta="center"
        c={tone === "dark" ? "white" : undefined}
      >
        {team.name}
      </Text>
    </Stack>
  );
}
