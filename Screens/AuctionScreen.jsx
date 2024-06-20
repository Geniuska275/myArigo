import { View, Text,StyleSheet, ScrollView, FlatList, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import constants from "expo-constants";
import { SafeAreaView } from 'react-native';
import Auction from '../Components/Auction';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';




const AuctionScreen = ({navigation}) => {

  const data=[
    { id :1,img:"./a.png",text:"Exclusive Products",desc:"Products Available on the Arigo Auction are exclusive to our brand."},
    { id:2, img: "./b.png",text:"Available Cost",desc:"Products Cost are relatively affordable."},
    { id:3, img: "./c.png",text:"Swift Delivery",desc:"We deliver the product to the brand with the highest bid within 2-3 days."}
  ]
  return (
    <SafeAreaView style={styles.container}>
    <Header navigation={navigation}/>
    <Text style={styles.text}>Auctions</Text>
    <ScrollView>

    <Text style={{
      fontWeight:"bold",
      color:"#a0a0a0",
      marginHorizontal:20,
      marginVertical:10,
    }}>Arigo Auction</Text>
    <Text  style={{
      fontWeight:"bold",
      color:"#a0a0a0",
      marginHorizontal:20,
      marginVertical:10,
      
    }}>Join Arigo  Auction on wednesdays & fridays for exclusive products.</Text>
   {/* <Image source={require("./b.png")} style={{width:90,height:70,marginLeft:25}}/> */}
   <View style={{
    marginHorizontal:20
   }}>

     <Image 
      source={require("./a.png")}  
      style={{
      width:100,
      height:100
      }}/>
<Text style={{
  fontWeight:"bold",
  marginVertical:2
}}>Exclusive Products</Text>
<Text style={{
  fontWeight:"bold",
  marginVertical:5
}}>Products Available on the Arigo Auction are exclusive to our brand.</Text>
</View>
<View style={{
    marginHorizontal:20,
    marginTop:10
   }}>

     <Image 
      source={require("./b.png")}  
      style={{
      width:100,
      height:100
      }}/>
<Text style={{
  fontWeight:"bold",
  marginVertical:2

}}>Available Cost</Text>
<Text style={{
  fontWeight:"bold",
  marginVertical:5

}}>Products Cost are relatively affordable.</Text>
</View>
<View style={{
    marginHorizontal:20,
    marginTop:10
   }}>

     <Image 
      source={require("./c.png")}  
      style={{
      width:100,
      height:100
      }}/>
<Text style={{
  fontWeight:"bold",
  marginVertical:2

}}>Swift Delivery</Text>
<Text style={{
  fontWeight:"bold",
  marginVertical:5
}}>We deliver the product to the brand with the highest bid within 2-3 days.</Text>
</View>
    
   








      
<View style={{
              width:300,
              height:180,
              shadowOffset: { width: 2, height: 2 },
              shadowColor: "black",
              shadowOpacity: 0.1,
              elevation:1,
              borderWidth:0.5,
              borderColor:"black",
              alignSelf:"center",
              marginVertical:10,
              borderRadius:5
              }}> 

              <View style={{
                width:280,
                height:200,
                flex:1,                
                backgroundColor:"#f9f9f9",
                alignSelf:"center", 
                borderRadius:5,
                marginVertical:20
              }}>
                    <TouchableOpacity 
           style={{
                 backgroundColor:"#337bb7",
                 width:270,
                 paddingVertical:8,
                 borderRadius:8,
                 marginHorizontal:20,
                 marginVertical:10,
                 alignSelf:"center",
                 flexDirection:"row",
                 justifyContent:"space-evenly"
                 }}>
                 <Entypo name="plus" size={24} color="white" />
        <Text style={{
          fontWeight:"bold",
          color:"white",
          alignSelf:"center",
          textTransform:"uppercase"
          }}>join the auction</Text>
       </TouchableOpacity>

       <TouchableOpacity
           style={{
                 backgroundColor:"#337bb7",
                 width:270,
                 paddingVertical:8,
                 paddingHorizontal:15,
                 borderRadius:8,
                 marginHorizontal:20,
                 marginVertical:10,
                 alignSelf:"center",
                 flexDirection:"row",
                 justifyContent:"space-evenly"
                 }}>
                  <AntDesign name="wechat" size={24} color="white" />
                  {/* <Entypo name="chat" size={24} color="white" /> */}
                 <Text style={{
                   fontWeight:"bold",
                   color:"white",
                   alignSelf:"center",
                   textTransform:"uppercase"
                   }}>Want to auction your items?</Text>
            </TouchableOpacity>
          
              </View>
                

                


            </View>



    </ScrollView>
   </SafeAreaView>
  )
}

export default AuctionScreen;
const styles = StyleSheet.create({
  container:{flex: 1,
    backgroundColor: "white",
    marginTop: constants.statusBarHeight,
  },
  text:{
    textAlign:"center",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation:1,   
    paddingVertical:20,
    marginTop:-3,
    fontWeight:"bold",
    color:"#a0a0a0",
    textTransform:"capitalize",
    backgroundColor:"#fafafa"
  }
})