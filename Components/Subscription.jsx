import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
const Subscription = ({item,navigation}) => {
    console.log(item)
  return (
    <View style={{
        marginVertical:10,
        backgroundColor:"#337bb7",
        width:350,
        height:300,
        marginHorizontal:20,
        alignSelf:"center",
        borderRadius:10
    }}>
        <View style={{
            marginHorizontal:10,
            marginVertical:20
        }}>
     <Text style={{ 
        color:"white",
        fontWeight:"bold"
     }}>{item.name} PLAN</Text>
     <Text style={{
        color:"white",
        fontWeight:"bold"
     }}>Monthly Price</Text>
        </View>
       

        <View 
         style={{
            marginHorizontal:10,
            marginVertical:20
        }}
        >
     <Text style={{ 
        color:"white",
        fontWeight:"bold"
     }}>#{item.price}</Text>
     <Text style={{
        color:"white",
        fontWeight:"bold"
     }}>Duration:{item.duration} Months</Text>
        </View>


        <View style={{
            flexDirection:"row",
            gap:10,
            marginHorizontal:10
        }}>
        <EvilIcons name="check" size={24} color="white" />
        <Text style={{
            color:"white",
            fontWeight:"bold"
        }}>{item.ads_limit} ads.</Text>
        </View>

        <View style={{
            flexDirection:"row",
            gap:10,
            marginHorizontal:10,
            marginTop:10
        }}>
        <EvilIcons name="check" size={24} color="white" />
         {item.sms_email_notifications ?<Text style={{
            color:"white",
            fontWeight:"bold"
        }}>SMS & Email notificatons on new messages.</Text>:""}
        </View>
        <TouchableOpacity 
          style={{
            backgroundColor:"white",
            width:300,
            paddingVertical:10,
            borderRadius:10,
            alignSelf:"center",
            marginVertical:20
          }}

          onPress={()=>navigation.navigate("Business",{plan:item.price})}
        >
            <Text style={{
                alignSelf:"center",
                color:"#337bb7"
            }}>Select Plan</Text>
        </TouchableOpacity>

    </View>




  )
}

export default Subscription

const styles = StyleSheet.create({})