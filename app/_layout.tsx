import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';

export default function RootLayout() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const checkToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
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
}
