import { USER_TYPE } from 'core/utils/enums';
import React from 'react';
import { Text } from 'react-native';

export default function HomeScreenTab() {
  const userType: string = 'vendor';

  const renderPages = () => {
    switch (userType) {
      case USER_TYPE.CUSTOMER:
        return <Text>customercustomercustomercustomer</Text>;

      case USER_TYPE.DELIVERY_PERSON:
        return <Text>Delviery personDelviery personDelviery person</Text>;

      case USER_TYPE.VENDOR:
        return <Text>vendorvendorvendor</Text>;
    }
  };

  return renderPages();
}
