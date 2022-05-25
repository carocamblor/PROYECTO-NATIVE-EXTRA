import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Post from '../../components/Post';

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
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
  });

export default Home;