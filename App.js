import React from 'react';  // Importa la biblioteca principal de React
import { NavigationContainer } from '@react-navigation/native';  // Proporciona el contenedor de navegación
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  // Proporciona la navegación de pestañas en la parte inferior
import { StatusBar } from 'expo-status-bar';  // Proporciona un componente para controlar la barra de estado del dispositivo
import { Ionicons } from '@expo/vector-icons';  // Proporciona iconos vectoriales

/* Importación de las pantallas */
import Pantalla1 from './src/screen/Pantalla1';  // Importa la primera pantalla de la aplicación
import Pantalla2 from './src/screen/Pantalla2';  // Importa la segunda pantalla de la aplicación

/* Creación del Tab Navigator */
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    /* Contenedor principal para la navegación */
    <NavigationContainer>
      {/* Configuración de la barra de estado */}
      <StatusBar style="auto" />
      
      {/* Configuración del navegador de pestañas */}
      <Tab.Navigator
        initialRouteName="Pantalla1"  // Pantalla inicial
        screenOptions={({ route }) => ({
          headerShown: false,  // No mostrar el encabezado
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            /* Configuración de los iconos de las pestañas */
            if (route.name === 'Estudiantes') {
              iconName = focused ? 'school' : 'school-outline';
            } else if (route.name === 'Comida') {
              iconName = focused ? 'fast-food' : 'fast-food-outline';
            }

            /* Retorno del icono con el nombre, tamaño y color especificado */
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2c3e50',  // Color de icono activo
          tabBarInactiveTintColor: 'gray',  // Color de icono inactivo
          tabBarStyle: {
            backgroundColor: '#f5f5f5',  // Color de fondo gris clarito
            borderTopWidth: 0,  // Sin borde superior
            elevation: 10,  // Sombra para el efecto de elevación
            height: 60,  // Altura de la barra de pestañas
            paddingBottom: 10,  // Relleno inferior
          },
          tabBarLabelStyle: {
            fontSize: 12,  // Tamaño de fuente de las etiquetas
            marginBottom: 5,  // Margen inferior de las etiquetas
          },
        })}
      >
        {/* Definición de la pantalla "Estudiantes" en el Tab Navigator */}
        <Tab.Screen 
          name="Estudiantes" 
          component={Pantalla1} 
          options={{ tabBarLabel: 'Estudiantes' }}  // Etiqueta de la pestaña
        />
        
        {/* Definición de la pantalla "Comida" en el Tab Navigator */}
        <Tab.Screen 
          name="Comida" 
          component={Pantalla2} 
          options={{ tabBarLabel: 'Comida' }}  // Etiqueta de la pestaña
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
