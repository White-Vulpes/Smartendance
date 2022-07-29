import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import QRCode from 'react-native-qrcode-svg'

const Second = () => {

  let designListView = (item) => {
    return  <View style={styles.listView}>
                <Text style={styles.item}>{item.key}</Text>
                <Image style={styles.doneIcon} source={require('./correct.png')}></Image>
            </View>
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CDC</Text>
      <View style={styles.imageView}>
        <QRCode value='{name:"Employee Name",age:27,department:"Police",id:"aisuoiqu3234738jdhf100223}' size={200}/>
      </View>
      <View style={{alignItems: 'center'}}>
        <FlatList data={[{key: 'RA2031005010007'},
                        {key: 'RA2031005010030'},
                        {key: 'RA2031005010012'},
                        {key: 'RA2031005010005'},
                        {key: 'RA2031005010034'}]}
                  renderItem={({item}) => {return designListView(item)}}
                  style={{marginTop: 50,}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    },

    image: {
      marginTop: 70,
      marginBottom: 30,
    },

    imageView: {
      borderWidth: 10,
      borderRadius: 20,
      borderColor: '#eccf13',
      marginTop: 50,
      alignItems: 'center',
      backgroundColor: '#eccf13'
    },

    item: {
      padding: 5,
      fontSize: 16,
      height: 35,
      color: 'white',

    },

    doneIcon: {
      height: 15,
      width: 15,
      margin: 9,
      marginLeft: 80,
    },

    listView: {
      flexDirection: 'row',
    },

    heading: {
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      marginTop: 50,
    }
});

export default Second