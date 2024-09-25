import Header from '@components/header';
import {
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  StyledView,
} from '@components/shared/StyledComponents';
import { Ionicons } from '@expo/vector-icons';
import { ROUTES } from 'core/utils/routes';
import React, { useState } from 'react';

const Checkout = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [address, setAddress] = useState({
    name: 'John Doe',
    street: '123 Main St, Suite 500',
    city: 'San Francisco, CA 94105',
    country: 'United States',
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const renderEditField = (label: string, value: string, onChange: any) => (
    <StyledTextInput
      className='border-b border-gray-300 py-1 mb-2'
      value={value}
      onChangeText={onChange}
      placeholder={label}
    />
  );

  return (
    <StyledScrollView className='bg-white px-3'>
      {/* Header */}
      <Header title='Checkout' backUrl={ROUTES.CUSTOMER.PAGES.HOME.CART}>
        <Ionicons name='cart' size={24} color='black' />
      </Header>

      <StyledText className='text-lg font-bold mt-3 pl-2'>
        Shipping Address
      </StyledText>

      <StyledView className='bg-gray-100 p-4 mt-5 rounded-lg shadow-md mb-4 drop-shadow-2xl'>
        <StyledView className='flex-row justify-end items-center bg-gray-100'>
          <StyledTouchableOpacity>
            <StyledText
              className='text-secondary capitalize'
              onPress={toggleEdit}
            >
              {isEditing ? 'save' : 'change'}
            </StyledText>
          </StyledTouchableOpacity>
        </StyledView>

        {/* Address Details */}
        <StyledView>
          {isEditing ? (
            <>
              {renderEditField('Name', address.name, (text: any) =>
                setAddress({ ...address, name: text })
              )}
              {renderEditField('Street', address.street, (text: any) =>
                setAddress({ ...address, street: text })
              )}
              {renderEditField('City', address.city, (text: any) =>
                setAddress({ ...address, city: text })
              )}
              {renderEditField('Country', address.country, (text: any) =>
                setAddress({ ...address, country: text })
              )}
            </>
          ) : (
            <>
              <StyledText className='text-base'>{address.name}</StyledText>
              <StyledText className='text-base'>{address.street}</StyledText>
              <StyledText className='text-base'>{address.city}</StyledText>
              <StyledText className='text-base'>{address.country}</StyledText>
            </>
          )}
        </StyledView>
      </StyledView>

      <StyledView className='bg-gray-100 p-4 mt-5 rounded-lg shadow-md mb-4 drop-shadow-2xl'>
        {/* Order Row */}
        <StyledView className='flex-row justify-between'>
          <StyledText className='text-gray-500 font-semibold'>
            Order:
          </StyledText>
          <StyledText className='font-bold'>$500</StyledText>
        </StyledView>

        {/* Delivery Row */}
        <StyledView className='flex-row justify-between mt-2'>
          <StyledText className='text-gray-500 font-semibold'>
            Delivery:
          </StyledText>
          <StyledText className='font-bold'>$50</StyledText>
        </StyledView>

        {/* Summary Row */}
        <StyledView className='flex-row justify-between mt-2'>
          <StyledText className='text-gray-500 font-semibold'>
            Summary:
          </StyledText>
          <StyledText className='font-bold'>$550</StyledText>
        </StyledView>
      </StyledView>

      {/* submit Button */}
      <StyledTouchableOpacity className='mt-4 bg-secondary py-4 rounded-lg flex-row justify-center items-center'>
        <StyledText className='text-white font-bold text-center capitalize'>
          Submit order
        </StyledText>
      </StyledTouchableOpacity>
    </StyledScrollView>
  );
};

export default Checkout;
