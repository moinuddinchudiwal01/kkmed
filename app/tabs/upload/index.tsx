import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
export default function UploadScreen() {
  return (
    <StyledView className='flex-1 justify-center items-center bg-blue-500'>
      <StyledText className='text-white text-lg'>Upload Screen</StyledText>
    </StyledView>
  );
}
