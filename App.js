import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

/* Importación de las pantallas */
import Pantalla1 from './src/screen/Pantalla1';
import Pantalla2 from './src/screen/Pantalla2';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        initialRouteName="Pantalla1"  // Especifica la pantalla inicial aquí
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen 
          name="Pantalla1" 
          component={Pantalla1} 
          options={{ tabBarLabel: 'Pantalla 1' }}
        />
        <Tab.Screen 
          name="Pantalla2" 
          component={Pantalla2} 
          options={{ tabBarLabel: 'Pantalla 2' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
