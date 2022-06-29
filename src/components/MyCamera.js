import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { storage } from '../firebase/config';

class MyCamera extends Component {

    constructor(props){
        super(props)
        this.state = {
            permission: false,
            urlFoto: '',
            showCamera: true
        }
        this.cameraMethods = undefined
    }

    componentDidMount(){
        Camera.requestCameraPermissionsAsync()
            .then(() => this.setState({permission: true}))
            .catch((e) => console.log(e))
    }

    takePhoto(){
        this.cameraMethods.takePictureAsync()
            .then(data => {
                this.setState({
                    urlFoto: data.uri,
                    showCamera: false
                })
            })
            .catch((e) => console.log(e))
    }

    acceptPhoto(){
        fetch(this.state.urlFoto)
            .then(data => data.blob())
            .then(photo => {
                const references = storage.ref(`photos/${Date.now()}.jpg`)
                references.put(photo)
                    .then(() => {
                        references.getDownloadURL()
                            .then(url => {
                                this.props.onImageUpload(url)
                            })
                    })
                    .catch((e) => console.log(e))

            })
            .catch((e) => console.log(e))
    }

    discardPhoto(){
        this.setState({
            urlFoto: '',
            showCamera: true
        })
    }

    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                {this.state.showCamera ?
                    <View style={styles.cameraContainer}>
                    {this.state.permission ?
                        <View style={styles.container}>
                            <Camera
                                type={Camera.Constants.Type.back}
                                ref={methods => this.cameraMethods = methods}
                            />
                            <TouchableOpacity onPress={() => this.takePhoto()}>
                                <Text style={styles.text}>Sacar foto</Text>
                            </TouchableOpacity>
                        </View> :
                        <Text style={styles.text}>La app no tiene acceso a tu cámara.</Text>
                    } 
                    </View> :
                    <View style={styles.cameraContainer}>
                        <Image
                            style={styles.image}
                            source={{uri: this.state.urlFoto}}
                        />
                        <TouchableOpacity onPress={() => this.acceptPhoto()}>
                            <Text style={styles.text}>Aceptar foto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.discardPhoto()}>
                            <Text style={styles.text}>Descartar foto</Text>
                        </TouchableOpacity>
                    </View>
                    
                }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cameraContainer: {
        flex: 1
    },
    text: {
        color: 'white'
    },
    image: {
        flex: 1
    }
  });

export default MyCamera;