import { View, Text, StyleSheet } from "react-native";

function GoalItem({itemData}) {
    return (
        <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
    padding: 8,
    borderRadius: 6,
    margin: 8,
    backgroundColor: '#5e0acc',
    color: 'white',
  },

  goalText: {
    color: 'white'
  }
})