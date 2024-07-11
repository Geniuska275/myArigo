import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Logo from "../Components/ar.png"


const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={{
        width:180,
        height:100,
        resizeMode:"cover",
      }}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#243c56',
    },
})