import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class Register extends Component {

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
                <Text style={styles.title}>Register</Text>
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
                    placeholder='Username'
                    placeholderTextColor='white'
                    onChangeText={ text => this.setState({username: text})}
                />
                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    placeholder='Password'
                    placeholderTextColor='white'
                    secureTextEntry={false}
                    onChangeText={ text => this.setState({password: text}, () => console.log(this.state.password))}
                />
                <TouchableOpacity style={styles.button} onPress={() => this.props.register(this.state.email, this.state.username, this.state.password)}>
                    <Text style={styles.buttonText}>
                        Register
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkContainer} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.text}>
                        ¿Already have an account?
                    </Text>
                    <Text style={styles.link}>
                        Sign in here.
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
    },
    text: {
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        fontSize: 15
    },
    link: {
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    linkContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center'
    }
  });

export default Register;