import { StyleSheet, Text } from "react-native";

function Card({children}) {
    return <Text style={style.card}>{children}</Text>
}

export default Card;

const style = StyleSheet.create({
    card: {
        
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
          
    }
})