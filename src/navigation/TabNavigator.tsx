import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/Home';
import ProfileScreen from '../screens/Profile/Profile';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: '', 
        tabBarIcon: () => null, 
        tabBarStyle: {
          display: 'flex', 
        },
        headerShown:false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => <Text style={{ color }}>🏠</Text> }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color }) => <Text style={{ color }}>👤</Text> }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
