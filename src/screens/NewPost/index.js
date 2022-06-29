import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { db, auth } from '../../firebase/config';
import MyCamera from '../../components/MyCamera';

class NewPost extends Component {

    constructor(props){
        super(props)
        this.state = {
            text: '',
            showCameraComponent: true,
            urlFoto: ''
        }
    }

    newPost(text){
        db.collection('posts').add({
            text: text,
            owner: auth.currentUser.email,
            likes: [],
            comments: [],
            createdAt: Date.now(),
            photo: this.state.urlFoto
        })
        .then(response => {
            this.setState({text: ''})
        })
        .catch(e => console.log(e))
    }

    onImageUpload(url){
        this.setState({
            urlFoto: url,
            showCameraComponent: false
        })
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.container}>
                <Text style={styles.title}>New Post</Text>
                {this.state.showCameraComponent ?
                    <MyCamera onImageUpload={(url) => this.onImageUpload(url)}/> :
                    <View>
                        <Image
                            style={styles.image}
                            source={{uri: this.state.urlFoto}}
                        />
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
                }
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
    },
    image: {
        height: 100
    }
  });

export default NewPost;