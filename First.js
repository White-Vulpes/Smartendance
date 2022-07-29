import { StackActions, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function First() {

  let navigation = useNavigation();
  let onClick = () => {
    navigation.dispatch(
      StackActions.replace('Drawer')
    );
  }

  let signUp = () => {
    
  }

  return (
    <View style={styles.container}>
      <StatusBar style='inverted'></StatusBar>
      <Text style={styles.heading}>Smart Attendance</Text>
      <View style={styles.bgcolor}>
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor={'#ffffff6b'}></TextInput>
      </View>
      <View style={styles.bgcolor}>
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor={'#ffffff6b'}></TextInput>
      </View>
      <TouchableOpacity onPress={onClick} style={styles.button}><Text style={{fontSize: 16, alignContent: 'center'}}>LogIn</Text></TouchableOpacity>
      <TouchableOpacity onPress={signUp} style={styles.button}><Text style={{fontSize: 16, alignContent: 'center'}}>Sign Up</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    color: 'white',
    marginBottom: 100,
    fontSize: 35,
  },

  input: {
    padding: 6,
    fontSize: 16,
    width: 200,
    textAlign: 'center',
    color: 'white',
  },

  bgcolor: {
    backgroundColor: '#33373838',
    borderRadius: 15,
    margin: 10,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#4EC5F1',
    margin: 30,
    borderRadius: 15,
    padding: 10,
    height: 45,
    width: 200,
  },
});
