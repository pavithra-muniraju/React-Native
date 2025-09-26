import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';

function CategoryGridTile({ title, color }) {
    return (
        <View style={[styles.gridItem]}>
            <Pressable android_ripple={{ color: 'gray' }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : '']}>
                <View style={[styles.innerContainer, {backgroundColor:color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 20,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.25
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
})

