import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
        //login sucessfull
        navigation.navigate('Main')
    }
};

return (
<View style={styles.container}>

<TextInput
    style={styles.input}
    placeholder='Username'
    value={username}
    onChangeText={(text) => setUsername(text)}
    color='#eaf5ef'
    placeholderTextColor='#a7c7b8'
/>

        <TextInput
            style={styles.input}
            placeholder='Password'
            value={password}
            onChangeText={(text) => setPassword(text)}
                color='#eaf5ef'
    placeholderTextColor='#a7c7b8'
        >
    </TextInput>
        <TouchableOpacity
        style={styles.button}
           onPress={handleLogin}
        >
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
</View>
)
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#0f1a14',
    padding: 10,
    justifyContent: 'center',
},
button: {
    backgroundColor: '#1f5c3f',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
    alignSelf: 'center',
    paddingHorizontal: 30,
},
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    input: {
    alignSelf: 'center',
    width: '80%',
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#a7c7b8',
},
});


export default LoginScreen;