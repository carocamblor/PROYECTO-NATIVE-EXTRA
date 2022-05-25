import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class NewPost extends Component {

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
                <Text style={styles.title}>New Post</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    placeholder={"What's happening?"}
                    placeholderTextColor='white'
                    onChangeText={ text => this.setState({email: text})}
                />
                <TouchableOpacity style={styles.button} onPress={() => this.props.login(this.state.email, this.state.password)}>
                    <Text style={styles.buttonText}>
                        Post
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
        fontSize: 17,
        height: 150
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

export default NewPost;