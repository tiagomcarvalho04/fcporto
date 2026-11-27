import { Stack, Text, Title } from "@mantine/core";

export interface SectionHeaderProps {
  eyebrow: string;
  title: string;
}

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <Stack gap={4}>
      <Text size="xs" fw={700} tt="uppercase" c="fcp.6">
        {eyebrow}
      </Text>
      <Title order={2}>{title}</Title>
    </Stack>
  );
}
