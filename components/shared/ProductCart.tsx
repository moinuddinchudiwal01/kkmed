import React from 'react';
import {
  StyledImage,
  StyledTouchableOpacity,
  StyledText,
  StyledView,
  StyledPressable,
} from './StyledComponents';
import { Ionicons } from '@expo/vector-icons';
interface ProductProps {
  name: string;
  price: string;
  originalPrice: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, imageUrl }) => {
  return (
    <StyledTouchableOpacity className='m-2 bg-white w-36'>
      <StyledImage
        source={{ uri: imageUrl }}
        className='h-28 w-36 rounded-t-lg'
      />
      <StyledView className='absolute top-2 right-2'>
        <Ionicons name='heart-outline' size={28} color='black' />
      </StyledView>
      <StyledText className='text-sm px-2 pt-2'>
        {name.substring(0, 20)}
      </StyledText>
      <StyledView className='flex-row items-center'>
        <StyledText className='text-base font-bold px-2'>₹{price}</StyledText>
        <StyledText className='text-sm bg-highlighted text-center text-white font-bold px-2 rounded-lg'>
          50%
        </StyledText>
      </StyledView>
      <StyledPressable className='bg-secondary w-24 p-1  rounded-lg my-2'>
        <StyledText className='text-sm text-center text-white'>
          Add To Cart
        </StyledText>
      </StyledPressable>
    </StyledTouchableOpacity>
  );
};

export default ProductCard;
