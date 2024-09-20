import {
  StyledImage,
  StyledPressable,
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledView,
} from '@components/shared/StyledComponents';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Href, Link, router } from 'expo-router';
import React from 'react';
import banner from '@assets/images/Banner.png';
import ProductCart from '@components/shared/ProductCart';
import ConcernCard from '@components/shared/ConcernCard';
import { concern, products } from 'data/homePageData';
import { ROUTES } from 'core/utils/routes';

export default function HomeScreen() {
  return (
    <StyledScrollView className='bg-gray-100 px-4 py-4'>
      <StyledView className='flex-row justify-between gap-2 items-center'>
        <StyledTextInput
          placeholder='Search meds or...'
          className='text-gray-700 w-[75%] border-gray-400 bg-white border p-3 rounded-xl text-lg'
          style={{ paddingLeft: 13 }}
        />
        <StyledView className='relative flex flex-row'>
          <StyledView className='absolute top-0 left-3 w-6 h-6 z-10 bg-red-600 rounded-full flex items-center justify-center'>
            <StyledText className='text-white text-sm'>5</StyledText>
          </StyledView>
          <Link href={ROUTES.CUSTOMER.PAGES.HOME.NOTIFICATION as Href<string>}>
            <Ionicons name='notifications-outline' size={40} color='#6b7280' />
          </Link>
          <Link href={ROUTES.CUSTOMER.PAGES.HOME.CART as Href<string>}>
            <Ionicons name='bag-handle-outline' size={40} color='#6b7280' />
          </Link>
          <StyledView className='absolute top-0 right-0 w-6 h-6 bg-highlighted rounded-full flex items-center justify-center'>
            <StyledText className='text-white text-sm'>2</StyledText>
          </StyledView>
        </StyledView>
      </StyledView>

      <StyledView className='mt-4'>
        <StyledImage
          source={banner}
          className='w-full h-36 rounded-lg max-[390px]:h-32'
        />
      </StyledView>

      <StyledView className='mt-4'>
        <StyledView className='flex-row justify-between items-center'>
          <StyledText className='text-lg font-bold mb-2 pl-2 capitalize'>
            shop by category
          </StyledText>
        </StyledView>
      </StyledView>
      <StyledView className='flex flex-row gap-2 items-center mt-1 px-2'>
        <StyledPressable
          onPress={() =>
            router.push(ROUTES.CUSTOMER.PAGES.HOME.CATEGORY as Href<string>)
          }
          className='m-2 bg-primary w-1/2 p-2 h-32 justify-center rounded-lg items-center shadow-lg shadow-gray-500'
        >
          <StyledView className='items-center'>
            <StyledImage
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1529/1529570.png',
              }}
              className='h-20 w-20 object-cover'
            />
          </StyledView>
          <StyledText className='text-base capitalize font-bold text-center px-2 pt-2'>
            Medicine
          </StyledText>
        </StyledPressable>

        <StyledPressable
          onPress={() =>
            router.push(ROUTES.CUSTOMER.PAGES.HOME.CATEGORY as Href<string>)
          }
          className='m-2 bg-purple-200 w-1/2 p-2 h-32 justify-center rounded-lg items-center shadow-lg shadow-gray-500'
        >
          <StyledView className='items-center'>
            <StyledImage
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
              }}
              className='h-20 w-20 object-cover'
            />
          </StyledView>
          <StyledText className='text-base capitalize font-bold text-center px-2 pt-2'>
            HealthCare
          </StyledText>
        </StyledPressable>
      </StyledView>

      <StyledView className='mt-3'>
        <StyledView className='flex-row justify-between items-center'>
          <StyledText className='text-lg font-bold mb-2 pl-2 capitalize'>
            New Products
          </StyledText>
          <Link
            href={ROUTES.CUSTOMER.PAGES.HOME.PRODUCTS as Href<string>}
            className='text-sm capitalize'
          >
            see more
          </Link>
        </StyledView>
      </StyledView>

      <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((product, index) => (
          <ProductCart key={index} {...product} />
        ))}
      </StyledScrollView>

      {/* Concern Section */}
      <StyledView className='mt-3'>
        <StyledView className='flex-row justify-between items-center'>
          <StyledText className='text-lg font-bold mb-2 pl-2 capitalize'>
            Shop By Concern
          </StyledText>
          <Link
            href={ROUTES.CUSTOMER.PAGES.HOME.PRODUCTS as Href<string>}
            className='text-sm mb-2 pl-2'
          >
            see more
          </Link>
        </StyledView>
      </StyledView>
      {/* Concern Cards */}
      <StyledView className='mb-24 mt-2'>
        <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
          {concern.map((product, index) => (
            <ConcernCard key={index} {...product} />
          ))}
        </StyledScrollView>
      </StyledView>
    </StyledScrollView>
  );
}
