import { Stack } from "expo-router";
import TestIcon from "../components/TestIcon";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Social monster app",
          headerLeft: () => <TestIcon />,
        }}
      />
      <Stack.Screen
        name="allMonsterProfiles"
        options={{
          headerTitle: "Monster profiles",
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
