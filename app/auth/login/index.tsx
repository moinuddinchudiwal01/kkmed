import Header from '@components/header';
import {
  StyledImage,
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  StyledView,
} from '@components/shared/StyledComponents';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
const LoginScreen = () => {
  const router = useRouter();
  const [phoneNo, setPhoneNo] = useState('');

  const handleLogin = () => {
    if (!phoneNo || phoneNo.length !== 10) {
      ToastAndroid.show(
        'Please enter a valid phone number',
        ToastAndroid.SHORT
      );
      return;
    }
    router.push('/auth/verfiyotp');
  };
  return (
    <StyledScrollView className='px-4 bg-white'>
      {/* Header */}
      <Header title='Login Or Register' />
      <StyledView className='w-full flex flex-col justify-between p-2 mt-10'>
        <StyledView className='flex flex-col gap-5 h-96 justify-end '>
          <StyledImage
            source={require('../../../assets/images/loginLogo.png')}
            className='w-full h-32 rounded-2xl'
          />
          <StyledText className='text-xl font-bold text-center'>
            Enter Your Phone Number
          </StyledText>
          <StyledTextInput
            className='border border-secondary p-3 rounded-lg text-lg'
            placeholder='Enter Your Phone Number'
            keyboardType='numeric'
            onChangeText={(text) => setPhoneNo(text)}
            maxLength={10}
            value={phoneNo}
          />
        </StyledView>

        <StyledTouchableOpacity
          onPress={handleLogin}
          className='bg-secondary py-4 rounded-lg mt-5'
        >
          <StyledText className='text-center text-lg text-white font-semibold'>
            Let Me In
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledScrollView>
  );
};

export default LoginScreen;
