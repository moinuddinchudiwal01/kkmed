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
  if (orginalName.length > 17) {
    orginalName = orginalName.substring(0, 17) + '...';
  }
  return (
    <StyledTouchableOpacity className='mr-3 bg-primary w-40 h-48 rounded-lg'>
      <StyledImage
        source={{ uri: imageUrl }}
        className='h-28 w-40 rounded-lg'
      />
      <StyledView className='flex flex-col pl-1 h-full '>
        <StyledText className='text-base font-bold px-2 my-1 pt-2'>
          {orginalName}
        </StyledText>
        <StyledText className='text-xl font-bold px-2'>₹{price}</StyledText>
      </StyledView>
    </StyledTouchableOpacity>
  );
};

export default ProductCard;
