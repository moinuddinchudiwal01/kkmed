import {
  StyledScrollView,
  StyledText,
  StyledView,
} from '@components/shared/StyledComponents';
import React from 'react';

const ProductsPage = () => {
  return (
    <StyledScrollView>
      <StyledView>
        <StyledText>products listing</StyledText>
      </StyledView>
    </StyledScrollView>
  );
};

export default ProductsPage;
