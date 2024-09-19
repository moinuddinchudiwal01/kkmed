import React from 'react';
import {
  StyledImage,
  StyledTouchableOpacity,
  StyledText,
  StyledView,
} from './StyledComponents';
interface ProductProps {
  name: string;
  price: string;
  originalPrice: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  price,
  // originalPrice,
  imageUrl,
}) => {
  let orginalName = name;
  if (orginalName.length > 18) {
    orginalName = orginalName.substring(0, 18) + '...';
  }
  return (
    <StyledTouchableOpacity className='m-2 bg-white w-36 pb-1 rounded-lg shadow-lg shadow-gray-500'>
      <StyledImage
        source={{ uri: imageUrl }}
        className='h-24 w-36 rounded-t-lg'
      />
      {/* <StyledView className='absolute top-2 right-2'>
        <Ionicons name='heart-outline' size={28} color='black' />
      </StyledView> */}
      <StyledText className='text-sm font-bold px-2 pt-2'>
        {orginalName}
      </StyledText>
      <StyledView className='flex-row items-center'>
        <StyledText className='text-base font-bold px-2'>₹{price}</StyledText>
        {/* <StyledText className='text-sm bg-highlighted text-center text-white font-bold px-2 rounded-lg'>
          50%
        </StyledText> */}
      </StyledView>
      {/* <StyledView className='flex-row items-center justify-between pr-1'>
        <StyledText className='text-sm line-through px-2'>
          ₹{originalPrice}
        </StyledText>
        <StyledPressable className='self-end'>
          <Ionicons size={30} color='black' name='bag-add-outline' />
        </StyledPressable>
      </StyledView> */}
    </StyledTouchableOpacity>
  );
};

export default ProductCard;
