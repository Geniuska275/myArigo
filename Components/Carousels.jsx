import React, { useEffect, useState } from 'react';
import { Dimensions, Image, Text, View ,TouchableOpacity} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { FontAwesome6 } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const MyCarousel = ({text , navigate}) => {
  const width = Dimensions.get('window').width;
  const [posts,setPosts]= useState([])
  const navigation = useNavigation();


  const getAllPost = async ()=>{
    const baseUrl = "https://app.myarigo.com/api/posts"
    try {
      const token = await AsyncStorage.getItem("token")
      const response = await axios.get(baseUrl,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setPosts(response.data.data.posts.data)

    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(()=>{
    getAllPost();
  },[])

  return (
    <View style={{paddingVertical:20 }}>
      <View style={{
        flexDirection: 'row',
        justifyContent:'space-between',
         paddingVertical:20,
        marginBottom: 10,
      }}>
         <Text style={{
        fontWeight:"bold",
        marginLeft:20
      }}>{text}</Text>
      <TouchableOpacity style={{
        flexDirection:"row",
        gap:10,  
        alignItems:"center",
        marginRight:10   
      }}
      onPress={()=>navigation.navigate(`${navigate}`)}
      >
        <Text style={{
            color:"#337ab7"
        }}>View All</Text>
        <FontAwesome6 name="arrow-right" size={18} color="#337ab7" />
      </TouchableOpacity>


      </View>
      <Carousel
        loop
        width={width}
        height={width/2}
        autoPlay
        data={posts} // Example data
        scrollAnimationDuration={1000}
        onSnapToItem={() =>{}}
        renderItem={({ item}) => (
          <View style={{
            width:360,
            marginHorizontal:40,
        
            backgroundColor:"#ffffff",
            shadowColor: "#000",
            height:220,
            borderWidth:0.5,
            borderColor:"gray",
            borderRadius:10,
            position:"relative",
            alignSelf:"center"
          }}>
           {item.images.map((image)=>(
             
            <Image 
             source={{
               uri:image.image_url
             }} 
             style={{
               width:"100%",
               height:"100%",
               borderTopLeftRadius:10,
               borderTopRightRadius:10,
             }}/>
   
           ))
         
         
         
         }
             <View style={{
               position:"absolute",
               width:"90%",
               height:80,
               backgroundColor:"#ffffff",
               marginHorizontal:10,
               bottom:25,
               borderRadius:10,
             }}>
               <Text style={{
                 fontWeight:"bold",
                 alignItems:"center",
                 fontSize:12,
                 marginHorizontal:10,
                 marginVertical:5
               }}>{item.title}</Text>
               <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginVertical:10}}>
                 <View style={{flexDirection:"row",alignItems:"center"}}>
                 <AntDesign name="like2" size={24} color="black" />
                 <Text>0</Text>
                 </View>
                 <View style={{flexDirection:"row",alignItems:"center"}}>
                 <EvilIcons name="comment" size={24} color="black" />
                 <Text>0</Text>
                 </View>
                 <View style={{flexDirection:"row",alignItems:"center"}}>
                 <FontAwesome name="eye" size={24} color="black" />
                 <Text>{item.view}</Text>
                 </View>
   
   
               </View>
   
             </View>
         
          </View>
        )}
      />
    </View>
  );
};

export default MyCarousel;