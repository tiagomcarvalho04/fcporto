import { Button, Container, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "@config";

export function NotFoundScreen() {
  return (
    <Container size="sm" py={96}>
      <Stack align="center" gap="md" ta="center">
        <Text ff="headings" fw={800} fz={128} lh={1} c="fcp.6">
          404
        </Text>
        <Title order={2}>Este lance saiu fora do campo</Title>
        <Text c="dimmed">
          A página que procura não existe ou foi movida. Não se preocupe: o jogo do dia continua
          no Dragão.
        </Text>
        <Button component={Link} to={ROUTE_PATHS.matchday} color="fcp" size="md" mt="md">
          Ir para o dia de jogo
        </Button>
      </Stack>
    </Container>
  );
}
