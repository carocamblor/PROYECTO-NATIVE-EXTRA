import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import Post from '../../components/Post';
import { db } from '../../firebase/config';

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts: [],
            loading: true
        }
    }

    componentDidMount(){
        db.collection('posts').onSnapshot(
            docs => {
                let posts = [];
                docs.forEach( doc => {
                    posts.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })
                this.setState({
                    posts: posts,
                    loading: false
                })
            }
        )

    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.loading ?
                <ActivityIndicator size='large' color='blue' /> :
                <FlatList
                    data={this.state.posts}
                    keyExtractor={ item => item.id.toString() }
                    renderItem={ ({item}) => <Post data={item.data} />}
                />}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
    },
  });

export default Home;