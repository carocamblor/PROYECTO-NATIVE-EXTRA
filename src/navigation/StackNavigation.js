import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import Login from "../screens/Login/index";
import Register from "../screens/Register/index";
import TabNavigation from "./TabNavigation";
import { StyleSheet } from "react-native";
import { auth, db } from "../firebase/config";

const Stack = createNativeStackNavigator();

class StackNavigation extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            loginError: '',
            registerError: ''
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged( user => {
            if(user){
                this.setState({loggedIn: true})
            }
         })
    }

    register(email, username, pass){
        console.log(email + ' ' + username + ' ' + pass)
        auth.createUserWithEmailAndPassword(email, pass)
            .then((response) => {
                this.setState({loggedIn: true})
                db.collection('users').add({
                    username: username,
                    owner: email,
                    createdAt: Date.now()
                })
                .then(response => console.log('se creó el usuario'))
                .catch(e => console.log('hubo un error' + e))
            })
            .catch(e => {
                let message = e.message
                this.setState({registerError: message})
            })
    }

    login(email, pass){
        auth.signInWithEmailAndPassword(email, pass)
            .then(response => {
                this.setState({loggedIn: true})
            })
            .catch(e => {
                let message = e.message
                this.setState({loginError: message})
            })
    }

    logout(){
        auth.signOut()
            .then(response => this.setState({loggedIn: false}))
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
                        <Stack.Screen
                            name='TabNavigation'
                            component={ TabNavigation }
                            initialParams={ {logout: () => this.logout()} }
                            />
                    </Stack.Group> :
                    <Stack.Group>
                        <Stack.Screen
                        name='Login'
                        children={(props) => <Login login={(email, pass) => this.login(email, pass)} loginError={this.state.loginError} {...props} />}
                        />
                        <Stack.Screen
                            name='Register'
                            children={(props) => <Register register={(email, username, pass) => this.register(email, username, pass)} registerError={this.state.registerError} {...props} />}
                        />
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