import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Pantalla2 = () => {
    return (
        <View style={styles.container}>
            <Text>HOLA Pantalla 2</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Pantalla2;
