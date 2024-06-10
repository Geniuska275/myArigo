import { StyleSheet, Text, View ,SafeAreaView, TouchableOpacity,Alert, ScrollView} from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const Request = () => {

  const Delete = ()=> {
   
Alert.alert(
  'DELETE REQUEST',
  'Are you sure you want to delete this request?',
  [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ],
  { cancelable: false },
);
  }
  return (
    <SafeAreaView>
        <Header/>
        <ScrollView>

        <View style={{
          borderColor:"gray",
          borderWidth:0.4,
          marginHorizontal:10,
          marginVertical:10,
          padding:10
          
        }}>
            <Text style={{fontWeight:"bold"}}>I want to buy food stuff</Text>
            <View style={{
              marginLeft:260,
              
            }}>
                <Text style={{width:"150px",marginBottom:5}}>June 10th,2024</Text>
                <Text>2pm</Text>
                <TouchableOpacity onPress={Delete}>
                <AntDesign name="delete" size={24} color="red" />

                </TouchableOpacity>

            </View>
            

        </View>
        <View style={{
          borderColor:"gray",
          borderWidth:0.4,
          marginHorizontal:10,
          marginVertical:10,
          padding:10
          
        }}>
            <Text style={{fontWeight:"bold"}}>I want to buy food stuff</Text>
            <View style={{
              marginLeft:260,
              
            }}>
                <Text style={{width:"150px",marginBottom:5}}>June 10th,2024</Text>
                <Text>2pm</Text>
                <TouchableOpacity onPress={Delete}>
                <AntDesign name="delete" size={24} color="red" />

                </TouchableOpacity>

            </View>
            

        </View>
        <View style={{
          borderColor:"gray",
          borderWidth:0.4,
          marginHorizontal:10,
          marginVertical:10,
          padding:10
          
        }}>
            <Text style={{fontWeight:"bold"}}>I want to buy food stuff</Text>
            <View style={{
              marginLeft:260,
              
            }}>
                <Text style={{width:"150px",marginBottom:5}}>June 10th,2024</Text>
                <Text>2pm</Text>
                <TouchableOpacity onPress={Delete}>
                <AntDesign name="delete" size={24} color="red" />

                </TouchableOpacity>

            </View>
            

        </View>
        </ScrollView>
        <View style={{
          marginHorizontal:10,
          marginTop:230,
          flexDirection:"row"
        }}>
          <TextInput 
          style={{
            backgroundColor:"#e4e4e4",
            padding:20,
            width:320,
            borderTopLeftRadius:5,
            borderBottomLeftRadius:5
          }}
          placeholder='write a request'/>
          <TouchableOpacity style={{
            backgroundColor:"#337bb7",
            justifyContent:"center",
            alignItems:"center",
            width:60,
            borderTopRightRadius:5,
            borderBottomRightRadius:5
          }}>
          <FontAwesome name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}

export default Request

const styles = StyleSheet.create({

})