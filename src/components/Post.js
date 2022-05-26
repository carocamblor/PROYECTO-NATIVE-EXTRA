import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { db, auth } from '../firebase/config';
import firebase from 'firebase';

class Post extends Component {

    constructor(props){
        super(props)
        this.state = {
            likes: 0,
            liked: false
        }
    }

    componentDidMount(){
        console.log(this.props.info)
        const post = this.props.info
        const currentUser = auth.currentUser 
        if(post.data.likes){
            let amountOfLikes = post.data.likes.length
            this.setState({
                likes: amountOfLikes
            })
        }
        if(post.data.likes.includes(currentUser.email)){
            this.setState({
                liked: true
            })
        }
    }

    like(){
        const post = this.props.info
        db.collection('posts').doc(post.id).update({
            likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
        .then(response =>{
            this.setState({
                liked: true,
                likes: this.state.likes + 1
            })
        })
        .catch(e => console.log(e))
    }
    
    unlike(){
        const post = this.props.info
        db.collection('posts').doc(post.id).update({
            likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
        })
        .then(response =>{
            this.setState({
                liked: false,
                likes: this.state.likes - 1
            })
        })
        .catch(e => console.log(e))
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.smallContainer}>
                    <FontAwesome name="user-circle" size={24} color="white" />
                    <Text style={styles.username}>@username</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>{this.props.info.data.text}</Text>
                </View> 
                <View style={styles.smallContainer}>
                    {this.state.liked ?
                    <TouchableOpacity onPress={() => this.unlike()}>
                        <Ionicons name="heart-sharp" size={24} color="#ef476f" />
                    </TouchableOpacity> :
                    <TouchableOpacity onPress={() => this.like()}>
                        <Ionicons name="heart-outline" size={24} color="#ef476f" />
                    </TouchableOpacity>}
                    <Text style={styles.text}>{this.state.likes}</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#404040',
        display: 'flex',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    text: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        fontSize: 17
    },
    username: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        fontSize: 17,
        fontWeight: 500
    },
    smallContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        paddingBottom: 5
    },
    content: {
        paddingBottom: 10,
        paddingTop: 5
    }

})

export default Post;