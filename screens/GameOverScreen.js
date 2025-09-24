import { Image, StyleSheet, Text, View } from "react-native";


function GameOverScreen() {
    return (
        <View style={styles.screen}>
            <Image source={require('../assets/images/success.png')} style={styles.imageStyles}></Image>
            <Text style={styles.gameOverText} >Game Over!</Text>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    gameOverText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'yellow',
    },
    imageStyles: {
        height: 100,
        width: 100
    }
});