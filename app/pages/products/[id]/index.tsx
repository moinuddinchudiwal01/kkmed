import React, { useState } from 'react';
import {
  StyledScrollView,
  StyledText,
  StyledView,
  StyledImage,
  StyledTouchableOpacity,
} from '@components/shared/StyledComponents';
import Header from '@components/header';
import { ROUTES } from 'core/utils/routes';
import productsData from 'data/medicine.json';

interface ExpandedFAQs {
  [key: string]: boolean;
}
const ProductDetails = () => {
  const [productDetails] = useState(productsData.data.medcine[0]);
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [activeTab, setActiveTab] = useState('uses');
  const [expandedFAQs, setExpandedFAQs] = useState<ExpandedFAQs>({});

  const toggleFAQ = (id: string) => {
    setExpandedFAQs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <StyledScrollView className='bg-gray-100 py-4'>
      <Header title='Medicine' backUrl={ROUTES.CUSTOMER.TABS.HOME} />
      <StyledView className='bg-white rounded-lg shadow px-3'>
        {/* image */}
        <StyledView className='p-2 items-center'>
          <StyledImage
            src={productDetails.medcine_image}
            alt='Product'
            className='w-72 h-60 object-contain rounded'
          />
        </StyledView>

        <StyledText className='text-xl font-semibold mt-2'>
          {productDetails.medcine_name}
        </StyledText>
        <StyledText className='text-sm text-gray-600'>
          {productDetails.brand_name}
        </StyledText>
        <StyledView className='flex flex-row justify-between'>
          <StyledView className='flex flex-row gap-2 items-center'>
            <StyledText className='text-xl font-bold text-green-600'>
              MRP ₹{productDetails.new_price}
            </StyledText>
            <StyledText className='text-gray-600 line-through'>
              ₹{productDetails.old_price}
            </StyledText>
          </StyledView>
          <StyledText className='text-sm w-20 rounded-md text-white bg-highlighted px-2 py-1 mt-1'>
            {productDetails.offer} % OFF
          </StyledText>
        </StyledView>
        <StyledView className='mt-3'>
          <StyledText className='font-bold text-lg'>Description</StyledText>
          <StyledText className='text-base'>
            {expandedDescription ||
            productDetails.description_content.length <= 50
              ? productDetails.description_content
              : `${productDetails.description_content.substring(0, 150)}... `}
            {productDetails.description_content.length > 50 && (
              <StyledTouchableOpacity
                className=''
                onPress={() => setExpandedDescription(!expandedDescription)}
              >
                <StyledText className='text-blue-500'>
                  {expandedDescription ? 'Read Less' : 'Read More'}
                </StyledText>
              </StyledTouchableOpacity>
            )}
          </StyledText>
        </StyledView>
        <StyledView className='flex mt-4 flex-row'>
          {['uses', 'contraindications', 'side effects'].map((tab) => (
            <StyledTouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`font-bold p-2 ${activeTab === tab ? 'text-blue-500' : 'text-gray-500'}`}
            >
              <StyledText>{tab}</StyledText>
            </StyledTouchableOpacity>
          ))}
        </StyledView>
        <StyledView
          className={`mt-4 ${activeTab === 'uses' ? 'block' : 'hidden'}`}
        >
          <StyledText className='font-bold'>Uses</StyledText>
          {productDetails.medicine_uses.map((use) => (
            <StyledText key={use.title} className='text-sm'>
              {use.description}
            </StyledText>
          ))}
        </StyledView>
        <StyledView
          className={`mt-4 ${activeTab === 'side effects' ? 'block' : 'hidden'}`}
        >
          <StyledText className='font-bold'>Side Effects</StyledText>
          {productDetails.medicine_side_effects.map((effect) => (
            <StyledTouchableOpacity
              key={effect.title}
              onPress={() => toggleFAQ(effect.title)}
            >
              <StyledText className='text-sm flex justify-between items-center'>
                {effect.title}
                <StyledText>
                  {expandedFAQs[effect.title] ? '▲' : '▼'}
                </StyledText>
              </StyledText>
              {expandedFAQs[effect.title] && (
                <StyledView>
                  <StyledText className='text-xs text-gray-600'>
                    {effect.description}
                  </StyledText>
                  {effect.main_effects.map((me, index) => (
                    <StyledText key={index} className='text-xs text-gray-600'>
                      {me}
                    </StyledText>
                  ))}
                </StyledView>
              )}
            </StyledTouchableOpacity>
          ))}
        </StyledView>
        <StyledView className='mt-4'>
          <StyledText className='font-bold'>
            Frequently Asked Questions
          </StyledText>
          {productDetails.frequently_asked_questions.map((faq) => (
            <StyledTouchableOpacity
              key={faq.id}
              onPress={() => toggleFAQ(faq.id)}
            >
              <StyledText className='text-sm font-semibold flex justify-between items-center'>
                {faq.question}
                <StyledText>{expandedFAQs[faq.id] ? '▲' : '▼'}</StyledText>
              </StyledText>
              {expandedFAQs[faq.id] && (
                <StyledText className='text-sm'>{faq.answer}</StyledText>
              )}
            </StyledTouchableOpacity>
          ))}
        </StyledView>
      </StyledView>
    </StyledScrollView>
  );
};

export default ProductDetails;
