import { getAsyncStorageItem } from 'core/utils/utils';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';

const RootLayout = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);

    const checkToken = async () => {
      const token = await getAsyncStorageItem('userToken');
      if (isMounted) {
        if (token) {
          router.replace('/tabs/home');
        } else {
          router.replace('/auth/login');
        }
      }
      setIsLoading(false);
    };

    if (isLoading) {
      setTimeout(() => { 
        checkToken();
      }, 1500);
    }

    return () => setIsMounted(false);
  }, [isLoading, isMounted]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
