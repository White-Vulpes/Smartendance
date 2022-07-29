import React from 'react'
import Second from './Second';
import Third from './Third';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View, Image, Text, ImageBackground, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const drawer = createDrawerNavigator();

const Drawer = () => {
  return (
        <drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{headerShown: false, drawerActiveBackgroundColor: '#20272F', drawerActiveTintColor: '#eccf13', drawerInactiveTintColor: '#6c8aac', drawerType: Platform.OS === 'web' ? 'permanent':'front'}}>
          <drawer.Screen name="Generate QRCode" component={Second} options={{
            drawerIcon: ({color}) => {
              return <Ionicons name="qr-code-outline" size={22} color={color}></Ionicons>
            }
          }}/>
          <drawer.Screen name="Previous Attendance" component={Third} options={{
            drawerIcon: ({color}) => {
              return <Ionicons name="checkmark" size={22} color={color}></Ionicons>
            },
          }}/>
        </drawer.Navigator>
  )
}

function CustomDrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View>
          <ImageBackground source={require('./backDrawer.jpg')} style={{height: 200, width: 500}}>
            <View style={styles.headerStyle}>
              <Image source={require('./logo.png')} style={styles.logo}></Image>
              <Text style={styles.heading}>Smartendance</Text>
            </View>
          </ImageBackground>
        </View>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  headerStyle: {
    position: 'absolute',
    bottom: 25,
    left: 14,
  },

  logo: {
    height: 50,
    width: 50,
    marginBottom: 10,
    borderRadius: 50,
  },

  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#eccf13',
    fontSize: 24,
  }
})
export default Drawer