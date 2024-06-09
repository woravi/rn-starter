import {StyleSheet, Text, View, TextInput, Button, Input } from "react-native";
import React, {useState} from 'react';
import {collection, doc, setDoc, addDoc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from "./components/config";

export default function App() {
    //การเปลี่ยนแปลงตัวอักษร โดยใช้ useState
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [name, setName] = useState("")
    async function create() {
        await addDoc(collection(db, "react-crud"), {
            email: email,
            mobile: mobile,
            name: name,
        })
    }

    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 30}}>
                ทดสอบ
                <Text style={{color: 'red'}}> CRUD</Text>
            </Text>
            <TextInput
                value={email}
                onChangeText={(email) => setEmail(email)}
                placeholder="email"
                style={styles.textBoxes}
            />
            <TextInput
                value={mobile}
                onChangeText={(mobile) => setMobile(mobile)}
                placeholder="mobile"
                style={styles.textBoxes}
            />
            <TextInput
                value={name}
                onChangeText={(name) => setName(name)}
                placeholder="name"
                style={styles.textBoxes}
            />
            <Button onPress={create} title={"Summit"}/>
        </View>
    )
        ;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    textBoxes: {
        width: '90%',
        fontSize: 25,
        padding: 15,
        backgroundColor: "#fff",
        borderWidth: 0.2,
        borderRadius: 10,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
