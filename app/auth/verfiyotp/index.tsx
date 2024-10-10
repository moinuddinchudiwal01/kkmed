import {
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  StyledView,
} from '@components/shared/StyledComponents';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';

const LoginScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false); // Added for loading state

  // Correctly typed refs
  const input1 = useRef<TextInput>(null);
  const input2 = useRef<TextInput>(null);
  const input3 = useRef<TextInput>(null);
  const input4 = useRef<TextInput>(null);

  const refs = { input1, input2, input3, input4 };

  // Function to handle OTP input change
  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus to the next input if typing (i.e., not deleting)
    if (text.length === 1 && index < 3) {
      const nextInput = `input${index + 2}` as keyof typeof refs;
      refs[nextInput].current?.focus();
    }

    // Auto-submit OTP when all fields are filled
    if (newOtp.every((digit) => digit !== '')) {
      handleVerifyOtp(newOtp);
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (event.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];

      // If the current input has a value, clear it but stay on the current input
      if (newOtp[index]) {
        newOtp[index] = ''; // Clear the current value
        setOtp(newOtp);
      }
      // If the current input is empty, move to the previous input and clear it
      else if (index > 0) {
        const prevInput = `input${index}` as keyof typeof refs;
        newOtp[index - 1] = ''; // Clear the previous value
        setOtp(newOtp);
        refs[prevInput].current?.focus(); // Focus the previous input
      }
    }
  };

  const handleVerifyOtp = (newOtp: string[]) => {
    setLoading(true); // Set loading state to true
    console.log('OTP Verified:', newOtp.join(''));
    setTimeout(() => {
      setLoading(false);
      router.push('/tabs/home');
    }, 1500);
  };

  return (
    <StyledScrollView className='bg-dark relative flex flex-col'>
      <StyledView className='w-full flex flex-col justify-between p-3 mt-10'>
        <StyledView className='flex flex-col gap-8'>
          <StyledView>
            <StyledText className='text-lg font-bold text-center text-light'>
              Enter the code sent to
            </StyledText>
            <StyledText className='text-lg font-bold text-center text-white'>
              +91 000000000
            </StyledText>
          </StyledView>

          <StyledView className='flex-row justify-around'>
            {Object.values(refs).map((ref, index) => (
              <StyledTextInput
                ref={ref}
                key={index}
                className='border border-borderColor bg-secondary-dark p-3 w-14 h-14 text-lg text-center rounded-md text-light'
                keyboardType='numeric'
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(event) => handleKeyPress(event, index)}
                maxLength={1}
                value={otp[index]}
              />
            ))}
          </StyledView>

          <StyledTouchableOpacity
            className='self-center'
            onPress={() => console.log('Resend OTP')}
          >
            <StyledText className='text-center text-lg text-light'>
              Didn’t receive the code?{' '}
              <StyledText className='underline text-white'>Resend</StyledText>
            </StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>

      <StyledView className='mr-8 relative h-[570px]'>
        <StyledTouchableOpacity
          className='bg-primary p-4 ml-4 rounded-md w-full absolute bottom-0'
          onPress={() => handleVerifyOtp(otp)}
          disabled={!otp.every((digit) => digit !== '') || loading} // Disable button during loading or until OTP is filled
        >
          <StyledText className='text-center text-lg text-dark font-bold'>
            {loading ? 'Verifying...' : 'Verify Me'}
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledScrollView>
  );
};

export default LoginScreen;
