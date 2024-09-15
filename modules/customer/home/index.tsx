import { StyledImage, StyledScrollView, StyledText, StyledTextInput, StyledTouchableOpacity, StyledView } from '@components/shared/StyledComponents';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import React from 'react';
import b1 from '../../../assets/images/b1.png';
import banner from '../../../assets/images/Banner.png';

export default function HomeScreen() {
  return (
    <StyledScrollView className='bg-white'>
      {/* Header Section */}
      <StyledView className="flex-row justify-between gap-2 items-center px-4 py-2 bg-white">
        <StyledTextInput
          placeholder="Search meds or..."
          className="text-gray-700 w-[75%] border-gray-500 border p-3 rounded-xl text-lg"
        />
        <StyledTouchableOpacity className="relative flex flex-row">
          <Link href={'/pages/cart'}>
            <Ionicons name="cart-outline" size={42} color="gray" />
          </Link>
          <Link href={'/pages/notfication'}>
            <Ionicons name="notifications-outline" size={42} color="gray" />
          </Link>
          <StyledView className="absolute top-0 right-0 w-6 h-6 bg-darkGreen rounded-full flex items-center justify-center">
            <StyledText className="text-white text-sm">2</StyledText>
          </StyledView>
        </StyledTouchableOpacity>
      </StyledView>
      {/* track your order */}
      <StyledView className='px-4 py-2 relative'>
        <StyledImage source={b1} className="w-full h-32 rounded-lg" />
        <StyledView className="absolute top-1 left-10 flex flex-col text-white">
          <StyledText className="text-white font-bold text-lg mt-3">
            Track your meds!
          </StyledText>
          <StyledText className="text-white mt-1 text-base">
            Add up to 5 patients for free
          </StyledText>
          <StyledTouchableOpacity className="mt-4 w-20">
            <StyledText className="text-black text-center font-bold bg-white py-1 rounded-lg">
              Click here
            </StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>

      {/* Promotional Banner */}
      <StyledView className="mt-2 px-4">
        {/* <StyledTouchableOpacity className="bg-lightGreen rounded-xl p-4 flex-row justify-between items-center">
          <StyledText className="text-black text-base">Your order is on the way!</StyledText>
          <StyledTouchableOpacity className="bg-darkGreen px-3 py-1 rounded-lg">
            <StyledText className="text-white text-sm py-1">Track order status</StyledText>
          </StyledTouchableOpacity>
        </StyledTouchableOpacity> */}
        <StyledImage source={banner} className="w-full h-36 rounded-lg" />
      </StyledView>

      {/* Products Section */}
      <StyledView className="mt-4 px-4">
        <StyledView className="flex-row justify-between items-center">
          <StyledText className="text-xl font-bold mb-2">New Products</StyledText>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </StyledView>
      </StyledView>
    </StyledScrollView>
  );
}
