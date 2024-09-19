import Button from '@components/button';
import { StyledText } from '@components/shared/StyledComponents';
import { ROUTES } from 'core/utils/routes';
import { router } from 'expo-router';
import React from 'react';

const CategoryPage = () => {
  return (
    <StyledText>
      cataegory page
      <Button
        title='cataegry details'
        onPress={() =>
          router.push(`${ROUTES.CUSTOMER.PAGES.HOME.CATEGORY_LISTING}${'12'}`)
        }
      />
    </StyledText>
  );
};

export default CategoryPage;
