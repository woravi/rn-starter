import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text> ใส่รหัสผ่านของคุณ </Text>
            <TextInput
                style={styles.input}
                autoCapitalize={"none"}
                autoCorrect={false}
                value={password}
                onChangeText={newValue => setPassword(newValue)}
            />
            { password.length < 4 ? <Text>รหัสผ่านต้องมี 4 ตัวอักษรเป็นอย่างน้อย</Text> : null }
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        margin: 5,
        borderColor: 'black',
        borderWidth: 1
    }
});
export default TextScreen;