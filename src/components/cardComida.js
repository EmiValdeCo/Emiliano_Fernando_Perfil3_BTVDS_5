import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CardComida = ({ item }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={item.src} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <View>
                <Text style={styles.text}>{item.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 10,
    },
});

export default CardComida;
