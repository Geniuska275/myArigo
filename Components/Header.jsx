import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"


const Header = () => {
  return (
    <View style={styles.Header}>
      <Text style={{fontWeight:"bold",color:"white"}}>MyArigo</Text>
      <Icon name="reorder-three" color="white" size={32} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    Header:{
        flexDirection:"row",
         alignItems:"center",
       justifyContent:"space-around",
       paddingVertical:15,
       shadowOffset: { width: 1, height: 1 },
       shadowColor: "black",
       shadowOpacity: 0.1,
       backgroundColor:"#243c56",
       borderColor:"gray",
       borderBottomWidth:0.3
    }
})