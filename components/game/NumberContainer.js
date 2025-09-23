import { StyleSheet, Text, View } from "react-native";
import colors from "../../utilities/colors";

function NumberContainer({children}) {
    console.log(children)
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: colors.secondary, 
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },

    numberText: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',

    }
});