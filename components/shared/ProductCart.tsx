import React from 'react';
import { StyledImage, StyledTouchableOpacity, StyledText, StyledView } from "./StyledComponents";
interface ProductProps {
  name: string;
  price: string;
  originalPrice: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, originalPrice, imageUrl }) => {
  return (
    <StyledTouchableOpacity className="m-2 bg-white rounded-lg shadow-md shadow-black">
      <StyledImage source={{ uri: imageUrl }} className="h-36 w-40 rounded-t-lg" />
      <StyledText className="text-sm px-2 pt-2">{name}</StyledText>
      <StyledView className='flex-row items-center'>
      <StyledText className="text-base font-bold px-2">₹{price}</StyledText>
      <StyledText className="text-sm bg-highlighted text-center text-white font-bold px-2 rounded-lg">50%</StyledText>
      </StyledView>
      <StyledText className="text-xs line-through px-2 pb-2">₹{originalPrice}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default ProductCard;