import { styled } from 'nativewind';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);

interface Props {
  onClose: () => void;
}
const DeliveryInformation = ({ onClose }: Props) => {
  return (
    <StyledView className='border-black border rounded-t-3xl p-1 '>
      <StyledView className='bg-white h-full rounded-xl p-5'>
        {/* Header */}
        <StyledView className='flex-row items-center justify-between gap-5 mb-4'>
          <StyledText className='text-xl text-center font-bold text-black'>
            Delivery Information
          </StyledText>
          <TouchableOpacity onPress={onClose}>
            <StyledText className='text-base font-bold text-red-500'>
              Close
            </StyledText>
          </TouchableOpacity>
        </StyledView>

        {/* Order ID */}
        <StyledView className='flex-row justify-between items-center mb-6'>
          <StyledText className='text-base font-bold text-gray-700'>
            Order ID
          </StyledText>
          <StyledText className='text-base font-bold text-gray-700'>
            MZZ4-VVY2
          </StyledText>
        </StyledView>

        {/* Timeline - Step 1 */}
        <StyledView className='flex-row items-center mb-6'>
          <StyledView className='w-8 items-center'>
            <StyledView className='bg-red-500 h-4 w-4 rounded-full mb-2' />
            <StyledView className='h-10 w-1 bg-gray-300' />
          </StyledView>
          <StyledView className='ml-2'>
            <StyledView className='flex flex-row gap-3'>
              <StyledText className='text-sm font-bold text-gray-800'>
                16 Jul
              </StyledText>
              <StyledText className='text-sm text-gray-500'>20:53</StyledText>
            </StyledView>
            <StyledView className='bg-gray-100 p-3 rounded-md mt-2'>
              <StyledText className='text-sm font-bold text-black'>
                Order delivered
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>

        {/* Timeline - Step 2 */}
        <StyledView className='flex-row items-center mb-6'>
          <StyledView className='w-8 items-center'>
            <StyledView className='bg-gray-300 h-4 w-4 rounded-full mb-2' />
            <StyledView className='h-10 w-1 bg-gray-300' />
          </StyledView>
          <StyledView className='ml-2'>
            <StyledView className='flex flex-row gap-3'>
              <StyledText className='text-sm font-bold text-gray-800'>
                16 Jul
              </StyledText>
              <StyledText className='text-sm text-gray-500'>19:57</StyledText>
            </StyledView>
            <StyledView className='bg-gray-100 p-3 rounded-md mt-2'>
              <StyledText className='text-sm font-bold text-black'>
                Order out for delivery
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>

        {/* Timeline - Step 3 */}
        <StyledView className='flex-row items-center mb-6'>
          <StyledView className='w-8 items-center'>
            <StyledView className='bg-gray-300 h-4 w-4 rounded-full mb-2' />
            <StyledView className='h-10 w-1 bg-gray-300' />
          </StyledView>
          <StyledView className='ml-2'>
            <StyledView className='flex flex-row gap-3'>
              <StyledText className='text-sm font-bold text-gray-800'>
                16 Jul
              </StyledText>
              <StyledText className='text-sm text-gray-500'>19:43</StyledText>
            </StyledView>
            <StyledView className='bg-gray-100 p-3 rounded-md mt-2'>
              <StyledText className='text-sm font-bold text-black'>
                Order received
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default DeliveryInformation;
