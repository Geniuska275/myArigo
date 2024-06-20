import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import {logo} from "./logos.png";


const Header = ({navigation}) => {
  const Navigation = useNavigation();
  
  return (
    <View style={styles.Header}>
      <Image source={require("./logos.png")} style={{width:90,height:35,marginLeft:25}}/>
      {/* <Text style={{fontWeight:"bold",color:"white",marginLeft:25}}>MyArigo</Text> */}
      <View style={{
        flexDirection:"row",
        gap:20
      }}>
        <TouchableOpacity onPress={()=>Navigation.navigate("messages")}>
      <MaterialCommunityIcons name="email-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Navigation.navigate("notification")}>

      <SimpleLineIcons name="bell" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.openDrawer("Home")}>

      <Icon name="reorder-three" color="white" size={32}  style={{marginRight:25}}/>
        </TouchableOpacity>
      </View>
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