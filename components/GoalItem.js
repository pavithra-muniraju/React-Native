import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({ itemData, onDeleteGoalHandler }) {


    return (
        <View style={styles.goalItem}>
            <Pressable onPress={onDeleteGoalHandler.bind(this, itemData.item.id)} 
            android_ripple={{ color: '#eb1a5cff' }}
            style={({pressed}) => pressed && styles.pressedItem}
            >

                <Text style={styles.goalText}>{itemData.item.text}</Text>
            </Pressable>
        </View>


    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        
        borderRadius: 6,
        margin: 8,
        backgroundColor: '#5e0acc',
        color: 'white',
    },

    goalText: {
        color: 'white',
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5
    }
})