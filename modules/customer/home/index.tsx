import { StyledImage, StyledScrollView, StyledText, StyledTextInput, StyledTouchableOpacity, StyledView } from '@components/shared/StyledComponents';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import React from 'react';
import banner from '@assets/images/Banner.png';
import ProductCart from '@components/shared/ProductCart';
import CategoryCard from '@components/shared/CategoryCard';
import ConcernCard from '@components/shared/ConcernCard';

const products = [
  { name: 'Fish Oil 1000 (30pcs)', price: '75.000', originalPrice: '150.000', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-907329974-1661963045.jpg' },
  { name: 'Ibuprofen 250mg', price: '12.000', originalPrice: '24.000', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets.jpg' },
  { name: 'Fish Oil 1000 (30pcs)', price: '75.000', originalPrice: '150.000', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-907329974-1661963045.jpg' },
  { name: 'Ibuprofen 250mg', price: '12.000', originalPrice: '24.000', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets.jpg' },
];

const category = [
  { name: 'medicine', imageUrl: 'https://i.pinimg.com/564x/68/54/89/6854895b4e52be9c4e6484eb224b7639.jpg' },
  { name: 'healthCare', imageUrl: 'https://cdn-icons-png.flaticon.com/512/5759/5759421.png' },
  { name: 'insulin', imageUrl: 'https://cdn-icons-png.flaticon.com/512/8730/8730868.png' },
  { name: 'skinCare', imageUrl: 'https://cdn-icons-png.flaticon.com/512/4192/4192598.png' },
]
const concern = [
  { name: 'diabetic care', imageUrl: 'https://sanchetihospital.org/wp-content/uploads/2018/08/diabetes-clinic.jpg' },
  { name: 'skin care', imageUrl: 'https://www.yesmadam.com/blog/wp-content/uploads/2022/08/EYE-CREAM-min.jpg' },
  { name: 'stomach & liver care', imageUrl: 'https://www.divyanursinghome.in/wp-content/uploads/2023/06/gastro.jpg' },
  { name: 'heart care', imageUrl: 'https://h2hcardiaccenter.com/blog/wp-content/uploads/2018/05/heart-care.jpg' },
]
export default function HomeScreen() {
  return (
    <StyledScrollView className='bg-white px-4 py-2'>
      {/* Header Section */}
      <StyledView className="flex-row justify-between gap-2 items-center bg-white">
        <StyledTextInput
          placeholder="Search meds or..."
          className="text-gray-700 w-[75%] border-gray-400 border p-3 rounded-xl text-lg" style={{paddingLeft: 13}}
        />
        <StyledTouchableOpacity className="relative flex flex-row ">
        <StyledView className="absolute top-0 left-3 w-6 h-6 z-10 bg-red-600 rounded-full flex items-center justify-center">
            <StyledText className="text-white text-sm">5</StyledText>
          </StyledView>
          <Link href={'/pages/notfication'}>
            <Ionicons name="notifications-outline" size={40} color="#6b7280" />
          </Link>
          <Link href={'/pages/cart'}>
            <Ionicons name="bag-handle-outline" size={40} color="#6b7280" />
          </Link>
          <StyledView className="absolute top-0 right-0 w-6 h-6 bg-highlighted rounded-full flex items-center justify-center">
            <StyledText className="text-white text-sm">2</StyledText>
          </StyledView>
        </StyledTouchableOpacity>
      </StyledView>
      
      {/* Promotional Banner */}
      <StyledView className="mt-4 ">
        <StyledImage source={banner} className="w-full h-36 rounded-lg max-[390px]:h-32" />
      </StyledView>

      {/* Category Section */}
      <StyledView className="mt-4 ">
        <StyledView className="flex-row justify-between items-center">
          <StyledText className="text-xl font-bold mb-2 pl-2">Shop By Category</StyledText>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </StyledView>
      </StyledView>
      {/* Category Cards */}
      <StyledView className="">
      <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
        {category.map((product, index) => (
          <CategoryCard key={index} {...product} />
        ))}
      </StyledScrollView>
      </StyledView>

      <StyledView className="mt-4 ">
        <StyledView className="flex-row justify-between items-center">
          <StyledText className="text-xl font-bold mb-2 pl-2">New Products</StyledText>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </StyledView>
      </StyledView>
      {/* Product Cards */}
      <StyledView className="">
      <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((product, index) => (
          <ProductCart key={index} {...product} />
        ))}
      </StyledScrollView>
      </StyledView>

     {/* Concern Section */}
      <StyledView className="mt-4">
        <StyledView className="flex-row justify-between items-center">
          <StyledText className="text-xl font-bold mb-2 pl-2">Shop By Concern</StyledText>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </StyledView>
      </StyledView>
      {/* Concern Cards */}
      <StyledView className="mb-20">
      <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
        {concern.map((product, index) => (
          <ConcernCard key={index} {...product} />
        ))}
      </StyledScrollView>
      </StyledView>

    </StyledScrollView>
  );
}
