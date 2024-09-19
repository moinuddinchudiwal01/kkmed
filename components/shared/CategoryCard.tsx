import React from 'react';
import {
  StyledImage,
  StyledText,
  StyledView,
  StyledPressable,
} from './StyledComponents';
import { router } from 'expo-router';
import { ROUTES } from 'core/utils/routes';
interface CategoryProps {
  name: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ name, imageUrl }) => {
  return (
    <StyledPressable
      onPress={() => router.push(`${ROUTES.CUSTOMER.PAGES.HOME.CATEGORY}`)}
      className='m-2 bg-white w-32 p-2 rounded-lg shadow-lg shadow-gray-500'
    >
      <StyledView className='w-[110px] p-2 items-center'>
        <StyledImage
          source={{ uri: imageUrl }}
          className='h-16 w-16 object-cover'
        />
      </StyledView>
      <StyledText className='text-base capitalize font-bold text-center px-2 pt-2'>
        {name}
      </StyledText>
    </StyledPressable>
  );
};

export default CategoryCard;
