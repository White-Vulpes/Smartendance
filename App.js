import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Drawer from './Drawer';
import First from './First';
import SignUp from './SignUp';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false}}>
        <stack.Group>
          <stack.Screen name='First' component={First}></stack.Screen>
          <stack.Screen name='Drawer' component={Drawer}></stack.Screen>
          <stack.Screen name='SignUp' component={SignUp}></stack.Screen>
        </stack.Group>
      </stack.Navigator>
    </NavigationContainer>
  );
}