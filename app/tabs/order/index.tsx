import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledSafeAreaView = styled(SafeAreaView);

export default function OrderScreen() {
  return (
    <StyledSafeAreaView className="flex-1 bg-blue-500">
      <StyledView className="flex-1 justify-center items-center">
        <StyledText className="text-white text-lg">Order Screen</StyledText>
      </StyledView>
    </StyledSafeAreaView>
  );
}
