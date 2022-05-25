import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import Login from "../screens/Login/index";
import Register from "../screens/Register/index";
import TabNavigation from "./TabNavigation";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

class StackNavigation extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,

        }
    }

    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: 'transparent'
                        }
                    }} >
                    {this.state.loggedIn ?
                    <Stack.Group>
                        <Stack.Screen name='TabNavigation' component={ TabNavigation } />
                    </Stack.Group> :
                    <Stack.Group>
                        <Stack.Screen name='Login' component={ Login } />
                        <Stack.Screen name='Register' component={ Register } />
                    </Stack.Group>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'transparent'
    }
})

export default StackNavigation;