import React from 'react';
import { StyledImage, StyledText, StyledPressable } from "./StyledComponents";
interface ConcernProps {
  name: string;
  imageUrl: string;
}

const ConcernCard: React.FC<ConcernProps> = ({ name,imageUrl }) => {
  return (
    <StyledPressable className="m-2 bg-white w-32 relative">
      <StyledImage source={{ uri: imageUrl }} className="h-28 rounded-lg" />
      <StyledText className="text-base font-bold capitalize text-center px-2 pt-2">{name}</StyledText>
    </StyledPressable>
  );
};

export default ConcernCard;