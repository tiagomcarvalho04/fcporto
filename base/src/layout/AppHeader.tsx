import { Anchor, Box, Container, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { Crest, ProfileBadge } from "utilities/components";
import { CURRENT_MEMBER, ROUTE_PATHS } from "@config";

export function AppHeader() {
  return (
    <Box
      component="header"
      c="white"
      py="sm"
      style={{
        background: "linear-gradient(90deg, #06152b 0%, #0c3a78 100%)",
        borderBottom: "2px solid rgba(43, 143, 224, 0.6)",
      }}
    >
      <Container size="lg">
        <Group justify="space-between" wrap="nowrap">
          <Group gap="sm" wrap="nowrap">
            <Crest code="FCP" size={40} highlight />
            <Text ff="headings" fw={800} tt="uppercase" fz="xl" c="white">
              FC Porto
            </Text>
          </Group>

          <Group gap="xl" wrap="nowrap">
            <Anchor
              component={Link}
              to={ROUTE_PATHS.matchday}
              underline="never"
              fw={600}
              c="white"
            >
              Dia de jogo
            </Anchor>
            <ProfileBadge
              name={CURRENT_MEMBER.name}
              memberNumber={CURRENT_MEMBER.memberNumber}
              avatarSrc={CURRENT_MEMBER.avatarSrc}
            />
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
