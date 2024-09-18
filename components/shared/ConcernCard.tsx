import React from 'react';
import { StyledImage, StyledText, StyledPressable } from './StyledComponents';
interface ConcernProps {
  name: string;
  imageUrl: string;
}

const ConcernCard: React.FC<ConcernProps> = ({ name, imageUrl }) => {
  return (
    <StyledPressable className='mx-2 bg-white w-36 relative rounded-lg shadow-lg shadow-black'>
      <StyledImage
        source={{ uri: imageUrl }}
        className='h-24 w-36 rounded-lg'
      />
      <StyledText className='text-base font-bold capitalize text-center pt-2'>
        {name}
      </StyledText>
    </StyledPressable>
  );
};

export default ConcernCard;
