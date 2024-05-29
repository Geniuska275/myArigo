import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Header'
import { useNavigation } from '@react-navigation/native'

const Mycv = () => {
    const navigation=useNavigation()
  return (
    <SafeAreaView>
        <Header/>

      <Text style={{
        alignSelf:"center",
        marginVertical:10
      }}> No CV Found </Text>
      <TouchableOpacity onPress={()=>navigation.navigate("AddScreen")} style={{
     alignSelf:"center"
      }}>
      <Text style={{fontWeight:"bold",color:"#679eca"}}>Click here to Add.</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Mycv

const styles = StyleSheet.create({})