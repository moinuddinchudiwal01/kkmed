import {
  StyledImage,
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  StyledView,
} from '@components/shared/StyledComponents';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import React from 'react';
import banner from '@assets/images/Banner.png';
import ProductCart from '@components/shared/ProductCart';
import CategoryCard from '@components/shared/CategoryCard';
import ConcernCard from '@components/shared/ConcernCard';
import { category, concern, products } from 'data/homePageData';

export default function HomeScreen() {
  return (
    <StyledScrollView className='bg-gray-100 px-4 py-2'>
      <StyledView className='flex-row justify-between gap-2 items-center'>
        <StyledTextInput
          placeholder='Search meds or...'
          className='text-gray-700 w-[75%] border-gray-400 bg-white border p-3 rounded-xl text-lg'
          style={{ paddingLeft: 13 }}
        />
        <StyledTouchableOpacity className='relative flex flex-row'>
          <StyledView className='absolute top-0 left-3 w-6 h-6 z-10 bg-red-600 rounded-full flex items-center justify-center'>
            <StyledText className='text-white text-sm'>5</StyledText>
          </StyledView>
          <Link href={'/pages/notfication'}>
            <Ionicons name='notifications-outline' size={40} color='#6b7280' />
          </Link>
          <Link href={'/pages/cart'}>
            <Ionicons name='bag-handle-outline' size={40} color='#6b7280' />
          </Link>
          <StyledView className='absolute top-0 right-0 w-6 h-6 bg-highlighted rounded-full flex items-center justify-center'>
            <StyledText className='text-white text-sm'>2</StyledText>
          </StyledView>
        </StyledTouchableOpacity>
      </StyledView>

      <StyledView className='mt-4 '>
        <StyledImage
          source={banner}
          className='w-full h-36 rounded-lg max-[390px]:h-32'
        />
      </StyledView>

      <StyledView className='mt-4 '>
        <StyledView className='flex-row justify-between items-center'>
          <StyledText className='text-xl font-bold mb-2 pl-2'>
            Shop By Category
          </StyledText>
          <Ionicons name='arrow-forward' size={24} color='black' />
        </StyledView>
      </StyledView>
      <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
        {category.map((product, index) => (
          <CategoryCard key={index} {...product} />
        ))}
      </StyledScrollView>

      <StyledView className='mt-4'>
        <StyledView className='flex-row justify-between items-center'>
          <StyledText className='text-xl font-bold mb-2 pl-2'>
            New Products
          </StyledText>
          <Ionicons name='arrow-forward' size={24} color='black' />
        </StyledView>
      </StyledView>

      <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((product, index) => (
          <ProductCart key={index} {...product} />
        ))}
      </StyledScrollView>

      {/* Concern Section */}
      <StyledView className='mt-4'>
        <StyledView className='flex-row justify-between items-center'>
          <StyledText className='text-xl font-bold mb-2 pl-2'>
            Shop By Concern
          </StyledText>
          <Ionicons name='arrow-forward' size={24} color='black' />
        </StyledView>
      </StyledView>
      {/* Concern Cards */}
      <StyledView className='mb-24'>
        <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
          {concern.map((product, index) => (
            <ConcernCard key={index} {...product} />
          ))}
        </StyledScrollView>
      </StyledView>
    </StyledScrollView>
  );
}
