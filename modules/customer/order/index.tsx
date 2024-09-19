import Header from '@components/header';
import {
  StyledScrollView,
  StyledText,
  StyledTouchableOpacity,
  StyledPressable,
  StyledView,
} from '@components/shared/StyledComponents';
import { ROUTES } from 'core/utils/routes';
import { Link } from 'expo-router';
import React, { useState } from 'react';

const OrderScreen = () => {
  const [activeTab, setActiveTab] = useState('Delivered');

  return (
    <StyledScrollView className='bg-gray-100'>
      {/* Header */}
      <Header className='order_header' title='My Orders'></Header>
      {/* Tabs */}
      <StyledView className='flex-row justify-around mb-2'>
        {['Delivered', 'Processing', 'Cancelled'].map((tab) => (
          <StyledPressable
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full ${activeTab === tab ? 'bg-black' : 'bg-transparent border'}`}
          >
            <StyledText
              className={`${activeTab === tab ? 'text-white' : 'text-black'}`}
            >
              {tab}
            </StyledText>
          </StyledPressable>
        ))}
      </StyledView>

      {/* Order List */}
      {[1, 2, 3].map((_order, index) => (
        <StyledView
          key={index}
          className='bg-gray-100 p-4 mx-2 my-3 rounded-lg shadow-md shadow-gray-500'
        >
          <StyledView className='flex-row justify-between mb-2'>
            <StyledText className='text-black text-lg font-bold'>
              Order №1947034
            </StyledText>
            <StyledText className='text-gray-500'>05-12-2019</StyledText>
          </StyledView>
          <StyledView className='flex-row justify-between mb-2'>
            <StyledText className='text-black'>Tracking number:</StyledText>
            <StyledText className='text-black'>IW3475453455</StyledText>
          </StyledView>
          <StyledView className='flex-row justify-between mb-2'>
            <StyledText className='text-black'>Quantity: 3</StyledText>
            <StyledText className='text-black'>Total Amount: 112$</StyledText>
          </StyledView>
          <StyledView className='flex-row justify-between items-center'>
            <StyledTouchableOpacity className='border border-gray-500 rounded-full px-4 py-1 mt-2'>
              <Link
                href={
                  `${ROUTES.CUSTOMER.PAGES.ORDERS.ORDERS_DETAILS}${'PID123'}` as any
                }
              >
                details
              </Link>
            </StyledTouchableOpacity>
            <StyledText className='text-green-600 font-bold text-lg'>
              Delivered
            </StyledText>
          </StyledView>
        </StyledView>
      ))}
    </StyledScrollView>
  );
};

export default OrderScreen;
