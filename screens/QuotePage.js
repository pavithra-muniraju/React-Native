import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function QuotePage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phNo, setPhNo] = useState('');
    const [msg, setMsg] = useState('');

    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false)
    const postMessage = () => {
       console.log('post');
       if(!name || !email || !phNo || !msg) {
        setError(true);
        setSubmitted(false)
        console.log('111')
       } else {
        console.log('1')
        setError(false)
        setSubmitted(true)
       }
    }
    const clearForm = () => {
        setName('');
        setEmail('');
        setPhNo('');
        setMsg('');
    }
    return(
        <View style={styles.container}>
            <Text style={styles.formMsg}>Kindly Fill the below form to send out your quotatiaon</Text>
            <Text style={styles.mandatoryMsg}> <Text style={styles.mandatorySign}>*</Text> indicates Mandatory</Text>
           {error? <Text>Please fill all the mandatory fields</Text>:<Text></Text>}
           {submitted? <Text>Hi {name}, {email}, please go to the next step</Text> : <Text>Plese fill out all the fields</Text>}
            <ScrollView style={{width: '100%'}}>
            <Text style={styles.label}>Name: <Text style={styles.mandatorySign}>*</Text> </Text>
            <TextInput style={styles.textInput} onChangeText={text => setName(text)} value={name}></TextInput>

            <Text style={styles.label}>Email: <Text style={styles.mandatorySign}>*</Text> </Text>
            <TextInput style={styles.textInput} onChangeText={text => setEmail(text)} value={email}></TextInput>

            <Text style={styles.label}>Phno: <Text style={styles.mandatorySign}>*</Text> </Text>
            <TextInput style={styles.textInput} onChangeText={text => setPhNo(text)} value={phNo}></TextInput>

            <Text style={styles.label}>Message: <Text style={styles.mandatorySign}>*</Text> </Text>
            <TextInput style={styles.multi} onChangeText={text => setMsg(text)} value={msg} multiline numberOfLines={6}></TextInput>

            <TouchableOpacity onPress={()=>postMessage()} style={styles.button}>
                <Text>Submit Quote</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>clearForm()} style={styles.button}>
                <Text>Clear Form</Text>
            </TouchableOpacity>
            </ScrollView>
            
        </View>
    )
}

export default QuotePage;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        width: '100%'
    },
    label: {
        textAlign: 'left',
        fontStyle: 'italic',
        fontSize: 18,
        padding: 8
    },
    formMsg: {
        fontSize: 18, 
        fontWeight: 'bold',
        padding: 8
    },
    mandatoryMsg: {
        fontSize: 22, 
        fontWeight: 'bold',
        padding: 8
    },
    mandatorySign: {
        color: 'red',
        fontSize: 22,
        fontWeight: 'bold'
    },
    textInput: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        fontSize: 20
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: '#cecece',
        height: 40,
        alignItems: 'center'
    },
    multi: {
        height: 200,
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        fontSize: 20
    }
})