import React from 'react';
import {
  StyledImage,
  StyledTouchableOpacity,
  StyledText,
  StyledView,
} from './StyledComponents';
import { Ionicons } from '@expo/vector-icons';
interface ProductProps {
  name: string;
  price: string;
  // originalPrice: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  price,
  // originalPrice,
  imageUrl,
}) => {
  let orginalName = name;
  if (orginalName.length > 20) {
    orginalName = orginalName.substring(0, 20) + '...';
  }
  return (
    <StyledView className='mr-3 bg-primary w-[175px] h-60 rounded-lg'>
      <StyledImage
        source={{ uri: imageUrl }}
        className='h-36 w-full rounded-lg'
      />
      <StyledView className='flex flex-col pl-1 h-full '>
        <StyledText className='text-base font-bold px-2 my-1 pt-2'>
          {orginalName}
        </StyledText>
        <StyledView className='flex flex-row items-center pr-3 w-full justify-between'>
          <StyledView>
            <StyledText className='text-base font-medium px-2 line-through'>
              ₹{price}
            </StyledText>
            <StyledText className='text-xl font-bold px-2'>₹{price}</StyledText>
          </StyledView>
          <StyledTouchableOpacity className='bg-dark w-10 h-10 rounded-full flex items-center justify-center'>
            <Ionicons name='add-sharp' size={24} color='white' />
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default ProductCard;
