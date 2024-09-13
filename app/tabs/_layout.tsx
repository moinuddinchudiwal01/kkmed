import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import HomeScreen from './home';
import OrderScreen from './order';
import UploadPrescriptionScreen from './upload';
import ProfileScreen from './profile';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Upload') {
            iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'cube' : 'cube-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Upload" component={UploadPrescriptionScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
