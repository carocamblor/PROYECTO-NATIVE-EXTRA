import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Post from '../../components/Post';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../../firebase/config';

class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <View style={styles.profile}>
                    <FontAwesome name="user-circle" size={80} color="white" />
                    <View  style={styles.info}>
                        <Text style={styles.text}>@username</Text>
                        <Text style={styles.text}>Acá va la bio del usuario</Text>
                        <Text style={styles.text}>Joined: 25/05/2022</Text>
                    </View>
                    <View style={styles.logoutContainer}>
                        <TouchableOpacity onPress={() => this.props.route.params.logout()}>
                            <Ionicons name="log-out" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <Post/> */}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#202020',
        height: '100%'
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
    },
    logoutContainer: {
        marginLeft: 'auto'
    }
  });

export default Profile;