import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const MainPage  = () => {
    const [text, onChangeText] = React.useState("");
    
    const scanAssetTag = () => {
        //Call API
        const uri = "http://127.0.0.1:8000/assets/scan/" + text;
        
        const response = fetch(uri);


        

        //Clear textbox
        onChangeText("");
    };
    
    return (
        <View style={styles.mainPage}>
          <Text style={styles.textbox}>Please scan the asset tag of the device</Text>
          
          <TextInput 
              style={styles.input}
              onChangeText = {onChangeText}
              value = {text}
              autoFocus  = {true}
              onSubmitEditing = {scanAssetTag} 
          />
        </View>
    );
}

const styles = StyleSheet.create({
    mainPage : {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textbox : {
        color: 'coral',
        font : 'sans-serif'
    },

    input : {
        color : 'coral',
        borderRadius : 5,
        height: 100,
        width: 700,
        fontSize:70,
        textAlign : 'center',
    },
});

export default MainPage;