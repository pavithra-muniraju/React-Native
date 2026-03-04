import { StyleSheet, Text, View } from "react-native";


function Subtitle({children}) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subTitle: {
        color: '#f9bf9aff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',

        borderBottomColor: '#e7a278ff',
        borderBottomWidth: 2
    },
    subTitleContainer: {
        padding: 10,
        marginHorizontal: 12,
        marginVertical: 4,
    }
})