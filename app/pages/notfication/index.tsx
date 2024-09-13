import { StyledScrollView, StyledText, StyledTouchableOpacity, StyledView } from '@components/shared/StyledComponents';
import Ionicons from '@expo/vector-icons/Ionicons';
import { notifications } from 'data/notification';
import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Notification = () => {
  return (
    <SafeAreaView>
      <StyledScrollView className="bg-white px-4 py-2">
        {/* Header */}
        <StyledView className="flex-row items-center mb-4">
          <Link href="/tabs/home">
            <Ionicons name="arrow-back" size={24} color="black" />
          </Link>
          <StyledText className="ml-2 text-xl font-bold text-black">Notification</StyledText>
          <StyledTouchableOpacity className="ml-auto">
            <StyledText className="text-blue-600">Clear all</StyledText>
          </StyledTouchableOpacity>
        </StyledView>

        {/* Notifications */}
        {notifications.map((notification) => (
          <StyledTouchableOpacity key={notification.id} className="flex-row gap-3 justify-center items-center py-2 border-b border-gray-200 my-1">
            <Ionicons
              name={notification.icon as any}
              size={30}
              color={notification.unread ? 'blue' : 'gray'}
              className="mr-3"
            />
            <StyledView className="flex-1">
              <StyledText className="text-black">{notification.message}</StyledText>
              <StyledText className="text-gray-500 text-xs mt-1">{notification.time}</StyledText>
            </StyledView>
          </StyledTouchableOpacity>
        ))}
      </StyledScrollView>
    </SafeAreaView>
  );
};

export default Notification;
