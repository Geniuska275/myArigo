import { 
    SafeAreaView,
    StyleSheet,
    Text, 
    View,
    Modal,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    Button,
    TextInput,
    Alert,
    
   } from 'react-native'
   import { FlatGrid } from 'react-native-super-grid';
   import CheckBox from '@react-native-community/checkbox';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React,
{
    useState,
    useEffect
} from 'react'
import Header from '../Components/Header'
import constants from "expo-constants";
import { ScrollView } from 'react-native';
import * as ImagePicker from "expo-image-picker"
import  HandleSubmit  from '../helpers/HandleSubmit';
import Sponsored from '../Components/Sponsored';
import { useNavigation } from '@react-navigation/native';


const Sponsor = () => { 
     const [modalVisible, setModalVisible] = useState(false);
        const navigation = useNavigation();
        const [selected,setSelected]=useState({})
        const [items, setItems] =useState([
            { name: 'Business Wyze',
              email:"Businesswyze@gmail.com",
              desc:"i love business",
               img:"",
               phone:"09023893030",
              image:"https://images.unsplash.com/photo-1717313860625-4d4311b5f9d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" },
            { name: 'imperatrice',
              email:"imperatrice@gmail.com",
              desc:"i love imperatrice",
               img:"",
               phone:"09023893030",
               img:"",image:"https://images.unsplash.com/photo-1716916959437-c904cdabd0f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" },
            { name: 'Sqe holdings', 
              
              email:"sqe@gmail.com",
              desc:"i love sqe holdings",
              
               phone:"09023893030",
              img:"",image:"https://images.unsplash.com/photo-1717318104110-d8ef457d9c2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" },
            { name: 'Brains Tech',
              
              email:"brainstech@gmail.com",
              desc:"i love brainstech",
               img:"",
               phone:"09023893030",
               img:"",image:"https://images.unsplash.com/photo-1717318104110-d8ef457d9c2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" },
            
          ]);
    
          const HandleSelect=(value)=>{
            const select=items.find(item=>item.name===value)
            setSelected(select)
          }
   
  return (  
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>
      <Text style={styles.text}>Sponsors</Text>
      
      <View style={{
        backgroundColor:"white",
        flex:1,
        marginBottom:20
    }}>
       <Modal visible={modalVisible} 
        style={{ flex: 1 }}
        activeOpacity={1}
       transparent={true}
       animationType="fade"
        >
        <View 
         style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'}}
        >

        <View style={{
          shadowOffset: { width: 2, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.1,
        elevation:1,   
         backgroundColor:"red",   
           width:400,height:250,backgroundColor:"white",marginHorizontal:10}}>
          <View>
           
          <TouchableOpacity
           style={{justifyContent :"center", alignSelf:"flex-end",marginRight:20,marginVertical:10, alignItems:"center",width:30,height:30,borderRadius:15,backgroundColor:"gray"}}
           onPress={()=>{
            setModalVisible(false)}}
           ><Text style={{fontWeight:"bold",color:"white"}}>x</Text></TouchableOpacity>

          <Text style={{alignSelf:"center",fontWeight:"bold",textTransform:"capitalize",marginBottom:10}}>{`${selected?.name}'s Collection`}</Text>
          <Text style={{fontWeight:"bold",marginBottom:2,marginLeft:20}}>Email</Text>
          <Text style={{marginBottom:15,marginLeft:20}}>{selected?.email}</Text>
          <Text style={{fontWeight:"bold",marginBottom:2,marginLeft:20}}>Phone</Text>
          <Text  style={{marginBottom:15,marginLeft:20}}>{selected?.phone}</Text>
          <Text style={{fontWeight:"bold",marginBottom:2,marginLeft:20}}>Description</Text>
          <Text style={{marginBottom:2,marginLeft:20}}>{selected?.desc}</Text>
          
           </View>
           </View>
        </View>
      </Modal>
     


        <FlatGrid
  itemDimension={130}
  data={items}
  spacing={10}
  style={styles.gridView}
  renderItem={({ item }) => (
    <TouchableOpacity onPress={()=>{
      console.log('open modal')
       HandleSelect(item.name)
      setModalVisible(true)
    }}>

    <ImageBackground source={{uri:item.image}} style={styles.backgroundImage}>
    <TouchableOpacity 
    
    style={{position:"absolute",
      top:15,left:10,
      flexDirection:"row",
      borderRadius:20,backgroundColor:"white",padding:5,gap:10,alignItems:"center"}}>
    <Octicons name="dot-fill" size={24} color="#337ab7" />
      <Text  style={{fontWeight:"bold",color:"black",width:80}}
      numberOfLines={1}
      >{item.name}</Text>
    </TouchableOpacity>
  </ImageBackground>
      </TouchableOpacity>
  )}
/>




    </View>

    </SafeAreaView>
  )
}

export default Sponsor

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white",
    marginTop: constants.statusBarHeight,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    position:"relative",
    width:360,
    height:150,
    borderRadius:15,
    marginHorizontal:20,
    alignSelf:"center",
    marginBottom:10
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
  },
  gridView: {
    marginTop: 10,
    flex: 1,
    marginHorizontal:20
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems:"center",
    marginBottom: 20,
    marginHorizontal:20
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    position:"relative",
    width:160,
    height:150,
    borderRadius:15,
    marginHorizontal:20,
    alignSelf:"center",
    marginBottom:10
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
  },
  gridView: {
    marginTop: 10,
    flex: 1,
 
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
})