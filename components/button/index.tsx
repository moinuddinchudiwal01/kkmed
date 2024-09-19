import {
  StyledPressable,
  StyledText,
} from '@components/shared/StyledComponents';
import React from 'react';

interface ButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
}

const Button = ({ title, onPress, className = '' }: ButtonProps) => {
  return (
    <StyledPressable
      className={`rounded-lg py-3 my-2 bg-secondary text-white ${className}`}
      onPress={onPress}
    >
      <StyledText className='text-center text-lg font-bold text-white capitalize'>
        {title}
      </StyledText>
    </StyledPressable>
  );
};

export default Button;
