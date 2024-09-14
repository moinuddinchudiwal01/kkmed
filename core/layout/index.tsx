import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getIconName } from 'core/helper/helper';
import React from 'react';
import HomeScreen from '../../app/tabs/home';
import OrderScreen from '../../app/tabs/order';
import ProfileScreen from '../../app/tabs/profile';
import UploadPrescriptionScreen from '../../app/tabs/upload';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        const iconName = getIconName(route.name, focused);
        return <Ionicons name={iconName as any} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#00ACC1',
      tabBarInactiveTintColor: '#8e8e93',
      tabBarLabelStyle: {
        fontSize: 12,
      },
      tabBarStyle: {
        backgroundColor: '#ffffff',
        borderRadius: 30,
        height: 70,
        position: 'absolute',
        bottom: 10,
        marginHorizontal: 20,
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        elevation: 10,
      },
    })}
  >
    <Tab.Screen name='Home' component={HomeScreen} />
    <Tab.Screen name='Upload' component={UploadPrescriptionScreen} />
    <Tab.Screen name='Order' component={OrderScreen} />
    <Tab.Screen name='Profile' component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
