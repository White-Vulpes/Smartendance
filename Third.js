import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'

const Third = () => {

  let designListView = (item) => {
    return (
      <View style={styles.cardView}>
        <Text style={{left: 20, top: 10, fontSize: 20}}>{item.subject}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{left: 20, top: 17}}>{item.time} - {item.data}</Text>
          <Text style={{fontSize: 25, position: 'absolute', right: 10, textAlignVertical: 'center'}}>34</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={{color: 'white', textAlign: 'center', fontSize: 30, margin: 40}}>Previous Attendance</Text>
      <FlatList data={[{data: '12/08/2022', time: '22:10', subject: 'CDC'},
                        {data: '12/08/2022', time: '22:10', subject: 'CDC'},
                        {data: '12/08/2022', time: '22:10', subject: 'CDC'},
                        {data: '12/08/2022', time: '22:10', subject: 'CDC'},
                        {data: '12/08/2022', time: '22:10', subject: 'CDC'}]}
                  renderItem={({item}) => {return designListView(item)}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  cardView: {
    color: 'black',
    paddingBottom: 37,
    margin: 3,
    backgroundColor: '#eccf13',
    borderRadius: 20,
  }
});

export default Third