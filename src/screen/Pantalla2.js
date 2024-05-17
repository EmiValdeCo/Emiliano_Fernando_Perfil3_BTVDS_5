import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Comida from '../data/comida';
import CardList from '../components/CardList';

const Pantalla2 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>COMIDA FAVORITA</Text>
            <CardList data={Comida} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default Pantalla2;
