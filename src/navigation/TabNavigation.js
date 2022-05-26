import React, {Component} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import NewPost from "../screens/NewPost";
import Profile from "../screens/Profile";
import { Ionicons } from '@expo/vector-icons'; 
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

class TabNavigation extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return( 
                <Tab.Navigator
                    sceneContainerStyle={{
                        backgroundColor: 'transparent'
                    }}
                    screenOptions={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: 'transparent',
                            borderTopColor: '#404040'
                        }
                    }} >
                    <Tab.Screen
                        name='Home'
                        component={ Home }
                        options={
                            { tabBarIcon: () => <Ionicons name="home" size={24} color="white" /> }
                        }
                    />
                    <Tab.Screen
                        name='NewPost'
                        component={ NewPost }
                        options={
                            { tabBarIcon: () => <Ionicons name="add-circle" size={24} color="white" /> }
                        }
                    />
                    <Tab.Screen
                        name='Profile'
                        component={ Profile }
                        options={
                            { tabBarIcon: () => <Ionicons name="person" size={24} color="white" /> }
                        }
                        initialParams={ {logout: () => this.props.route.params.logout()} }
                    />
                </Tab.Navigator>
        )
    }

}

export default TabNavigation;
