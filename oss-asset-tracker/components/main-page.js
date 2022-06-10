import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const MainPage  = () => {
    const [text, setText] = React.useState("");
    const [responseText, setResponseText] = React.useState("  ");
    
    const scanAssetTag = () => {
        //Call API
        try {
            const uri = "http://localhost:8000/assets/scan/" + text;
            
            //Call API and set bottom text to HTTP response
            var response = fetch(uri).then(response=>response.text()).then(data => {setResponseText(data); });
        } catch (error) {
            alert(error)
        }
        
        //Clear textbox
        setText("");
    };
    
    return (
        <View style={styles.mainPage}>
          <Text style={styles.textbox}>Please scan the asset tag of the device</Text>
          
          <TextInput 
              style={styles.input}
              onChangeText = {setText}
              value = {text}
              autoFocus  = {true}
              onSubmitEditing = {scanAssetTag} 
          />

            <Text style={styles.textbox}>{responseText}</Text>
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