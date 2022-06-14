import { StyleSheet } from "react-native";
import colours from "./colours";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colours.background,
      alignItems: 'center',
      justifyContent: 'center',
    },

    mainPage : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        justifyContent : "space-evenly",
        backgroundColor : colours.background
    },

    textbox : {
        color: colours.text_secondary,
        font : 'sans-serif',
        fontSize: 35,
        textAlign : "center"
    },

    input : {
        color : colours.text_primary,
        borderRadius : 5,
        height: 100,
        width: 700,
        fontSize:70,
        textAlign : 'center',
        outlineStyle: 'none'
    },

    historyContainer : {
        borderWidth: 1,
        alignItems: "center",
        borderRadius: 15,
        padding: 10,
        flex: 1,
        alignItems : "center",
        marginRight: 15
    },

    inputContainer : {
        flex: 4,
        alignItems : "center"
    },

    historyText : {
        fontSize : 18,
        color: colours.text_primary,
        font : 'sans-serif',
        textAlign : "center"
    }
});

export default styles;