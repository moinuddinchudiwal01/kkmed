import Header from '@components/header';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ROUTES } from 'core/utils/routes';
import { Link, router } from 'expo-router';
import { styled } from 'nativewind';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View , Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
];

const Cart = () => {
  return (
    <SafeAreaView>
      <StyledScrollView className="px-4 py-2 bg-gray-100">
        
        {/* Header */}
        <Header title="Your Cart" backUrl={ROUTES.CUSTOMER.HOME}>
          <StyledTouchableOpacity className="relative flex flex-row bg-gray-100">
            <Link href={'/pages/notfication'}>
              <Ionicons name="cart-outline" size={40} />
            </Link>
            <StyledView className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <StyledText className="text-white text-sm">2</StyledText>
            </StyledView>
          </StyledTouchableOpacity>
        </Header>

        {/* Cart Info */}
        {/* <StyledView className="flex-row items-center justify-between mt-4">
          <StyledText className="text-gray-500">2 Items in your cart</StyledText>
          <Link href="/tabs/home">
            <StyledText className="text-blue-600">+ Add more</StyledText>
          </Link>
        </StyledView> */}

        {/* Cart Items */}
        <StyledView className='bg-white rounded-2xl'>
        {cartItems.map((item) => (
          <StyledView key={item.id} className="flex-row items-center justify-center border-b border-gray-200">
            {/* Product Image */}
            <StyledView className="flex-row p-5 gap-5">
              <StyledView className="w-20 h-20 bg-gray-200 rounded-md">
                <StyledImage source={item.image} className="w-full h-full" />
              </StyledView>
              
              {/* Product Info */}
              <StyledView className="ml-4">
                <StyledText className="font-semibold text-black mb-1">{item.name}</StyledText>
                <StyledText className="text-gray-500 text-xs">{item.description}</StyledText>
                <StyledText className="font-semibold text-lg text-black mt-2">Rs.{item.price}</StyledText>
              </StyledView>
            
            {/* Container for item */} 
            <StyledView className="p-0 flex justify-between">
              
              {/* Remove Button */}
              <StyledTouchableOpacity className="self-end mb-2">
                <Ionicons name="close-circle" size={20} color="gray" />
              </StyledTouchableOpacity>

              {/* Quantity Controls at the bottom */}
              <StyledView className="flex-row justify-center items-center mt-auto">
                <StyledTouchableOpacity className="bg-white rounded-lg p-2 border border-gray-200">
                  <Ionicons name="remove" size={20} color="blue" />
                </StyledTouchableOpacity>
                <StyledText className="mx-4 text-lg font-semibold">{item.quantity}</StyledText>
                <StyledTouchableOpacity className="bg-blue-200 rounded-lg p-2">
                  <Ionicons name="add" size={20} color="blue" />
                </StyledTouchableOpacity>
              </StyledView>

            </StyledView>

            </StyledView>
          </StyledView>
        ))}
        </StyledView>

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
            <StyledText 
            className="text-white text-center text-lg font-bold"
             onPress={()=>router.push("/pages/checkout")}>
              Place Order
              </StyledText>
        </StyledTouchableOpacity>
      </StyledScrollView>
    </SafeAreaView>
  );
};

export default Cart;
