import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import GlobalNavigation from './src/navigation/GlobalNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <GlobalNavigation />
    </NavigationContainer>
  );
}