import { SafeAreaView, StyleSheet, Text, View , Platform, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { useNavigation } from '@react-navigation/native'
import SelectDropdown from 'react-native-select-dropdown'
import Radio from '../Components/Inputs/Radio';

const Business = () => {
    const navigation=useNavigation();
    const [subscription, setSubcription] = React.useState('#41,500 -1 month');
    const [sellername, setSellerName] = React.useState('');
    const [businessname, setBusinessName] = React.useState('');
    const [businessphone, setBusinessPhone] = React.useState('');
    const [businessaddress, setBusinessAddress] = React.useState('');
    const [businessemail, setBusinessEmail] = React.useState('');
    const [Flutterwave, setFlutterwave] = React.useState('');
    const [accountType, setAccountType] = React.useState("");


    const emojisWithIcons = [{
        title:"Sort By"
      },
      {
        title:"Sort By"
      },
      ];

      const Options=[
        {label:"Flutterwave",value:"Flutterwave"},
        {label:"Bank Alert",value:"Bank Alert"}
      ]
      



  return (
    <SafeAreaView style={{
        backgroundColor:"white"
    }}>
        <Header/>
        <Text style={styles.text}>Business Information</Text>
        <ScrollView>

         <View 
                 style={{
                     flexDirection:"row",
                     marginHorizontal:20,
                     marginTop:20,
                     position:"relative"
                    }}
                    >
        <Text style={{
            color:"#565b64"
        }}>Subscription Plan</Text>
        <Text 
            style = {{
            color:"red",
            fontSize:30,
            position:"absolute",
            right:Platform.OS==="ios"?250:210,
            top:-10}}>*</Text> 
        <TouchableOpacity onPressIn={()=>navigation.navigate("Subscription")}>
            <Text style={{color:"blue",fontWeight:"bold",marginLeft:30}}>Change Plan</Text>
        </TouchableOpacity>  
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  padding:10,
                  marginVertical:5 }}
                  onChangeText={text => setSubcription(text)}
                  value={subscription}
                  
                  />


        <View style={{
            flexDirection:"row",
            marginHorizontal:20,
            marginTop:20,
            position:"relative"
        }}>
        <Text style={{
            color:"#565b64"
        }}>Business Name</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?260:240,top:-10}}>*</Text> 
 
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  marginVertical:5 }}
                  onChangeText={text => setBusinessName(text)}
                  value={businessname}
                  
                  />



<View style={{
    flexDirection:"row",
    marginHorizontal:20,
    marginTop:20,
    position:"relative"
}}>
        <Text style={{
            color:"#565b64"
        }}>Seller Name</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?280:240,top:-10}}>*</Text>  
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  marginVertical:5 }}
                  onChangeText={text => setSellerName(text)}
                  value={sellername}
                  
                  />



          <View style={{
              flexDirection:"row",
              marginHorizontal:20,
              marginTop:20,
              position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>Business Email</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?260:240,top:-10}}>*</Text>  
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  marginVertical:5 }}
                  onChangeText={text => setBusinessEmail(text)}
                  value={businessemail}          
                  />


            <View style={{
                flexDirection:"row",
                marginHorizontal:20,
                marginTop:20,
                position:"relative"
            }}>
         <Text style={{
             color:"#565b64"
            }}
            >Business Phone</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?260:240,top:-10}}>*</Text>  
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                   borderColor:"gray",
                   marginHorizontal:20,
                   marginVertical:5
                }}
                onChangeText={text => setBusinessPhone(text)}
                value={businessphone}          
                />


<View style={{
    flexDirection:"row",
    marginHorizontal:20,
    marginTop:20,
    position:"relative"
}}>
        <Text style={{
            color:"#565b64"
        }}>Business/Office Address</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?210:240,top:-10}}>*</Text> 
 
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  marginVertical:5 }}
                  onChangeText={text => setBusinessAddress(text)}
                  value={businessaddress}
                  
                  />


<View style={{
    flexDirection:"row",
    marginHorizontal:20,
    marginVertical:10,
    position:"relative"
}}>
        <Text style={{
            color:"#565b64"
        }}>Business Country </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?250:270,top:-10}}>*</Text>       
      </View>
      <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
        return (
            <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'Select'}
          </Text>
         
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
        return (
            <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
    />



<View style={{
    flexDirection:"row",
    marginHorizontal:20,
    marginVertical:10,
    position:"relative"
}}>
        <Text style={{
            color:"#565b64"
        }}>Business State </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?260:270,top:-10}}>*</Text>       
      </View>
      <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
        return (
            <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'Select'}
          </Text>
         
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
        return (
            <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
    />





<View style={{
    flexDirection:"row",
    marginHorizontal:20,
    marginVertical:10,
    position:"relative"
}}>
        <Text style={{
            color:"#565b64"
        }}>Business Market</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?250:270,top:-10}}>*</Text>       
      </View>
      <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
        return (
            <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'Select'}
          </Text>
         
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
        return (
            <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
    />

<View style={{
    flexDirection:"row",
    marginHorizontal:20,
    marginTop:20,
    position:"relative"
}}>
        <Text style={{
            color:"#565b64"
        }}>About Business</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?250:240,top:-10}}>*</Text> 
 
      </View>
      <TextInput
              style={{ 
                  height: 140, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  marginVertical:5 }}
                  onChangeText={text => setBusinessAddress(text)}
                  value={businessaddress}            
                  />
       <View style={{
    flexDirection:"row",
    marginHorizontal:20,
    marginTop:20,
    position:"relative"
}}>
        <Text style={{
            color:"#565b64"
        }}>Select Payment Option</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?210:240,top:-10}}>*</Text> 
 
      </View>
      <Radio Options={Options}
           CheckedValue={Flutterwave} 
          style={{marginBottom:15}}
          onChange={setAccountType}/>

<TouchableOpacity style={{
        backgroundColor:"#337ab7",
        padding:10,
        borderRadius:10,
        marginHorizontal:20,
        paddingHorizontal:100,
        marginVertical:30,
        marginBottom:20,
        alignSelf:"center"
       }}>
        <Text style={{color:"white",fontWeight:"bold"}}>Submit</Text>
       </TouchableOpacity>


          
</ScrollView>
    </SafeAreaView>
  )
}

export default Business

const styles = StyleSheet.create({
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
    dropdownButtonStyle: {
        width: 360,
        height: 40,
        marginHorizontal:20,
        backgroundColor: '#E9ECEF',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
      },
      dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
      },
      dropdownButtonArrowStyle: {
        fontSize: 28,
      },
      dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
      },
      dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
      },
      dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
      },
      dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
      },
      dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
      },
})