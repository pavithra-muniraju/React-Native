import { View, TextInput, Button, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} maxLength={2} keyboardType="number-pad" />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        backgroundColor: '#72063c',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 70,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 50,
    }
})
