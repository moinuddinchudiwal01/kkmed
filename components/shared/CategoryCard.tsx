import React from 'react';
import { StyledImage, StyledText, StyledView, StyledPressable } from "./StyledComponents";
interface CategoryProps {
  name: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ name,imageUrl }) => {
  return (
    <StyledPressable className="m-2 bg-white w-32">
      <StyledView className='w-[110px] p-2 border border-gray-400 rounded-lg'>
      <StyledImage source={{ uri: imageUrl }} className="h-24 object-cover" />
      </StyledView>
      <StyledText className="text-base capitalize font-bold text-center px-2 pt-2">{name}</StyledText>
    </StyledPressable>
  );
};

export default CategoryCard;