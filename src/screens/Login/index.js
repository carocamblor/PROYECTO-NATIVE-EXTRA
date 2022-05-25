import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='email-address'
                    placeholder='Email'
                    placeholderTextColor='white'
                    onChangeText={ text => this.setState({email: text})}
                />
                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    placeholder='Password'
                    placeholderTextColor='white'
                    secureTextEntry={true}
                    onChangeText={ text => this.setState({password: text})}
                />
                <TouchableOpacity style={styles.button} onPress={() => this.props.login(this.state.email, this.state.password)}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        height: '60%',
        justifyContent: 'space-evenly'
    },
    title: {
        color: 'white',
        fontWeight: 500,
        fontSize: 32
    },
    input: {
        borderWidth: 1,
        padding: 15,
        borderColor: 'white',
        borderStyle: 'solid',
        borderRadius: 6,
        marginVertical: 10,
        color: 'white',
        fontSize: 17
    },
    button: {
        backgroundColor: '#06d6a0',
        padding: 13,
        textAlign: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#06d6a0',
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 17
    }
  });

export default Login;