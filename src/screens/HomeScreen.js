import React from "react";
import {Text, StyleSheet, View, Button} from "react-native";

const HomeScreen = (Props) => {
    return (
        <View>
            <Text style={styles.text}>HomeScreen</Text>
            <Button
                onPress={() => Props.navigation.navigate('Component')}
                title={'ไปที่หน้า component'}/>
            <Button
                onPress={() => Props.navigation.navigate('List')}
                title={'ไปที่หน้า list'}/>
            <Button
                onPress={() => Props.navigation.navigate('Image')}
                title={'ไปที่หน้า Image'}/>
            <Button
                onPress={() => Props.navigation.navigate('Counter')}
                title={'ไปที่หน้า CounterScreen'}/>

            <Button
                onPress={() => Props.navigation.navigate('Color')}
                title={'ไปที่หน้า ColorScreen'}/>
            <Button
                onPress={() => Props.navigation.navigate('Square')}
                title={'ไปที่หน้า SquareScreen'}/>
            <Button
                onPress={() => Props.navigation.navigate('Text')}
                title={'ไปที่หน้า TextScreen'}/>
            <Button
                title={'ไปที่หน้า BoxScreen'}
                onPress={() => Props.navigation.navigate('Box')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
    },
});

export default HomeScreen;
