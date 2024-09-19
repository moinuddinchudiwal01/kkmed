import { StyledText } from '@components/shared/StyledComponents';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

const CategoryDetailsPage = () => {
  const categoryDetailsId = useLocalSearchParams().id;

  return <StyledText>CategoryDetailsPage{categoryDetailsId}</StyledText>;
};

export default CategoryDetailsPage;
