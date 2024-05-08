import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
// import {logo} from "./logos.png";


const Header = () => {
  return (
    <View style={styles.Header}>
      <Image source={require("./logos.png")} style={{width:90,height:50,marginLeft:25}}/>
      {/* <Text style={{fontWeight:"bold",color:"white",marginLeft:25}}>MyArigo</Text> */}
      <Icon name="reorder-three" color="white" size={32}  style={{marginRight:25}}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    Header:{
        flexDirection:"row",
         alignItems:"center",
       justifyContent:"space-between",
       paddingVertical:15,
       shadowOffset: { width: 1, height: 1 },
       shadowColor: "black",
       shadowOpacity: 0.1,
       backgroundColor:"#243c56",
       borderColor:"gray",
       borderBottomWidth:0.3
    }
})