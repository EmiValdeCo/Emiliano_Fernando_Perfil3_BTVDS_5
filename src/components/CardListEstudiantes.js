import React from 'react';  // Importa la biblioteca principal de React
import { View, FlatList, StyleSheet } from 'react-native';  // Importa componentes y estilos de React Native
import CardEstudiante from './cardEstudiante';  // Importa el componente de tarjeta de comida



const CardListEstudiante = ({ data }) => {
    return (
        // Contenedor principal de la lista de tarjetas
        <View style={styles.flatListContainer}>
            {/* Lista plana que muestra las tarjetas de comida */}
            <FlatList
                data={data}  // Datos de las tarjetas de comida
                renderItem={({ item }) => <CardEstudiante item={item} />}  // Componente para renderizar cada elemento de la lista (tarjeta de comida)
                keyExtractor={(item) => item.id}  // Función para obtener las claves únicas de cada elemento de la lista
                showsVerticalScrollIndicator={false}  // Indica si se debe mostrar el indicador de desplazamiento vertical
            />
        </View>
    );
};


// Estilos para el componente CardList
const styles = StyleSheet.create({
    flatListContainer: {
        flex: 1,  // Ocupa todo el espacio disponible en el contenedor principal
        width: '100%',  // Ancho del contenedor principal al 100%
    },
});

export default CardListEstudiante;