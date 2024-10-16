import {
  StyledPressable,
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledView,
} from '@components/shared/StyledComponents';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Href, Link } from 'expo-router';
import React from 'react';
import ProductCart from '@components/shared/ProductCart';
import ConcernCard from '@components/shared/ConcernCard';
import { concern, products } from 'data/homePageData';
import { ROUTES } from 'core/utils/routes';
import Button from '@components/button';

export default function HomeScreen() {
  return (
    <StyledScrollView className='bg-secondary px-4 py-4'>
      <StyledView className='flex-row justify-between gap-2 items-center mb-4'>
        <StyledView className='flex-row items-center justify-center'>
          <Ionicons name='location-outline' size={24} color='black' />
          <StyledText className='text-lg font-bold text-dark'>
            Ahmedabad
          </StyledText>
        </StyledView>

        <StyledView className='flex-row gap-1 items-center'>
          <Link href={ROUTES.CUSTOMER.PAGES.HOME.NOTIFICATION as Href<string>}>
            <Ionicons name='notifications-outline' size={26} color='black' />
          </Link>
          <Link href={ROUTES.CUSTOMER.PAGES.HOME.CART as Href<string>}>
            <Ionicons name='bag-handle-outline' size={26} color='black' />
          </Link>
        </StyledView>
      </StyledView>

      <StyledView className='flex-row justify-between items-center mb-2'>
        <StyledTextInput
          placeholder='Search Medicines & Healthcare Products'
          className='text-gray-700 w-full border-dark bg-input border p-3 rounded-lg text-lg'
          style={{ paddingLeft: 13 }}
        />
      </StyledView>

      <Button title='Order Via Prescription' onPress={() => {}} />

      <StyledView className='flex-row justify-between mt-2 mb-4'>
        <StyledPressable className='bg-input w-[48%] p-3 rounded-md flex items-center justify-center'>
          <StyledText className='text-dark text-lg font-bold'>
            Medicine
          </StyledText>
        </StyledPressable>
        <StyledPressable className='bg-input w-[48%] p-3 rounded-md flex items-center justify-center'>
          <StyledText className='text-lg font-bold text-dark'>
            Healthcare
          </StyledText>
        </StyledPressable>
      </StyledView>

      {/* Top Products section */}
      <StyledView className='flex-row justify-between items-center mb-3'>
        <StyledText className='text-lg font-bold text-dark'>
          Top Products
        </StyledText>
        <Link href={ROUTES.CUSTOMER.PAGES.HOME.PRODUCTS as Href<string>}>
          <StyledText className='text-base text-dark'>See All</StyledText>
        </Link>
      </StyledView>

      <StyledScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='mb-4'
      >
        {products.map((product, index) => (
          <ProductCart key={index} {...product} />
        ))}
      </StyledScrollView>

      {/* Promotion Banner */}
      <StyledView className='w-full h-36 bg-dark flex-row items-center my-2 rounded-xl shadow-md border-white border'>
        <StyledView className='w-[142px] bg-input rounded-t-lg -rotate-90 h-[101%] flex justify-center items-center'>
          <StyledText className='text-4xl font-bold text-center'>
            30%
          </StyledText>
          <StyledText className='text-4xl font-bold text-center text-dark'>
            OFF
          </StyledText>
        </StyledView>
        <StyledText className='w-[60%] text-4xl font-semibold text-center text-white'>
          ON ORDERS OVER $250
        </StyledText>
      </StyledView>

      {/* Categories section */}
      <StyledView className='flex-row justify-between items-center mb-2'>
        <StyledText className='text-lg font-bold text-dark'>
          Category
        </StyledText>
        <Link href={ROUTES.CUSTOMER.PAGES.HOME.CATEGORY as Href<string>}>
          <StyledText className='text-base text-dark'>See All</StyledText>
        </Link>
      </StyledView>

      <StyledScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='mb-24'
      >
        {concern.map((category, index) => (
          <ConcernCard key={index} {...category} />
        ))}
      </StyledScrollView>
    </StyledScrollView>
  );
}
