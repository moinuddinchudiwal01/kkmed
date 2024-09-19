import Button from '@components/button';
import Header from '@components/header';
import { StyledImage } from '@components/shared/StyledComponents';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ROUTES } from 'core/utils/routes';
import { cartItems } from 'data/cartdata';
import { router } from 'expo-router';
import { styled } from 'nativewind';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);

const Cart = () => {
  const [viewMore, setViewMore] = useState(false);
  const itemsToDisplay = viewMore ? cartItems : cartItems.slice(0, 4);

  return (
    <StyledScrollView className='px-4 py-2 bg-gray-100'>
      <Header
        className='cart_header'
        title='Your Cart'
        backUrl={ROUTES.CUSTOMER.HOME}
      >
        <StyledTouchableOpacity className='relative flex flex-row'>
          <Ionicons name='cart-outline' size={40} />
          <StyledView className='absolute top-0 right-0 w-5 h-5 bg-highlighted rounded-full flex items-center justify-center'>
            <StyledText className='text-white text-sm'>{2}</StyledText>
          </StyledView>
        </StyledTouchableOpacity>
      </Header>
      <StyledView className='cart_items'>
        <StyledScrollView
          className={`${viewMore ? 'h-[26rem]' : 'h-auto'}`}
          scrollEnabled={viewMore}
        >
          {itemsToDisplay?.map((item) => {
            return (
              <StyledView
                key={item.id}
                className='flex-row items-center justify-between bg-white rounded-xl my-1 py-4 px-3 shadow-md shadow-gray-500'
              >
                <StyledView className='product_image w-20 h-20 bg-white rounded-md'>
                  <StyledImage source={item.image} className='w-full h-full' />
                </StyledView>

                <StyledView className='product_info'>
                  <StyledText className='font-semibold text-black mb-1'>
                    {item.name}
                  </StyledText>
                  <StyledText className='text-gray-500 text-xs'>
                    {item.description}
                  </StyledText>
                  <StyledText className='font-semibold text-lg text-black mt-2 bg-white'>
                    Rs.{item.price}
                  </StyledText>
                </StyledView>

                <StyledView className='flex justify-between'>
                  <StyledTouchableOpacity className='self-end mb-2'>
                    <Ionicons
                      name='close-circle-outline'
                      size={24}
                      color='gray'
                    />
                  </StyledTouchableOpacity>
                  <StyledView className='flex-row justify-center items-center mt-4'>
                    <StyledTouchableOpacity className='bg-white rounded-lg p-1 border border-gray-400'>
                      <Ionicons name='remove' size={20} color='blue' />
                    </StyledTouchableOpacity>
                    <StyledText className='mx-3 text-lg font-semibold'>
                      {item.quantity}
                    </StyledText>
                    <StyledTouchableOpacity className='bg-blue-200 rounded-lg p-1'>
                      <Ionicons name='add' size={20} color='blue' />
                    </StyledTouchableOpacity>
                  </StyledView>
                </StyledView>
              </StyledView>
            );
          })}
        </StyledScrollView>

        {cartItems.length > 4 && (
          <StyledView className='flex-row justify-end py-2'>
            {!viewMore ? (
              <StyledTouchableOpacity onPress={() => setViewMore(true)}>
                <StyledText className='pr-2 text-blue-500 font-semibold'>
                  View More
                </StyledText>
              </StyledTouchableOpacity>
            ) : (
              <StyledTouchableOpacity onPress={() => setViewMore(false)}>
                <StyledText className='pr-2 text-blue-500 font-semibold'>
                  View Less
                </StyledText>
              </StyledTouchableOpacity>
            )}
          </StyledView>
        )}
      </StyledView>
      {/* Payment Summary */}
      <StyledView className=' bg-white rounded-2xl py-4 shadow-md shadow-gray-500'>
        <StyledText className='font-bold text-black mb-2 px-4'>
          Payment Summary
        </StyledText>

        <StyledView className='px-4'>
          <StyledView className='flex-row justify-between'>
            <StyledText className='text-gray-500'>Order Total</StyledText>
            <StyledText className='text-black'>Rs. 228.80</StyledText>
          </StyledView>
          <StyledView className='flex-row justify-between mt-2'>
            <StyledText className='text-gray-500'>Items Discount</StyledText>
            <StyledText className='text-black'>- 28.80</StyledText>
          </StyledView>
          <StyledView className='flex-row justify-between mt-2'>
            <StyledText className='text-gray-500'>Coupon Discount</StyledText>
            <StyledText className='text-black'>- 15.80</StyledText>
          </StyledView>
          <StyledView className='flex-row justify-between mt-2'>
            <StyledText className='text-gray-500'>Shipping</StyledText>
            <StyledText className='text-black'>Free</StyledText>
          </StyledView>
        </StyledView>

        <StyledView className='flex-row justify-between mt-4 px-4'>
          <StyledText className='font-bold text-black'>Total</StyledText>
          <StyledText className='font-bold text-black'>Rs. 185.00</StyledText>
        </StyledView>
      </StyledView>
      <Button
        title='Place Order'
        onPress={() => router.push('/pages/checkout')}
      />
    </StyledScrollView>
  );
};

export default Cart;
