import { Outlet } from "react-router-dom";
import { Box, Container, Flex, Group, Text } from "@mantine/core";
import { AppHeader } from "./AppHeader";

export function AppLayout() {
  return (
    <Flex direction="column" mih="100vh" bg="#eef2f8">
      <AppHeader />

      <Box style={{ flex: 1 }}>
        <Outlet />
      </Box>

      <Box
        component="footer"
        c="white"
        py="xl"
        style={{
          background: "linear-gradient(90deg, #06152b 0%, #0c3a78 100%)",
          borderTop: "2px solid rgba(43, 143, 224, 0.6)",
        }}
      >
        <Container size="lg">
          <Group justify="space-between" wrap="wrap" gap="md">
            <Text ff="headings" fw={800} tt="uppercase" fz="lg" c="white">
              FC Porto
            </Text>
            <Text size="sm" c="rgba(255, 255, 255, 0.65)">
              Tiago Magalhães Carvalho
            </Text>
          </Group>
        </Container>
      </Box>
    </Flex>
  );
}
