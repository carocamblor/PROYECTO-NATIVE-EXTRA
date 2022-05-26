import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

class Post extends Component {

    constructor(props){
        super(props)
        this.state = {
            likes: 12,
            liked: true
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.smallContainer}>
                    <FontAwesome name="user-circle" size={24} color="white" />
                    <Text style={styles.username}>@username</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>{this.props.data.text}</Text>
                </View>
                <View style={styles.smallContainer}>
                    {this.state.liked ?
                    <Ionicons name="heart-sharp" size={24} color="#ef476f" /> :
                    <Ionicons name="heart-outline" size={24} color="#ef476f" /> }
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