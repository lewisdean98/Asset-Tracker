import { FlatList, View, Text } from "react-native";
import React from "react";

import styles from "../style/styles";

const data = [
    {
        id : '5545',
        checked_in : '10-05-1998',
    },
    {
        id : '5535',
        checked_in : '10-06-1998',
    },
    {
        id : '5543',
        checked_in : '10-07-1998',
    },
];

const ListItem = ({ checked_in }) => (
    <View>
        <Text style={styles.textbox}>{checked_in}</Text>
    </View>
);

const AssetHistory = () => {  
    const renderItem = ({item}) => (
        <ListItem checked_in={item.checked_in}/>
    );

    return (
        <View>
            <FlatList 
                data = {data}
                renderItem = {renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default AssetHistory;