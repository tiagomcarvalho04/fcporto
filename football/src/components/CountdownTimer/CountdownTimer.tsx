import { Paper, SimpleGrid, Text } from "@mantine/core";
import { useCountdownTimerHelper } from "./CountdownTimer.helper";
import { Tone } from "@components";

interface CountdownTimerProps {
  targetIsoDate: string;
  tone?: Tone;
}

export function CountdownTimer({
  targetIsoDate,
  tone = "light",
}: CountdownTimerProps) {
  const { time, units, isDark } = useCountdownTimerHelper(targetIsoDate, tone);

  if (time.finished) {
    return (
      <Text fw={700} ta="center" c={isDark ? "white" : undefined}>
        O jogo está a decorrer
      </Text>
    );
  }

  return (
    <SimpleGrid cols={4} spacing="xs">
      {units.map((unit) => (
        <Paper
          key={unit.label}
          p="sm"
          ta="center"
          radius="md"
          bg={isDark ? "rgba(255, 255, 255, 0.12)" : "white"}
          withBorder={!isDark}
        >
          <Text
            ff="headings"
            fw={800}
            fz={36}
            lh={1}
            c={isDark ? "white" : undefined}
          >
            {unit.value}
          </Text>
          <Text
            size="xs"
            tt="uppercase"
            c={isDark ? "rgba(255, 255, 255, 0.7)" : "dimmed"}
          >
            {unit.label}
          </Text>
        </Paper>
      ))}
    </SimpleGrid>
  );
}
