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
    },

    textbox : {
        color: colours.text_secondary,
        font : 'sans-serif',
        fontSize: 30
    },

    input : {
        color : colours.text_primary,
        borderRadius : 5,
        height: 100,
        width: 700,
        fontSize:70,
        textAlign : 'center',
    },
});

export default styles;