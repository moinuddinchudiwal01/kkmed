import React from 'react';
import { Text, View } from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function TabTwoScreen() {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('bg-red-500 flex-1 justify-center items-center')}>
      <Text style={tailwind('text-red-200 text-lg')}>
        hello viewer
      </Text>
    </View>
  );
}
