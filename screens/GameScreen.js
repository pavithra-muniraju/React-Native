import { Alert, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import { Ionicons } from '@expo/vector-icons'
import Card from '../components/ui/Card';
import Instructions from '../components/ui/Instructions';

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
        <View style={styles.inputContainer}>
            <Instructions>Higher / Lower</Instructions>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name='remove' size={24} color='white' />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'upper')}>
                        <Ionicons name='add' size={24} color='white' />
                    </PrimaryButton>
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
   inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3b021f',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});