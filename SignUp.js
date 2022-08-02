import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'

const SignUp = () => {


let signUp = () => {
    
}
  return (
    <View style={styles.container}>
        <View style={{bottom: 50}}>
            <Text style={{fontSize: 30, color: 'white', }}>Sign Up</Text>
        </View>
        <View style={styles.bgcolor}>
            <TextInput style={styles.input} placeholder="Name" placeholderTextColor={'#ffffff6b'}></TextInput>
        </View>
        <View style={styles.bgcolor}>
            <TextInput style={styles.input} placeholder="Subject" placeholderTextColor={'#ffffff6b'}></TextInput>
        </View>
        <View style={styles.bgcolor}>
            <TextInput style={styles.input} placeholder="Email ID" placeholderTextColor={'#ffffff6b'}></TextInput>
        </View>
        <View style={styles.bgcolor}>
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor={'#ffffff6b'}></TextInput>
        </View>
        <View style={styles.bgcolor}>
            <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor={'#ffffff6b'}></TextInput>
        </View>
        <TouchableOpacity onPress={signUp} style={styles.button}><Text style={{fontSize: 16, alignContent: 'center'}}>Sign Up</Text></TouchableOpacity>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
    input: {
        padding: 6,
        fontSize: 16,
        width: 300,
        textAlign: 'center',
        color: 'white',
      },

    bgcolor: {
        backgroundColor: '#33373838',
        borderRadius: 15,
        margin: 20,
      },
    
    button: {
        alignItems: 'center',
        backgroundColor: '#eccf13',
        top: 40,
        borderRadius: 15,
        padding: 10,
        height: 45,
        width: 200,
      },
})