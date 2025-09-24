import { Alert, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function GenerateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return GenerateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = GenerateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            console.log("Game Over");
            console.log(currentGuess, userNumber)
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if (
            direction === 'lower' && currentGuess < userNumber ||
            direction === 'upper' && currentGuess > userNumber) {
            console.log(currentGuess, userNumber);
            Alert.alert("Don't lie!", 'You know that this is wrong...',
                [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        //direection = lower or greater
        if (direction === 'lower') {
            console.log(currentGuess)
            maxBoundary = currentGuess;
            GenerateRandomBetween(minBoundary, maxBoundary, currentGuess);
        } else {
            minBoundary = currentGuess + 1;
            GenerateRandomBetween(minBoundary, maxBoundary, currentGuess);
        }

        const newRndNumber = GenerateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return <View style={styles.screen}>
        <Title >Oponents Guess</Title>
        <NumberContainer>{initialGuess} </NumberContainer>
        <View>
            <Text>Higher / Lower</Text>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'upper')}>+</PrimaryButton>
                </View>
            </View>
        </View>
        <View>
            <Text>Log Rounds</Text>
        </View>
    </View>
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
      buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});