import React, { useEffect, useState } from 'react';
import Header from '@components/header';
import {
  StyledImage,
  StyledScrollView,
  StyledText,
  StyledView,
} from '@components/shared/StyledComponents';
import { ROUTES } from 'core/utils/routes';
import productsData from 'data/medicine.json';
import { Href, Link } from 'expo-router';
import { Medicine } from 'types/productTypes';

const CategoryDetailsPage = () => {
  const [products, setProducts] = useState<Medicine[]>([]);
  useEffect(() => {
    setProducts(productsData.data.medcine);
  });
  return (
    <StyledScrollView className='bg-gray-100 px-4 py-4'>
      <Header
        title='Medicine'
        backUrl={ROUTES.CUSTOMER.PAGES.HOME.CATEGORY_LISTING}
      />
      <StyledView className='flex flex-row flex-wrap items-center mt-4 mb-6'>
        {products.map((product, index) => (
          <Link
            href={
              `${ROUTES.CUSTOMER.PAGES.HOME.PRODUCT_DETAILS}${product.id}` as Href<string>
            }
            key={index}
            className='w-[48.8%] m-[2px] bg-white flex flex-col rounded shadow-lg shadow-black p-2 '
          >
            <StyledView className='px-3 py-2 items-center'>
              <StyledImage src={product.medcine_image} className='w-36 h-36' />
            </StyledView>
            <StyledView className='flex flex-col gap-2'>
              <StyledText className='text-lg'>
                {product.medcine_name.length > 20
                  ? product.medcine_name.substring(0, 15) + '...'
                  : product.medcine_name}
              </StyledText>
              <StyledView className='flex flex-row justify-between items-center'>
                <StyledText className='text-base'>
                  MRP{' '}
                  <StyledText className='line-through'>
                    ₹{product.old_price}
                  </StyledText>
                </StyledText>
                <StyledText className='bg-highlighted text-sm px-2 py-1 text-white rounded-md'>
                  {product.offer}% off
                </StyledText>
              </StyledView>
              <StyledText className='text-lg font-bold'>
                MRP ₹{product.new_price}
              </StyledText>
            </StyledView>
          </Link>
        ))}
      </StyledView>
    </StyledScrollView>
  );
};

export default CategoryDetailsPage;
