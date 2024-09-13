import { styled } from 'nativewind';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
  Animated,
  Easing,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import DeliveryInformation from '@components/DeliveryInformation';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);

export default function OrderScreen() {
  const [openDeliveryInformation, setOpenDeliveryInformation] = useState(false);
  const [slideAnim] = useState(new Animated.Value(300)); // Initial position of the modal

  const toggleDeliveryInformation = () => {
    if (!openDeliveryInformation) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
    setOpenDeliveryInformation(!openDeliveryInformation);
  };

  const closeDeliveryInformation = () => {
    Animated.timing(slideAnim, {
      toValue: 300,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      setOpenDeliveryInformation(false);
    });
  };

  return (
    <SafeAreaView>
      <StyledScrollView className="bg-white px-4 py-2">
        {/* Header */}
        <StyledView className="flex-row items-center justify-between mb-4">
          <Link href="/tabs/home">
            <Ionicons name="arrow-back" size={24} color="black" />
          </Link>
          <StyledText className="text-xl font-bold text-black">Order Details</StyledText>
          <Ionicons name="search-outline" size={24} color="black" />
        </StyledView>

        {/* Order Delivered Banner */}
        <StyledView className="bg-lightPurple p-4 rounded-md mb-4">
          <StyledText className="text-lg font-bold text-black">Order delivered!</StyledText>
          <StyledText className="text-sm text-gray-500">
            Please ensure that the safety sticker is untouched.
          </StyledText>
        </StyledView>

        {/* Customer Info */}
        <StyledView className="mb-4">
          <StyledText className="text-base font-bold text-black capitalize">Kasim Kadiwala</StyledText>
          <StyledText className="text-sm text-gray-500 capitalize">Sidhpur, Rasulpur - 384290</StyledText>
        </StyledView>

        {/* Delivery Info */}
        <StyledView className="flex-row items-center justify-between gap-2 mb-4">
          <StyledView className="flex-row items-center gap-2">
            <Ionicons name="checkmark-circle-outline" size={24} color="green" />
            <StyledText className="text-sm text-gray-500">
              Delivered on 29.06.2022, 5:30 PM
            </StyledText>
          </StyledView>
          <StyledTouchableOpacity onPress={toggleDeliveryInformation}>
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
          </StyledTouchableOpacity>
        </StyledView>

        {/* Items in Order */}
        <StyledText className="text-lg font-bold text-black mb-2">Items in order</StyledText>

        {/* Order Items */}
        <StyledView className="space-y-4 mb-6">
          {/* Item 1 */}
          <StyledView className="flex-row items-center justify-between">
            <StyledImage source={require('@assets/images/image3.png')} className="w-16 h-16 rounded-md" />
            <StyledView className="flex-1 ml-4">
              <StyledText className="font-bold text-black">
                Paracetamol-Ratiopharm 500mg Tabletten 20 ST
              </StyledText>
              <StyledText className="text-sm text-gray-500">150ml | 1.95 ₹ x5</StyledText>
            </StyledView>
            <StyledText className="text-base font-bold text-black">9.75 ₹</StyledText>
          </StyledView>

          {/* Item 2 */}
          <StyledView className="flex-row items-center justify-between">
            <StyledImage source={require('@assets/images/image3.png')} className="w-16 h-16 rounded-md" />
            <StyledView className="flex-1 ml-4">
              <StyledText className="font-bold text-black">Gelomyrtol Forte 20 ST</StyledText>
              <StyledText className="text-sm text-gray-500">20pcs | 12.95 ₹ x1</StyledText>
            </StyledView>
            <StyledText className="text-base font-bold text-black">12.95 ₹</StyledText>
          </StyledView>

          {/* Item 3 */}
          <StyledView className="flex-row items-center justify-between">
            <StyledImage source={require('@assets/images/image3.png')} className="w-16 h-16 rounded-md" />
            <StyledView className="flex-1 ml-4">
              <StyledText className="font-bold text-black">Aesop Resurrection</StyledText>
              <StyledText className="text-sm text-gray-500">500ml soap | 31.00 ₹ x1</StyledText>
            </StyledView>
            <StyledText className="text-base font-bold text-black">31.00 ₹</StyledText>
          </StyledView>
        </StyledView>

        {/* Order Summary */}
        <StyledView className="flex-row justify-between mb-4">
          <StyledText className="text-lg font-bold text-black">Order Total</StyledText>
          <StyledText className="text-lg font-bold text-black">53.70 ₹</StyledText>
        </StyledView>

        {/* Order Details */}
        <StyledView className="space-y-2 mb-6">
          <StyledText className="text-sm text-gray-500">Order ID: VSLR-298A</StyledText>
          <StyledText className="text-sm text-gray-500">Order Time: 29.06.2022, 14:13</StyledText>
          <StyledText className="text-sm text-gray-500">Payment Time: 29.06.2022, 14:17</StyledText>
          <StyledText className="text-sm text-gray-500">Ship Time: 29.06.2022, 14:47</StyledText>
          <StyledText className="text-sm text-gray-500">Completed Time: 29.06.2022, 15:18</StyledText>
        </StyledView>

        {/* Buy Again Button */}
        <StyledTouchableOpacity className="bg-darkPurple rounded-md py-3">
          <StyledText className="text-center text-white text-base font-bold">BUY AGAIN</StyledText>
        </StyledTouchableOpacity>

        {/* Modal for Delivery Information */}
        <Modal
          visible={openDeliveryInformation}
          animationType="slide"
          transparent={true}
          onRequestClose={closeDeliveryInformation}
        >
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Animated.View
              style={{
                transform: [{ translateY: slideAnim }],
                height: '80%',
                backgroundColor: 'white',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 20,
              }}
            >
              <DeliveryInformation onClose={closeDeliveryInformation} />
            </Animated.View>
          </View>
        </Modal>
      </StyledScrollView>
    </SafeAreaView>
  );
}
