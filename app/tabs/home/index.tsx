import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import Ionicons from '@expo/vector-icons/Ionicons';
// Import categories JSON

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledSafeAreaView = styled(SafeAreaView);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);

const categories = [
  {
    id: 1,
    title: 'Medicines',
    image: '@assets/images/image3.png'
  },
  {
    id: 2,
    title: 'Nutritional Drinks',
    image: '@assets/images/image4.png'
  },
  {
    id: 3,
    title: 'Ayurveda',
    image: '@assets/images/image5.png'
  },
  {
    id: 4,
    title: 'Vitamins & Supplement',
    image: '@assets/images/image6.png'
  },
  {
    id: 5,
    title: 'Diabetes Care',
    image: '@assets/images/image7.png'
  },
  {
    id: 6,
    title: 'Health Devices',
    image: '@assets/images/image8.png'
  }  
];

export default function HomeScreen() {

  return (
    <StyledSafeAreaView className="flex-1 bg-[#f8f8f8] mt-10">
      <StyledScrollView>
        {/* Header Section */}
        <StyledView className="flex-row justify-between items-center px-4 py-2 bg-white">
          <StyledView className="flex-row items-center gap-1">
            <Ionicons name="person-circle-outline" size={28} color="#151921" />
            <StyledText className="text-xl font-semibold text-black">MEDICINE</StyledText>
          </StyledView>
          <StyledTouchableOpacity className="relative">
            <Ionicons name="notifications-outline" size={28} color="#151921" />
            <StyledView className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <StyledText className="text-white text-xs">2</StyledText>
            </StyledView>
          </StyledTouchableOpacity>
        </StyledView>

        {/* Search Bar */}
        <StyledView className="mx-4 my-4 bg-gray-100 rounded-lg flex-row items-center p-2">
          <StyledTextInput
            placeholder="Search Medicine & Health Products"
            className="flex-1 ml-4 text-gray-700"
          />
          <Ionicons name="search" size={24} color="#151921" />
        </StyledView>

        {/* Banner Section 1 */}
        <StyledView className="mx-4 bg-lightPurple p-4 mb-4" style={{ borderRadius: 20 }}>
          <StyledText className="text-base font-extrabold text-black">UPLOAD PRESCRIPTION</StyledText>
          <StyledText className="text-sm text-gray-700">
            Upload a Prescription and Tell Us what you Need. We do the Rest.!
          </StyledText>
          <StyledView className='flex flex-row justify-between'>
            <StyledText className="w-1/3 text-sm text-black font-bold mt-2">
              FLAT 25% OFF ON MEDICINES*
            </StyledText>
            <StyledTouchableOpacity className="bg-darkPurple rounded-lg px-4 py-2 mt-4">
              <StyledText className="text-white text-center">ORDER NOW</StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>

        {/* Banner Section 2 */}
        <StyledView className="mx-4 ">
          <StyledImage source={require('@assets/images/ad.png')} className="w-full h-48" />
        </StyledView>

        {/* Popular Categories Section */}
        <StyledView className="mx-4 mt-2">
          <StyledView className="flex-row justify-between items-center mb-4">
            <StyledText className="text-lg font-bold text-black">Popular Categories</StyledText>
            <StyledTouchableOpacity>
              <StyledText className="text-black">SEE ALL</StyledText>
            </StyledTouchableOpacity>
          </StyledView>

          {/* Categories Grid */}
          <StyledView className="flex-row flex-wrap justify-between">
            {categories.map((category, index) => (
              <CategoryCard key={index} title={category.title} image={category.image} />
            ))}
          </StyledView>
        </StyledView>
      </StyledScrollView>
    </StyledSafeAreaView>
  );
}


const CategoryCard = ({ title, image }: { title: string; image: string }) => (
  <StyledTouchableOpacity className="w-[48%] bg-white rounded-lg p-4 mb-4 items-center">
    <StyledImage source={{ uri: image }} className="w-20 h-20 mb-2" />
    <StyledText className="text-sm font-medium text-black">{title}</StyledText>
  </StyledTouchableOpacity>
);
