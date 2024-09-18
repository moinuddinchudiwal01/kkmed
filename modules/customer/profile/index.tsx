import { styled } from 'nativewind';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { ROUTES } from 'core/utils/routes';
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);

export default function ProfileScreen() {
  return (
    <StyledScrollView className='bg-white px-4 py-2'>
      <StyledView className='flex-row items-center mb-4'>
        <StyledText className='ml-2 text-xl font-bold text-black'>
          PROFILES
        </StyledText>
      </StyledView>

      <StyledView className='bg-secondary pl-6 rounded-lg mb-4 h-40 flex justify-center'>
        <StyledView className='flex-row items-center'>
          <StyledImage
            source={require('@assets/images/user.png')}
            className='w-20 h-20 rounded-full bg-white'
          />
          <StyledView className='pl-4 flex flex-col gap-1'>
            <StyledText className='text-white text-lg font-bold'>
              Anni
            </StyledText>
            <StyledText className='text-gray-400'>anni@gmail.com</StyledText>
            <StyledText className='text-green-400'>
              Registered Since Dec 202X
            </StyledText>
          </StyledView>
        </StyledView>
        <StyledTouchableOpacity className='absolute top-12 right-4'>
          <Ionicons name='create-outline' size={24} color='white' />
        </StyledTouchableOpacity>
      </StyledView>

      <ProfileOption
        title='My Orders'
        icon='document-text-outline'
        url={ROUTES.CUSTOMER.TABS.ORDERS}
      />
      <ProfileOption
        title='My Wishlist'
        icon='heart-outline'
        url={ROUTES.CUSTOMER.PAGES.PROFILE.WISHLIST}
      />
      <ProfileOption
        title='My Prescription'
        icon='medkit-outline'
        url={ROUTES.CUSTOMER.PAGES.PROFILE.MYPRESCRIPTION}
      />
      <ProfileOption
        title='Your Lab Test'
        icon='flask-outline'
        url={ROUTES.CUSTOMER.PAGES.PROFILE.LABTEST}
      />
      <ProfileOption
        title='Doctor Consultation'
        icon='person-outline'
        url={ROUTES.CUSTOMER.PAGES.PROFILE.CONSULTATION}
      />
      <ProfileOption
        title='Payment Methods'
        icon='card-outline'
        url={ROUTES.CUSTOMER.PAGES.PROFILE.PAYMENT}
      />
      <ProfileOption
        title='Your Addresses'
        icon='location-outline'
        url={ROUTES.CUSTOMER.PAGES.PROFILE.ADDRESS}
      />
      <ProfileOption
        title='Pill Reminder'
        icon='alarm-outline'
        url={ROUTES.CUSTOMER.PAGES.PROFILE.PILL_REMINDER}
      />
      <ProfileOption
        title='Invite Friends'
        icon='person-add-outline'
        url={ROUTES.CUSTOMER.PAGES.PROFILE.INVITE_FRIENDS}
      />

      <StyledView className='bg-purple-100 p-4 rounded-lg mt-4'>
        <StyledText className='text-black font-bold'>Need Help?</StyledText>
      </StyledView>
    </StyledScrollView>
  );
}

const ProfileOption = ({
  title,
  icon,
  url,
}: {
  title: string;
  icon: string;
  url: string;
}) => (
  <StyledTouchableOpacity className='flex-row items-center justify-between px-4 py-3 border-b border-gray-200'>
    <Link href={url as any}>
      <StyledView className='flex-row items-center'>
        <Ionicons name={icon as any} size={24} color='black' />
        <StyledText className='ml-4 text-black text-lg'>{title}</StyledText>
      </StyledView>
    </Link>
  </StyledTouchableOpacity>
);
