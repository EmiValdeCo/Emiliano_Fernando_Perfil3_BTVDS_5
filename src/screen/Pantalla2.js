import React from 'react';  // Importa la biblioteca principal de React
import { View, Text, StyleSheet } from 'react-native';  // Importa componentes y estilos de React Native
import Comida from '../data/comida';  // Importa datos de comida desde un archivo
import CardList from '../components/CardList';  // Importa el componente CardList

// Definición de la pantalla Pantalla2
const Pantalla2 = () => {
    return (
        // Contenedor principal de la pantalla
        <View style={styles.container}>
            {/* Contenedor secundario */}
            <View style={styles.container2}>
                {/* Título de la pantalla */}
                <Text style={styles.title}>COMIDA FAVORITA</Text>
                {/* Lista de tarjetas de comida */}
                <CardList data={Comida} />
            </View>
        </View>
    );
};

// Estilos para la pantalla Pantalla2
const styles = StyleSheet.create({
    container: {
        flex: 1,  // Ocupa todo el espacio disponible en la pantalla
        backgroundColor: '#F3F2E9',  // Color de fondo
        alignItems: 'center',  // Alineación de elementos al centro horizontalmente
        justifyContent: 'center',  // Alineación de elementos al centro verticalmente
        paddingTop: 20,  // Relleno superior
    },
    container2: {
        alignItems: 'center',  // Alineación de elementos al centro horizontalmente
        justifyContent: 'center',  // Alineación de elementos al centro verticalmente
        marginTop: 20,  // Margen superior
    },
    title: {
        fontSize: 24,  // Tamaño de fuente del título
        fontWeight: 'bold',  // Peso de la fuente
        marginBottom: 20,  // Margen inferior
    },
});

export default Pantalla2;  // Exporta el componente Pantalla2 para su uso en otras partes de la aplicación
