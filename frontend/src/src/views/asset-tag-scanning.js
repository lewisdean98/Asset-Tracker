import React, {useState} from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from '../style/styles';
import { useRef } from 'react';

import AssetHistory from '../components/asset-history';
import getAssetHistory from '../utils/get-asset-history';



const AssetTagScanning  = () => {
    const [text, setText] = React.useState("");
    const [responseText, setResponseText] = React.useState("  ");
    const [history, setHistory] = React.useState({})

    const scanAssetTag = () => {
        const asset_tag = text.toUpperCase();
        
        //Check that asset tag is valid
        const re = /^((((B)\d{5}){1})|(((BK)\d{6}){1}))$/;
        
        if (re.test(asset_tag)) 
            try {
                //Call API
                var uri = "http://localhost:8000/assets/scan/" + asset_tag;
                
                //Call API and set bottom text to HTTP response
                fetch(uri).then(response=>response.text()).then(data => {setResponseText(data);});

                //Get asset history
                var uri = "http://localhost:8000/assets/gethistory/" + asset_tag;
                fetch(uri).then(response=>response.text()).then(data => {setHistory(JSON.parse(data));});
            } catch (error) {
                alert(error)
            }
        
        else {
            setResponseText("Asset tag invalid, please try again")
        }
        //Clear textbox
        setText("");

        //Refocus textbox
        inputRef.focus();
    };

    const inputRef = useRef();

    return (
        <View style={styles.mainPage}>
          <View style = {styles.inputContainer}>
          
            <Text style={styles.textbox}>Please scan the asset tag of the device</Text>
            
            <TextInput 
                style={styles.input}
                onChangeText = {setText}
                value = {text}
                autoFocus  = {true}
                onSubmitEditing = {scanAssetTag} 
                ref = {inputRef}
            />

                <Text style={styles.textbox}>{responseText}</Text>
            </View>
            <View style= {styles.historyContainer}>

                <AssetHistory history = {history} />
            </View>
        </View>
    );
}

export default AssetTagScanning;