import {
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  StyledView,
} from '@components/shared/StyledComponents';
import React, { useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  SafeAreaView,
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
    }, 1500); // Simulated delay for verification
  };

  return (
    <SafeAreaView>
      <StyledScrollView className='p-5 bg-white'>
        <StyledView className='items-center mb-5'>
          <StyledText className='text-2xl font-bold'>Verify Account</StyledText>
        </StyledView>
        <StyledView className='w-full flex flex-col justify-between p-2 mt-10'>
          <StyledView className='flex flex-col gap-5'>
            <StyledText className='text-lg font-bold text-center'>
              Enter Your OTP
            </StyledText>
            <StyledView className='flex-row justify-around'>
              {Object.values(refs).map((ref, index) => (
                <StyledTextInput
                  ref={ref}
                  key={index}
                  className='border border-secondary p-3 w-12 text-lg text-center rounded-lg'
                  keyboardType='numeric'
                  onChangeText={(text) => handleOtpChange(text, index)}
                  onKeyPress={(event) => handleKeyPress(event, index)}
                  maxLength={1}
                  placeholder='0'
                  value={otp[index]}
                />
              ))}
            </StyledView>
          </StyledView>
          <StyledTouchableOpacity
            className='mt-6 bg-secondary p-2.5 rounded-md'
            onPress={() => handleVerifyOtp(otp)}
            disabled={!otp.every((digit) => digit !== '') || loading} // Disable button during loading or until OTP is filled
          >
            <StyledText className='text-center text-lg text-white font-bold'>
              {loading ? 'Verifying...' : 'Verify OTP'}{' '}
              {/* Show loading text */}
            </StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
