import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ComponentScreen = () => {
    const name = <Text>"woravit"</Text>;
    const lname = <Text>"Tosomrit"</Text>;
    return (<View >
        <Text style={styles.textStyle}>Getting stated with react native!</Text>
        <Text style={styles.subHeader}>ฉันชื่อ {name} นามสกุล {lname}</Text>
        
    </View>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeader: {
        fontSize:30
    }
});
export default ComponentScreen;