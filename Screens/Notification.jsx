import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../Components/Header'

const Notification = ({navigation}) => {
  return (
    <SafeAreaView>
        <Header navigation={navigation}/>
      <Text>Notification</Text>
    </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({})