import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'expo-router';

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      router.replace('/tabs/home');
    }
  }, [pathname]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="tabs"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
