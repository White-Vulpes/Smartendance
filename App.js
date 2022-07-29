import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Drawer from './Drawer';
import First from './First';


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false}}>
        <stack.Group>
          <stack.Screen name='First' component={First}></stack.Screen>
          <stack.Screen name='Drawer' component={Drawer}></stack.Screen>
        </stack.Group>
      </stack.Navigator>
    </NavigationContainer>
  );
}