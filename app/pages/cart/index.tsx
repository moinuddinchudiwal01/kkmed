import Button from '@components/button';
import Header from '@components/header';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ROUTES } from 'core/utils/routes';
import { Link, router } from 'expo-router';
import { styled } from 'nativewind';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';

const image3 = require('@assets/images/image3.png');
const image4 = require('@assets/images/image4.png');
const image5 = require('@assets/images/image5.png');

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);

const cartItems = [
  {
    id: 1,
    name: 'Sugar free gold',
    description: 'bottle of 500 pellets',
    price: 25,
    quantity: 1,
    image: image3,
  },
  {
    id: 2,
    name: 'Sugar free gold',
    description: 'bottle of 500 pellets',
    price: 18,
    quantity: 1,
    image: image4,
  },
  {
    id: 3,
    name: 'Sugar free gold',
    description: 'bottle of 500 pellets',
    price: 18,
    quantity: 1,
    image: image5,
  },
  {
    id: 3,
    name: 'Sugar free gold',
    description: 'bottle of 500 pellets',
    price: 18,
    quantity: 1,
    image: image5,
  },
  {
    id: 3,
    name: 'Sugar free gold',
    description: 'bottle of 500 pellets',
    price: 18,
    quantity: 1,
    image: image5,
  },
  {
    id: 3,
    name: 'Sugar free gold',
    description: 'bottle of 500 pellets',
    price: 18,
    quantity: 1,
    image: image5,
  },
];

const Cart = () => {
  return (
    <StyledScrollView className='px-4 py-2 bg-white'>
      <Header
        className='cart_header'
        title='Your Cart'
        backUrl={ROUTES.CUSTOMER.HOME}
      >
        <StyledTouchableOpacity className='relative flex flex-row bg-white'>
          <Link href={'/pages/notfication'}>
            <Ionicons name='cart-outline' size={40} />
          </Link>
          <StyledView className='absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center'>
            <StyledText className='text-white text-sm'>2</StyledText>
          </StyledView>
        </StyledTouchableOpacity>
      </Header>

      {/* Cart Items */}
      <StyledView className='bg-gray-100 rounded-2xl px-4'>
        {cartItems?.map((item) => {
          return (
            <StyledView
              key={item.id}
              className='flex-row items-center justify-between border-b border-gray-200 py-4'
            >
              {/* Product Image */}
              <StyledView className='w-20 h-20 bg-white rounded-md'>
                <StyledImage source={item.image} className='w-full h-full' />
              </StyledView>

              {/* Product Info */}
              <StyledView className=''>
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

              {/* Container for item */}
              <StyledView className='flex justify-between'>
                {/* Remove Button */}
                <StyledTouchableOpacity className='self-end mb-2'>
                  <Ionicons
                    name='close-circle-outline'
                    size={20}
                    color='gray'
                  ></Ionicons>
                </StyledTouchableOpacity>

                {/* Quantity Controls at the bottom */}
                <StyledView className='flex-row justify-center items-center mt-4'>
                  <StyledTouchableOpacity className='bg-white rounded-lg p-1 border border-gray-200'>
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
        <StyledView className='flex-row gap-2 py-4 items-center'>
          <StyledTouchableOpacity className='bg-white rounded-lg p-1 border border-gray-200'>
            <Ionicons name='add' size={20} color='black' />
          </StyledTouchableOpacity>
          <StyledText className='font-bold capitalize'>Add Items</StyledText>
        </StyledView>
      </StyledView>

      {/* Payment Summary */}
      <StyledView className='mt-6 bg-gray-100 rounded-2xl py-4'>
        <StyledText className='font-bold text-black mb-4 px-4'>
          Payment Summary
        </StyledText>

        <StyledView className='border-y border-gray-200 px-4'>
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
