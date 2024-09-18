import { styled } from 'nativewind';
import React from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);

export default function UploadPrescriptionScreen() {
  return (
    <StyledScrollView className='px-4 py-2 bg-white'>
      {/* Header */}
      <StyledView className='flex-row items-center mb-4 px-4 py-2 bg-white'>
        <StyledText className='ml-2 text-xl font-bold text-black'>
          UPLOAD PRESCRIPTION
        </StyledText>
      </StyledView>
      {/* Upload Section */}
      <StyledText className='text-lg font-semibold text-secondary mb-2'>
        Have a Prescription?
      </StyledText>
      <StyledTouchableOpacity className='bg-primary rounded-lg p-4 mb-4'>
        <StyledText className='text-secondary text-center font-bold'>
          UPLOAD PRESCRIPTION
        </StyledText>
      </StyledTouchableOpacity>

      {/* Information Section */}
      <StyledView className='flex-row items-center mb-4'>
        <Ionicons name='shield-checkmark-outline' size={28} color='#1e90ff' />
        <StyledText className='ml-2 text-sm text-black'>
          Your Attached Prescription will be secure and Private.
        </StyledText>
      </StyledView>

      {/* Why Upload a Prescription Section */}
      <StyledText className='text-lg font-semibold text-black mb-2'>
        Why Upload a Prescription?
      </StyledText>
      <StyledView className='space-y-2 mb-4'>
        <StyledView className='flex-row items-start'>
          <Ionicons name='document-text-outline' size={24} color='black' />
          <StyledText className='ml-2 text-sm text-black'>
            Never Lose the Digital Copy of your Prescription. It will be with
            you wherever you go.
          </StyledText>
        </StyledView>
        <StyledView className='flex-row items-start'>
          <Ionicons name='medkit-outline' size={24} color='black' />
          <StyledText className='ml-2 text-sm text-black'>
            Tata labs specialist will help you.
          </StyledText>
        </StyledView>
        <StyledView className='flex-row items-start'>
          <Ionicons name='lock-closed-outline' size={24} color='black' />
          <StyledText className='ml-2 text-sm text-black'>
            Details from your Prescription are not shared with any third Party.
          </StyledText>
        </StyledView>
      </StyledView>

      {/* Prescription Validation Link */}
      <StyledTouchableOpacity className='mb-4'>
        <StyledText className='text-blue-600 underline text-sm'>
          What is a Valid Prescription?
        </StyledText>
      </StyledTouchableOpacity>

      {/* Promotion Section */}
      <StyledView className='bg-white rounded-lg shadow-md mb-4 p-1'>
        <StyledImage
          source={require('@assets/images/painAdd.png')}
          className='w-full h-[170px] rounded-lg mb-2'
        />
      </StyledView>
    </StyledScrollView>
  );
}
