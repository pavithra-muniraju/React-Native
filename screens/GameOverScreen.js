import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import colors from "../utilities/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


function GameOverScreen({roundNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.screen}>
                <Title >Game Over!</Title>
                <Image source={require('../assets/images/success.png')} style={styles.imageStyles}></Image>

            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.summaryText}>Your phone needed
                    <Text style={styles.highledtedText}> {roundNumber}</Text> Rounds to guess  number
                    <Text style={styles.highledtedText}> {userNumber} </Text>
                </Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>

    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 24
    },
    gameOverText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'yellow',
    },
    imageStyles: {
        height: 400,
        width: 400,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: colors.primary,
        overflow: 'hidden'
    },
    summaryText: {
        fontFamily: 'open-sans',
        color: 'white',
        textAlign: 'center',
        marginVertical: 24,
        fontSize: 24
    },
    highledtedText: {
        fontFamily: 'open-sans-bold',
        color: colors.primary
    }
});