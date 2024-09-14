import { Stack, usePathname, useRouter } from 'expo-router';
import React, { useEffect } from 'react';

const RootLayout = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      router.replace('/tabs/home');
    }
  }, [pathname, router]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='tabs'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default RootLayout;
