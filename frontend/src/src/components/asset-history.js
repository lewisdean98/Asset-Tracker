import { FlatList, View, Text } from "react-native";
import React from "react";
import styles from "../style/styles";

const ListItem = ({ time_stamp }) => (
    <View>
        <Text style={styles.historyText}>{time_stamp}</Text>
    </View>
);

const AssetHistory = (props) => {  
    if (typeof(props.history) == "object") {
        var data = props.history;
    }
    else {
        var data = JSON.parse(props.history);
    }
    
    const renderItem = ({item}) => (
        <ListItem time_stamp={item.time_stamp}/>
    );

    return (
        <View>
           <Text style = {styles.textbox}>History</Text>
           
           <FlatList 
                data = {data}
                renderItem = {renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default AssetHistory;