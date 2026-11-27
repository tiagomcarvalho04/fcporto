import { Avatar, Group, Stack, Text } from "@mantine/core";

export interface ProfileBadgeProps {
  name: string;
  memberNumber: string;
  avatarSrc?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter((part) => part.length > 0)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export function ProfileBadge({
  name,
  memberNumber,
  avatarSrc,
}: ProfileBadgeProps) {
  return (
    <Group gap="xs" wrap="nowrap">
      <Avatar src={avatarSrc} alt={name} color="fcp" radius="xl" size={40}>
        {getInitials(name)}
      </Avatar>
      <Stack gap={0}>
        <Text size="sm" fw={600} lh={1.2} c="inherit">
          {name}
        </Text>
        <Text size="xs" c="dimmed">
          Sócio nº {memberNumber}
        </Text>
      </Stack>
    </Group>
  );
}
