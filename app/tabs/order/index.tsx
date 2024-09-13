import { StyledScrollView, StyledText, StyledTouchableOpacity, StyledView } from '@components/shared/StyledComponents';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OrderScreen() {
  const [activeTab, setActiveTab] = useState('Delivered');

  return (
    <SafeAreaView>
      <StyledScrollView className="bg-white px-4 py-2">
        {/* Header */}
        <StyledView className="flex-row items-center justify-between mb-4">
        <Link href="/tabs/home">
            <Ionicons name="arrow-back" size={24} color="black" />
          </Link>
          <StyledText className="text-xl font-bold text-black">My Orders</StyledText>
          <Ionicons name="search-outline" size={24} color="black" />
        </StyledView>

        {/* Tabs */}
        <StyledView className="flex-row justify-around mb-4">
          {['Delivered', 'Processing', 'Cancelled'].map((tab) => (
            <StyledTouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full ${activeTab === tab ? 'bg-black' : 'bg-transparent'}`}
            >
              <StyledText className={`${activeTab === tab ? 'text-white' : 'text-black'}`}>
                {tab}
              </StyledText>
            </StyledTouchableOpacity>
          ))}
        </StyledView>

        {/* Order List */}
        {[1, 2, 3].map((order, index) => (
          <StyledView key={index} className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <StyledView className="flex-row justify-between mb-2">
              <StyledText className="text-black text-lg font-bold">Order №1947034</StyledText>
              <StyledText className="text-gray-500">05-12-2019</StyledText>
            </StyledView>
            <StyledView className="flex-row justify-between mb-2">
              <StyledText className="text-black">Tracking number:</StyledText>
              <StyledText className="text-black">IW3475453455</StyledText>
            </StyledView>
            <StyledView className="flex-row justify-between mb-2">
              <StyledText className="text-black">Quantity: 3</StyledText>
              <StyledText className="text-black">Total Amount: 112$</StyledText>
            </StyledView>
            <StyledView className="flex-row justify-between items-center">
              <StyledTouchableOpacity className="border border-gray-500 rounded-full px-4 py-1 mt-2">
                <Link href={"/pages/orderdetail/1"}>
                  details
                </Link>
              </StyledTouchableOpacity>
              <StyledText className="text-green-500">Delivered</StyledText>
            </StyledView>
          </StyledView>
        ))}
      </StyledScrollView>
    </SafeAreaView>
  );
}
