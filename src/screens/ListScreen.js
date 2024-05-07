import {Text, FlatList, View, StyleSheet} from 'react-native'
import React from 'react'

const ListScreen = () => {
    const friends = [
        {name: 'friend#1', age: 23},
        {name: 'friend#2', age: 24},

    ];
    return (<
            FlatList
            keyExtractor={friends => friends.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - age{item.age}</Text>
            }}
        />
    );
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical: 20,
        marginHorizontal: 20
    }
});

export default ListScreen