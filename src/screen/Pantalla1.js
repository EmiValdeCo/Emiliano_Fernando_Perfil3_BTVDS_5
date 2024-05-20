import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Estudiantes from '../data/estudiantes';  // Importa datos de comida desde un archivo
import CardListEstudiante from '../components/CardListEstudiantes';  // Importa el componente CardList

const Pantalla1 = () => {
    return (
        <View style={styles.container}>
            {/* Contenedor secundario */}
            <View style={styles.container2}>
                {/* Título de la pantalla */}
                <Text style={styles.title}>Estudiantes ingresados</Text>
                {/* Lista de tarjetas de comida */}
                <CardListEstudiante data={Estudiantes} />
            </View>
        </View>
    );
};

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


export default Pantalla1;
