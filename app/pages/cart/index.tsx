import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View , Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const image3 = require('@assets/images/image3.png');
const image4 = require('@assets/images/image4.png');

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
];

const Cart = () => {
  return (
    <SafeAreaView>
      <StyledScrollView className="px-4 py-2 bg-white">
        
        {/* Header */}
        <StyledView className="flex-row items-center gap-1">
          <Link href="/tabs/home">
            <Ionicons name="arrow-back" size={24} color="black" />
          </Link>
          <StyledText className="text-xl font-bold">Your cart</StyledText>
        </StyledView>

        {/* Cart Info */}
        <StyledView className="flex-row items-center justify-between mt-4">
          <StyledText className="text-gray-500">2 Items in your cart</StyledText>
          <Link href="/tabs/shop">
            <StyledText className="text-blue-600">+ Add more</StyledText>
          </Link>
        </StyledView>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <StyledView key={item.id} className="flex-row items-center justify-between mt-4 border-b border-gray-200 pb-4">
            {/* Product Image */}
            <StyledView className="flex-row items-center">
              <StyledView className="w-16 h-16 bg-gray-200 rounded-lg">
                <StyledImage source={item.image} className="w-full h-full" />
              </StyledView>
              
              {/* Product Info */}
              <StyledView className="ml-4">
                <StyledText className="font-semibold text-black">{item.name}</StyledText>
                <StyledText className="text-gray-500 text-xs">{item.description}</StyledText>
                <StyledText className="font-semibold text-lg text-black mt-2">Rs.{item.price}</StyledText>
              </StyledView>
            </StyledView>

            {/* Quantity Controls */}
            <StyledView className="flex-row items-center">
              <StyledTouchableOpacity className="bg-gray-200 rounded-full p-2">
                <Ionicons name="remove" size={20} color="blue" />
              </StyledTouchableOpacity>
              <StyledText className="mx-4">{item.quantity}</StyledText>
              <StyledTouchableOpacity className="bg-blue-200 rounded-full p-2">
                <Ionicons name="add" size={20} color="blue" />
              </StyledTouchableOpacity>
            </StyledView>

            {/* Remove Button */}
            <StyledTouchableOpacity className="ml-2">
              <Ionicons name="close-circle" size={20} color="gray" />
            </StyledTouchableOpacity>
          </StyledView>
        ))}

        {/* Payment Summary */}
        <StyledView className="mt-6">
          <StyledText className="font-bold text-black mb-4">Payment Summary</StyledText>
          <StyledView className="flex-row justify-between">
            <StyledText className="text-gray-500">Order Total</StyledText>
            <StyledText className="text-black">Rs. 228.80</StyledText>
          </StyledView>
          <StyledView className="flex-row justify-between mt-2">
            <StyledText className="text-gray-500">Items Discount</StyledText>
            <StyledText className="text-black">- 28.80</StyledText>
          </StyledView>
          <StyledView className="flex-row justify-between mt-2">
            <StyledText className="text-gray-500">Coupon Discount</StyledText>
            <StyledText className="text-black">- 15.80</StyledText>
          </StyledView>
          <StyledView className="flex-row justify-between mt-2">
            <StyledText className="text-gray-500">Shipping</StyledText>
            <StyledText className="text-black">Free</StyledText>
          </StyledView>
          <StyledView className="flex-row justify-between mt-4">
            <StyledText className="font-bold text-black">Total</StyledText>
            <StyledText className="font-bold text-black">Rs. 185.00</StyledText>
          </StyledView>
        </StyledView>

        {/* Place Order Button */}
        <StyledTouchableOpacity className="bg-blue-600 rounded-lg py-3 mt-8">
          <StyledText className="text-white text-center text-lg font-bold">Place Order</StyledText>
        </StyledTouchableOpacity>
      </StyledScrollView>
    </SafeAreaView>
  );
};

export default Cart;
