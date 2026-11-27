import { useState } from "react";
import { Checkbox, Stack } from "@mantine/core";
import type { ChecklistItem } from "@screens";

interface MatchdayChecklistProps {
  items: ChecklistItem[];
}

export function MatchdayChecklist({ items }: MatchdayChecklistProps) {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const handleChange = (itemId: string, isChecked: boolean) => {
    setCheckedIds((previous) => ({ ...previous, [itemId]: isChecked }));
  };

  return (
    <Stack gap="sm">
      {items.map((item) => (
        <Checkbox
          key={item.id}
          label={item.label}
          checked={checkedIds[item.id] ?? false}
          onChange={(event) => handleChange(item.id, event.currentTarget.checked)}
        />
      ))}
    </Stack>
  );
}
