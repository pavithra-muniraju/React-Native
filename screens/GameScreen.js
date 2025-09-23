import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';

function GenerateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return GenerateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen({userNumber}) {

    const initialGuess = GenerateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState();
    


    return <View style={styles.screen}>
        <Title >Oponents Guess</Title>
        <NumberContainer>{initialGuess} </NumberContainer>
        <View>
            <Text>Higher / Lower</Text>
            {/* +
            - */}
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

});