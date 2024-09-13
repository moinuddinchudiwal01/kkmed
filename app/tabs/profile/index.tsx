import { StyledImage, StyledScrollView, StyledText, StyledTouchableOpacity, StyledView } from '@components/shared/StyledComponents';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const router = useRouter();

  const onLinkPress = (link : string) => {
    router.push(link);
  }

  return (
    <SafeAreaView>
      <StyledScrollView className="bg-white px-4 py-2">
        <StyledView className="flex-row items-center justify-center mb-4">
          <StyledText className="ml-2 text-xl font-bold text-black uppercase">PROFILES</StyledText>
        </StyledView>

        <StyledView className="bg-secondary pl-6 rounded-lg mb-4 h-40 flex justify-center">
          <StyledView className="flex-row items-center">
            <StyledImage
              source={require('@assets/images/user.png')}
              className="w-20 h-20 rounded-full bg-white"
            />
            <StyledView className="pl-4 flex flex-col gap-1">
              <StyledText className="text-white text-lg font-bold">Kasim</StyledText>
              <StyledText className="text-gray-400">KasimKadiwala@gmail.com</StyledText>
              <StyledText className="text-green-400">Registered Since Dec 202X</StyledText>
            </StyledView>
          </StyledView>
          <StyledTouchableOpacity className="absolute top-12 right-4">
            <Ionicons name="create-outline" size={24} color="white" />
          </StyledTouchableOpacity>
        </StyledView>

        {/* <ProfileOption title="My Orders" icon="document-text-outline" onLinkPress={() => onLinkPress('/tabs/order')} /> */}
        <ProfileOption title="My Wishlist" icon="heart-outline" onLinkPress={() => null}/>
        <ProfileOption title="My Prescription" icon="medkit-outline" onLinkPress={() => onLinkPress("/pages/prescription")} />
        {/* <ProfileOption title="Your Lab Test" icon="flask-outline" /> */}
        {/* <ProfileOption title="Doctor Consultation" icon="person-outline" /> */}
        {/* <ProfileOption title="Payment Methods" icon="card-outline" /> */}
        <ProfileOption title="Your Addresses" icon="location-outline" onLinkPress={() => onLinkPress("/pages/shippingdetails")}/>
        {/* <ProfileOption title="Pill Reminder" icon="alarm-outline" /> */}
        <ProfileOption title="Invite Friends" icon="person-add-outline" />
        <StyledView className="bg-purple-100 p-4 rounded-lg mt-4">
          <StyledText className="text-black font-bold">Need Help?</StyledText>
        </StyledView>

      </StyledScrollView>
    </SafeAreaView>
  );
}

const ProfileOption = ({ title, icon , onLinkPress }: { title: string; icon: string, onLinkPress?: () => void }) => (
  <StyledTouchableOpacity onPress={onLinkPress} className="flex-row items-center px-4 py-3 border-b border-gray-200">
      <Ionicons name={icon as any} size={24} color="black" />
      <StyledText className="ml-4 text-black text-lg">{title}</StyledText>
  </StyledTouchableOpacity>
);
