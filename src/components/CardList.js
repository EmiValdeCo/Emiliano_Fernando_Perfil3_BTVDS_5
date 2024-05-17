import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CardComida from './cardComida';


const CardList = ({ data }) => {
    return (
        <View style={styles.flatListContainer}>
            <FlatList
                data={data}
                horizontal={true}
                renderItem={({ item }) => <CardComida item={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    flatListContainer: {
        height: 160,
        marginHorizontal: 5,
    },
});

export default CardList;
