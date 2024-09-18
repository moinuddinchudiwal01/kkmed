import { StyledScrollView, StyledText, StyledTextInput, StyledTouchableOpacity, StyledView } from '@components/shared/StyledComponents';
import React, { useRef, useState } from 'react';
import { NativeSyntheticEvent, SafeAreaView, TextInput, TextInputKeyPressEventData } from 'react-native';

const LoginScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  // Correctly typed refs
  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);
  const input4 = useRef<TextInput>(null);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus logic
    if (text.length === 1 && index < 3) {
      const nextInput = `input${index + 2}` as keyof typeof refs;
      refs[nextInput].current?.focus();
    }
  };

  const handleKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && !otp[index]) {
      const prevInput = `input${index}` as keyof typeof refs;
      if (index > 0) refs[prevInput].current?.focus();
    }
  };

  // Refs dictionary to handle dynamic reference access
  const refs = { input1, input2, input3, input4 };

  return (
    <SafeAreaView>
      <StyledScrollView className="p-5 bg-white">
        <StyledView className="items-center mb-5">
          <StyledText className="text-2xl font-bold">Verify Account</StyledText>
        </StyledView>
        <StyledView className='h-[80vh] w-full flex flex-col justify-between p-2 mt-10'>
          <StyledView className='flex flex-col gap-5'>
          <StyledText className="text-base font-bold text-center">Enter Your OTP</StyledText>
        <StyledView className="flex-row justify-around">
          {Object.values(refs).map((ref, index) => (
            <StyledTextInput
              ref={ref}
              className="border border-secondary p-3 w-12 text-center rounded-lg"
              keyboardType="numeric"
              onChangeText={(text) => handleOtpChange(text, index)}
              onKeyPress={(event) => handleKeyPress(event, index)}
              maxLength={1}
              placeholder="0"
              value={otp[index]}
            />
          ))}
        </StyledView>
          </StyledView>
        <StyledTouchableOpacity className="mt-5 bg-secondary p-2.5 rounded-md">
          <StyledText className="text-center text-white font-bold">Verify Otp</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
