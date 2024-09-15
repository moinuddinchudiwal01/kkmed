import { StyledText, StyledView } from '@components/shared/StyledComponents';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  backUrl?: string;
  children?: ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <StyledView className="flex-row items-center justify-center relative mb-8 mt-2">
      <Link href={props.backUrl as any} className="absolute left-0">
        <Ionicons name="arrow-back" size={24} color="black" />
      </Link>
      <StyledText className="text-xl font-bold capitalize">{props.title}</StyledText>

      {props.children && (
        <StyledView className="absolute right-0">
          {props.children}
        </StyledView>
      )}
    </StyledView>
  );
};

export default Header;
