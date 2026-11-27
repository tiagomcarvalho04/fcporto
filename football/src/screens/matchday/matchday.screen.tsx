import {
  Alert,
  Box,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { SectionHeader } from "utilities/components";
import { CountdownTimer } from "@components";
import { MatchCard } from "@components";
import { MatchdayChecklist } from "@components";
import { StandingsTable } from "@components";
import { useMatchdayHelper } from "./matchday.helper";

export function MatchdayScreen() {
  const {
    HERO_BACKGROUND,
    FEATURED_BACKGROUND,
    CARD_PROPS,
    status,
    data,
    error,
  } = useMatchdayHelper();

  if (status === "loading") {
    return (
      <Container size="lg" py="xl">
        <Skeleton h={320} radius="lg" />
      </Container>
    );
  }

  if (status === "error" || data === null) {
    return (
      <Container size="lg" py="xl">
        <Alert color="red" title="Erro">
          Não foi possível carregar o dia de jogo. Tente novamente mais tarde.
          {error ? ` (${error})` : null}
        </Alert>
      </Container>
    );
  }

  const { lastMatch, nextMatch, standings, checklist } = data;

  return (
    <Box>
      <Box bg={HERO_BACKGROUND} c="white" pt={56} pb={110}>
        <Container size="lg">
          <Group gap="sm" mb="xs">
            <Box w={32} h={3} bg="fcp.3" />
            <Text size="sm" fw={700} tt="uppercase" c="fcp.2">
              Futebol · {nextMatch.competition}
            </Text>
          </Group>
          <Title
            order={1}
            ff="headings"
            fz={{ base: 44, sm: 76 }}
            lh={0.95}
            c="white"
          >
            {nextMatch.home.name} vs {nextMatch.away.name}
          </Title>
        </Container>
      </Box>

      <Container size="lg" mt={-64} pb={80}>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          <Paper {...CARD_PROPS}>
            <MatchCard match={lastMatch} label="Último jogo" />
          </Paper>

          <Paper {...CARD_PROPS}>
            <Title order={3} mb="md">
              Classificação
            </Title>
            <StandingsTable rows={standings} />
          </Paper>

          <Paper
            radius="lg"
            p="xl"
            shadow="lg"
            bg={FEATURED_BACKGROUND}
            c="white"
          >
            <Stack gap="xl">
              <MatchCard match={nextMatch} label="Próximo jogo" tone="dark" />
              <CountdownTimer targetIsoDate={nextMatch.kickoff} tone="dark" />
            </Stack>
          </Paper>
        </SimpleGrid>

        <Stack gap="md" mt={64}>
          <SectionHeader eyebrow="Antes do apito" title="Dia de jogo" />
          <Paper {...CARD_PROPS} maw={520}>
            <MatchdayChecklist items={checklist} />
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
