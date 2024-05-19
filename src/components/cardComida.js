import React from 'react';  // Importa la biblioteca principal de React
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';  // Importa componentes y estilos de React Native

// Definición del componente CardComida
const CardComida = ({ item }) => {
    return (
        // Contenedor principal de la tarjeta de comida
        <View style={styles.cardContainer}>
            {/* Imagen de la comida */}
            <Image source={item.src} style={styles.image} />
            {/* Título de la comida */}
            <Text style={styles.title}>{item.title}</Text>
            {/* Descripción de la comida */}
            <Text style={styles.text}>{item.description}</Text>
        </View>
    );
};

// Obtiene el ancho de la ventana del dispositivo
const { width } = Dimensions.get('window');

// Estilos para el componente CardComida
const styles = StyleSheet.create({
    cardContainer: {
        width: width * 0.7,  // Ancho de la tarjeta como el 70% del ancho de la ventana
        backgroundColor: '#fff',  // Color de fondo blanco
        borderRadius: 10,  // Borde redondeado
        borderWidth: 1,  // Ancho del borde
        borderColor: '#ddd',  // Color del borde
        padding: 15,  // Relleno interno
        marginBottom: 15,  // Margen inferior
        alignSelf: 'center',  // Centrado horizontal
        shadowColor: '#000',  // Color de la sombra
        shadowOffset: { width: 0, height: 2 },  // Desplazamiento de la sombra
        shadowOpacity: 0.1,  // Opacidad de la sombra
        shadowRadius: 8,  // Radio de la sombra
        elevation: 4,  // Elevación en Android
        alignItems: 'center',  // Alineación de elementos al centro
    },
    image: {
        width: width * 0.6,  // Ancho de la imagen como el 60% del ancho de la ventana
        height: width * 0.6,  // Altura de la imagen igual al ancho para mantener la proporción
        borderRadius: 10,  // Borde redondeado
        marginBottom: 15,  // Margen inferior
    },
    title: {
        fontSize: 18,  // Tamaño de fuente del título
        fontWeight: 'bold',  // Peso de la fuente
        marginBottom: 8,  // Margen inferior
        textAlign: 'center',  // Alineación centrada
    },
    text: {
        fontSize: 14,  // Tamaño de fuente del texto
        color: '#666',  // Color del texto
        textAlign: 'center',  // Alineación centrada
    },
});

export default CardComida;  // Exporta el componente CardComida para su uso en otras partes de la aplicación
