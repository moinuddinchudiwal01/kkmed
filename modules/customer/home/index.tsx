import { StyledImage, StyledScrollView, StyledText, StyledTextInput, StyledTouchableOpacity, StyledView } from '@components/shared/StyledComponents';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import React from 'react';
import b1 from '@assets/images/b1.png';
import banner from '@assets/images/Banner.png';
import MedicineListing from '@components/shared/MedicineListing';

const products = [
  { name: 'Fish Oil 1000 (30pcs)', price: 'Rp75.000', originalPrice: 'Rp150.000', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-907329974-1661963045.jpg' },
  { name: 'Ibuprofen 250mg', price: 'Rp12.000', originalPrice: 'Rp24.000', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets.jpg' },
  { name: 'Fish Oil 1000 (30pcs)', price: 'Rp75.000', originalPrice: 'Rp150.000', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-907329974-1661963045.jpg' },
  { name: 'Ibuprofen 250mg', price: 'Rp12.000', originalPrice: 'Rp24.000', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets.jpg' },
];
export default function HomeScreen() {
  return (
    <StyledScrollView className='bg-white'>
      {/* Header Section */}
      <StyledView className="flex-row justify-between gap-2 items-center px-4 py-2 bg-white">
        <StyledTextInput
          placeholder="Search meds or..."
          className="text-gray-700 w-[75%] border-gray-300 border p-3 rounded-xl text-lg" style={{paddingLeft: 13}}
        />
        <StyledTouchableOpacity className="relative flex flex-row ">
        <StyledView className="absolute top-0 left-3 w-6 h-6 z-10 bg-red-600 rounded-full flex items-center justify-center">
            <StyledText className="text-white text-sm">5</StyledText>
          </StyledView>
          <Link href={'/pages/notfication'}>
            <Ionicons name="notifications-outline" size={40} color="#6b7280" />
          </Link>
          <Link href={'/pages/cart'}>
            <Ionicons name="cart-outline" size={40} color="#6b7280" />
          </Link>
          <StyledView className="absolute top-0 right-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <StyledText className="text-white text-sm">2</StyledText>
          </StyledView>
        </StyledTouchableOpacity>
      </StyledView>
      {/* track your order */}
      <StyledView className='px-4 py-2 relative mt-1'>
        <StyledImage source={b1} className="w-full h-36 max-[390px]:h-32 rounded-lg" />
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
      <StyledView className='flex-1 flex-row gap-2 items-center justify-center mt-1'>
         <StyledView className="w-2 h-2 rounded-full bg-gray-500" />
         <StyledView className="w-2 h-2 rounded-full bg-gray-400" />
         <StyledView className="w-2 h-2 rounded-full bg-gray-400" />
    </StyledView>
      {/* Promotional Banner */}
      <StyledView className="mt-4 px-4">
        <StyledImage source={banner} className="w-full h-36 rounded-lg max-[390px]:h-32" />
      </StyledView>

      {/* Products Section */}
      <StyledView className="mt-4 px-4">
        <StyledView className="flex-row justify-between items-center">
          <StyledText className="text-xl font-bold mb-2 pl-2">New Products</StyledText>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </StyledView>
      </StyledView>

      {/* Product Cards */}
      <StyledView className="px-4">
      <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((product, index) => (
          <MedicineListing key={index} {...product} />
        ))}
      </StyledScrollView>
      </StyledView>
    </StyledScrollView>
  );
}
