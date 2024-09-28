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
import { Ionicons } from '@expo/vector-icons';

interface ExpandedFAQs {
  [key: string]: boolean;
}

const ProductDetails = () => {
  const [productDetails] = useState(productsData.data.medcine[0]);
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [expandedFAQs, setExpandedFAQs] = useState<ExpandedFAQs>({});

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const toggleFAQ = (id: string) => {
    setExpandedFAQs({
      ...expandedFAQs,
      [id]: !expandedFAQs[id],
    });
  };

  return (
    <StyledScrollView className='bg-gray-100 py-2 px-4'>
      <Header title='Medicine' backUrl={ROUTES.CUSTOMER.TABS.HOME} />

      <StyledView className='my-3 bg-white p-2 rounded-lg'>
        {/* Image */}
        <StyledView className='p-2 items-center'>
          <StyledImage
            src={productDetails.medcine_image}
            alt='Product'
            className='w-full h-72'
          />
        </StyledView>

        {/* Product Info */}
        <StyledText className='text-xl font-semibold mt-2'>
          {productDetails.medcine_name}
        </StyledText>
        <StyledText className='text-base text-black'>
          {productDetails.brand_name}
        </StyledText>

        <StyledView className='flex flex-row justify-between items-end'>
          <StyledView className='flex flex-row gap-2 items-end'>
            <StyledView className='flex flex-col gap-1'>
              <StyledText className='text-gray-600 text-base line-through'>
                MRP ₹{productDetails.old_price}
              </StyledText>
              <StyledText className='text-xl font-bold text-green-600'>
                ₹{parseFloat(productDetails.new_price).toFixed(2)}
              </StyledText>
            </StyledView>
            <StyledText className='text-sm w-20 h-8 rounded-md text-secondary bg-primary px-2 py-1 mt-1'>
              {productDetails.offer} % OFF
            </StyledText>
          </StyledView>
          <StyledTouchableOpacity className='bg-secondary rounded-lg px-3 py-2 h-12'>
            <StyledText className='text-white text-lg'>Add To Cart</StyledText>
          </StyledTouchableOpacity>
        </StyledView>

        {/* Description */}
        <StyledView className='my-4'>
          <StyledText className='font-bold text-lg'>Description</StyledText>
          <StyledText className='text-base'>
            {expandedDescription ||
            productDetails.description_content.length <= 50
              ? productDetails.description_content
              : `${productDetails.description_content.substring(0, 150)}... `}
            {productDetails.description_content.length > 50 && (
              <StyledTouchableOpacity
                onPress={() => setExpandedDescription(!expandedDescription)}
              >
                <StyledText className='text-blue-500'>
                  {expandedDescription ? 'Read Less' : 'Read More'}
                </StyledText>
              </StyledTouchableOpacity>
            )}
          </StyledText>
        </StyledView>

        {/* Accordion for Uses */}
        <StyledTouchableOpacity
          className='mt-0 flex flex-row justify-between'
          onPress={() => toggleAccordion('uses')}
        >
          <StyledText className='font-bold text-lg'>Uses</StyledText>
          {activeAccordion === 'uses' ? (
            <Ionicons name='chevron-up' size={24} color='black' />
          ) : (
            <Ionicons name='chevron-down' size={24} color='black' />
          )}
        </StyledTouchableOpacity>
        {activeAccordion === 'uses' && (
          <StyledView className='mt-2'>
            {productDetails.medicine_uses.map((use) => (
              <StyledText key={use.title} className='text-base text-black'>
                {use.description}
              </StyledText>
            ))}
          </StyledView>
        )}

        {/* Accordion for Side Effects */}
        <StyledTouchableOpacity
          className='mt-4 flex flex-row justify-between'
          onPress={() => toggleAccordion('side effects')}
        >
          <StyledText className='font-bold text-lg'>Side Effects</StyledText>
          {activeAccordion === 'side effects' ? (
            <Ionicons name='chevron-up' size={24} color='black' />
          ) : (
            <Ionicons name='chevron-down' size={24} color='black' />
          )}
        </StyledTouchableOpacity>
        {activeAccordion === 'side effects' && (
          <StyledView className='mt-2'>
            {productDetails.medicine_side_effects.map((effect) => (
              <StyledView key={effect.title}>
                {effect.description && (
                  <StyledView>
                    <StyledText className='text-base'>
                      {effect.description}
                    </StyledText>
                    {effect.main_effects.map((me, index) => (
                      <StyledText key={index} className='text-base'>
                        {index + 1}. {me}
                      </StyledText>
                    ))}
                  </StyledView>
                )}
              </StyledView>
            ))}
          </StyledView>
        )}

        {/* Accordion for FAQs */}
        <StyledTouchableOpacity
          className='mt-4'
          onPress={() => toggleAccordion('faqs')}
        >
          <StyledText className='font-bold text-lg'>FAQs</StyledText>
        </StyledTouchableOpacity>
        {activeAccordion === 'faqs' && (
          <StyledView className='mt-3'>
            {productDetails.frequently_asked_questions.map((faq) => (
              <StyledTouchableOpacity
                key={faq.id}
                onPress={() => toggleFAQ(faq.id)}
              >
                <StyledView className='flex flex-row w-full justify-between items-center'>
                  <StyledText className='text-base'>{faq.question}</StyledText>
                  {expandedFAQs[faq.id] ? (
                    <Ionicons name='chevron-up' size={24} color='black' />
                  ) : (
                    <Ionicons name='chevron-down' size={24} color='black' />
                  )}
                </StyledView>
                {expandedFAQs[faq.id] && (
                  <StyledText className=' mt-2 text-base'>
                    {faq.answer}
                  </StyledText>
                )}
              </StyledTouchableOpacity>
            ))}
          </StyledView>
        )}
      </StyledView>
    </StyledScrollView>
  );
};

export default ProductDetails;
