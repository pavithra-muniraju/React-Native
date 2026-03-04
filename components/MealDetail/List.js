import { StyleSheet, Text, View } from "react-native";

function List({data}) {
    return data.map((datapoint) => (
        <View key={datapoint} style={styles.listItem}>
            <Text style={styles.itemText}>{datapoint}</Text>
        </View>
    ))
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#f9bf9aff'
    },
    itemText: {
        color: '#702d03ff',
        textAlign: 'center'
    }
})