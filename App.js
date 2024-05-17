import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

/* Importación de las pantallas */
import Pantalla1 from './src/screen/Pantalla1';
import Pantalla2 from './src/screen/Pantalla2';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        initialRouteName="Pantalla1"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Pantalla1') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Pantalla2') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2c3e50',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#f5f5f5', // Color gris clarito
            borderTopWidth: 0,
            elevation: 10,
            height: 60, // altura 
            paddingBottom: 10, //  padding 
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5, //  espacio inferior del label
          },
        })}
      >
        <Tab.Screen 
          name="Pantalla1" 
          component={Pantalla1} 
          options={{ tabBarLabel: 'Inicio' }}
        />
        <Tab.Screen 
          name="Pantalla2" 
          component={Pantalla2} 
          options={{ tabBarLabel: 'Ajustes' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

