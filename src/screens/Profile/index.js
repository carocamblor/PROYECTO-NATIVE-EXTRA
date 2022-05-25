import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Post from '../../components/Post';
import { FontAwesome } from '@expo/vector-icons';

class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profile}>
                    <FontAwesome name="user-circle" size={80} color="white" />
                    <View  style={styles.info}>
                        <Text style={styles.text}>@username</Text>
                        <Text style={styles.text}>Acá va la bio del usuario</Text>
                        <Text style={styles.text}>Joined: 25/05/2022</Text>
                    </View>
                </View>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
    },
    profile: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#404040',
        display: 'flex',
        flexDirection: 'row'
    },
    info: {
        marginLeft: 20,
        display: 'flex',
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 17,
        color: 'white'
    }
  });

export default Profile;