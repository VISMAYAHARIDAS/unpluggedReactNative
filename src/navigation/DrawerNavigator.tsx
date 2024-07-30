
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/Home';
import ProfileScreen from '../screens/Profile/Profile';
import { enableScreens } from 'react-native-screens';

enableScreens(); // This should be called before using screens

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true, // Show header with drawer toggle
        drawerStyle: {
          backgroundColor: '#c6cbef',
        },
        // drawerContentOptions: {
        //   activeTintColor: '#e91e63', 
        // },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={ProfileScreen} /> {/* Example additional screen */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
