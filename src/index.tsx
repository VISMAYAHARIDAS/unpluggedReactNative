import React from 'react';
import { View, Text } from 'react-native'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigation from './navigation/RootNavigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
