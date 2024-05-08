import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Displays = ({name,route}) => {
    const navigation=useNavigation()

    const data=[
        {    id:1,
            desc:"",
            img:"",
            price:"",
            date:"",
            time:""
        },


    ]
  return (
    <View style={styles.container}>
        <View style={{ flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{fontSize:18,fontWeight:"bold"}}>{name}</Text>
            <TouchableOpacity  onPress={()=>navigation.navigate(`${route}`)} style={{flexDirection:"row",gap:3}}>

                <Text style={{color:"#243c56"}}>View all</Text>
                
                <AntDesign name="arrowright" size={20} color="#243c56" />
            </TouchableOpacity>
        </View>
      <Text>Displays</Text>
    </View>
  )
}

export default Displays

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.1,
        elevation:4,
        padding:10,
        height:300,
        marginTop:10
        
    }
})