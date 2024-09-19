import {
  StyledScrollView,
  StyledText,
  StyledView,
} from '@components/shared/StyledComponents';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

const ProductDetails = () => {
  const productId = useLocalSearchParams().id;

  return (
    <StyledScrollView>
      <StyledView>
        <StyledText>products details {productId}</StyledText>
      </StyledView>
    </StyledScrollView>
  );
};

export default ProductDetails;
