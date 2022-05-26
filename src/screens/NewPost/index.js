import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { db, auth } from '../../firebase/config';

class NewPost extends Component {

    constructor(props){
        super(props)
        this.state = {
            text: '',
        }
    }

    newPost(text){
        db.collection('posts').add({
            text: text,
            owner: auth.currentUser.email,
            likes: [],
            comments: [],
            createdAt: Date.now()
        })
        .then(response => {
            this.setState({text: ''})
        })
        .catch(e => console.log(e))
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.container}>
                <Text style={styles.title}>New Post</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    placeholder={"What's happening?"}
                    placeholderTextColor='white'
                    onChangeText={ text => this.setState({text: text})}
                    value={this.state.text}
                />
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.newPost(this.state.text)
                    this.props.navigation.navigate('Home')
                    }}>
                    <Text style={styles.buttonText}>
                        Post
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
        height: '100%',
        backgroundColor: '#202020'
    },
    container: {
        height: '60%',
        justifyContent: 'space-evenly',
        backgroundColor: '#202020'
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