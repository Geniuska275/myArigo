import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import {logo} from "./logos.png";


const NewHeader = ({navigation}) => {
  const Navigation = useNavigation();
  
  return (
    <View style={styles.Header}>
      <TouchableOpacity onPress={()=>Navigation.navigate("HomeScreen")}>

      <Image source={require("./logos.png")}  style={{width:90,height:36,marginLeft:25}}/>
      </TouchableOpacity>
      {/* <Text style={{fontWeight:"bold",color:"white",marginLeft:25}}>MyArigo</Text> */}
      <View style={{
        flexDirection:"row",
        gap:20
      }}>
        <TouchableOpacity onPress={()=>Navigation.navigate("Signup")}>
         <Text style={{
            color:"white",
            fontWeight:"bold",
            fontSize:20
         }}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Navigation.navigate("Login")}>
        <Text style={{
            color:"white",
            fontWeight:"bold",
            fontSize:20,
            marginRight:20

         }}>Login</Text> 
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NewHeader

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