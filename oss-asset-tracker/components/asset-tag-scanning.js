import React, {useState} from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from '../style/styles';

const AssetTagScanning  = () => {
    const [text, setText] = React.useState("");
    const [responseText, setResponseText] = React.useState("  ");
    
    const scanAssetTag = () => {
       
        const asset_tag = text.toUpperCase();
        
        //Check that asset tag is valid
        const re = /^((((B)\d{5}){1})|(((BK)\d{6}){1}))$/;
        
        if (re.test(asset_tag)) 
            try {
                //Call API
                const uri = "http://localhost:8000/assets/scan/" + asset_tag;
                
                //Call API and set bottom text to HTTP response
                fetch(uri).then(response=>response.text()).then(data => {setResponseText(data);});
            } catch (error) {
                alert(error)
            }
        
        else {
            setResponseText("Asset tag invalid, please try again")
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

export default AssetTagScanning;