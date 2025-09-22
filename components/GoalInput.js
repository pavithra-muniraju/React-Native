import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput(props) {

    const [goalText, setGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(goalText);
        setGoalText('');
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your Course Goal'
                onChangeText={goalInputHandler} value={goalText} />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flex: 1
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        marginRight: 8,
        padding: 8
    },

});