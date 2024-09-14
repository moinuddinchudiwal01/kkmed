import { StyledImage, StyledScrollView, StyledText, StyledTextInput, StyledTouchableOpacity, StyledView } from '@components/shared/StyledComponents';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

const LoginScreen = () => {
  const router = useRouter();
  const [phoneNo, setPhoneNo] = useState('');

  const handleLogin = () => {
    router.push('/auth/verfiyotp');
  }
  return (
    <SafeAreaView >
      <StyledScrollView className="px-4 py-2 bg-white">
          {/* Header */}
          <StyledView className="mt-4">
            <StyledText className="text-xl font-bold text-center">Create Account</StyledText>
          </StyledView>

          <StyledView className='h-[85vh] w-full flex flex-col justify-between p-2 mt-10'>
            <StyledView className="flex flex-col gap-5 h-96 justify-end ">
              <StyledImage source={require('../../../assets/images/splash.png')} className="w-full h-32 rounded-2xl" />
              <StyledText className="text-base font-bold text-center">Enter Your Phone Number</StyledText>
              <StyledTextInput
              className="border border-darkGreen p-3 rounded-lg"
              placeholder="Enter Your Phone Number"
              keyboardType="numeric"
              onChangeText={text => setPhoneNo(text)}
              maxLength={10}
              value={phoneNo}
            />
            </StyledView>
          
            <StyledTouchableOpacity onPress={handleLogin} className="bg-darkGreen py-4 rounded-lg mt-6">
              <StyledText className="text-center text-white font-semibold">Let Me In</StyledText>
            </StyledTouchableOpacity>
          </StyledView>
      </StyledScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
