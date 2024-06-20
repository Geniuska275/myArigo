import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import constants from "expo-constants";

const Subscriptions = ({navigation}) => {
    const {touch,container,touchy,touches}=styles;
  return (
    <SafeAreaView style={container}>
        <Header navigation={navigation}/>
        <Text style={styles.text}>Subscriptions</Text>
        <ScrollView>
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
             }}>STARTER PLAN</Text>
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
             }}>#41,500</Text>
             <Text style={{
                color:"white",
                fontWeight:"bold"
             }}>Duration:1 Month</Text>
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
                }}>12 ads.</Text>
                </View>

                <View style={{
                    flexDirection:"row",
                    gap:10,
                    marginHorizontal:10,
                    marginTop:10
                }}>
                <EvilIcons name="check" size={24} color="white" />
                <Text style={{
                    color:"white",
                    fontWeight:"bold"
                }}>SMS & Email notificatons on new messages.</Text>
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
                >
                    <Text style={{
                        alignSelf:"center",
                        color:"#337bb7"
                    }}>Select Plan</Text>
                </TouchableOpacity>




            </View>

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
             }}>STARTER PLAN</Text>
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
             }}>#41,500</Text>
             <Text style={{
                color:"white",
                fontWeight:"bold"
             }}>Duration:1 Month</Text>
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
                }}>12 ads.</Text>
                </View>

                <View style={{
                    flexDirection:"row",
                    gap:10,
                    marginHorizontal:10,
                    marginTop:10
                }}>
                <EvilIcons name="check" size={24} color="white" />
                <Text style={{
                    color:"white",
                    fontWeight:"bold"
                }}>SMS & Email notificatons on new messages.</Text>
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
                >
                    <Text style={{
                        alignSelf:"center",
                        color:"#337bb7"
                    }}>Select Plan</Text>
                </TouchableOpacity>




            </View>

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
             }}>STARTER PLAN</Text>
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
             }}>#41,500</Text>
             <Text style={{
                color:"white",
                fontWeight:"bold"
             }}>Duration:1 Month</Text>
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
                }}>12 ads.</Text>
                </View>

                <View style={{
                    flexDirection:"row",
                    gap:10,
                    marginHorizontal:10,
                    marginTop:10
                }}>
                <EvilIcons name="check" size={24} color="white" />
                <Text style={{
                    color:"white",
                    fontWeight:"bold"
                }}>SMS & Email notificatons on new messages.</Text>
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
                >
                    <Text style={{
                        alignSelf:"center",
                        color:"#337bb7"
                    }}>Select Plan</Text>
                </TouchableOpacity>




            </View>


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
             }}>STARTER PLAN</Text>
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
             }}>#41,500</Text>
             <Text style={{
                color:"white",
                fontWeight:"bold"
             }}>Duration:1 Month</Text>
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
                }}>12 ads.</Text>
                </View>

                <View style={{
                    flexDirection:"row",
                    gap:10,
                    marginHorizontal:10,
                    marginTop:10
                }}>
                <EvilIcons name="check" size={24} color="white" />
                <Text style={{
                    color:"white",
                    fontWeight:"bold"
                }}>SMS & Email notificatons on new messages.</Text>
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
                >
                    <Text style={{
                        alignSelf:"center",
                        color:"#337bb7"
                    }}>Select Plan</Text>
                </TouchableOpacity>




            </View>


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
             }}>STARTER PLAN</Text>
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
             }}>#41,500</Text>
             <Text style={{
                color:"white",
                fontWeight:"bold"
             }}>Duration:1 Month</Text>
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
                }}>12 ads.</Text>
                </View>

                <View style={{
                    flexDirection:"row",
                    gap:10,
                    marginHorizontal:10,
                    marginTop:10
                }}>
                <EvilIcons name="check" size={24} color="white" />
                <Text style={{
                    color:"white",
                    fontWeight:"bold"
                }}>SMS & Email notificatons on new messages.</Text>
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
                >
                    <Text style={{
                        alignSelf:"center",
                        color:"#337bb7"
                    }}>Select Plan</Text>
                </TouchableOpacity>




            </View>


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
             }}>STARTER PLAN</Text>
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
             }}>#41,500</Text>
             <Text style={{
                color:"white",
                fontWeight:"bold"
             }}>Duration:1 Month</Text>
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
                }}>12 ads.</Text>
                </View>

                <View style={{
                    flexDirection:"row",
                    gap:10,
                    marginHorizontal:10,
                    marginTop:10
                }}>
                <EvilIcons name="check" size={24} color="white" />
                <Text style={{
                    color:"white",
                    fontWeight:"bold"
                }}>SMS & Email notificatons on new messages.</Text>
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
                >
                    <Text style={{
                        alignSelf:"center",
                        color:"#337bb7"
                    }}>Select Plan</Text>
                </TouchableOpacity>




            </View>


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
             }}>STARTER PLAN</Text>
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
             }}>#41,500</Text>
             <Text style={{
                color:"white",
                fontWeight:"bold"
             }}>Duration:1 Month</Text>
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
                }}>12 ads.</Text>
                </View>

                <View style={{
                    flexDirection:"row",
                    gap:10,
                    marginHorizontal:10,
                    marginTop:10
                }}>
                <EvilIcons name="check" size={24} color="white" />
                <Text style={{
                    color:"white",
                    fontWeight:"bold"
                }}>SMS & Email notificatons on new messages.</Text>
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
                >
                    <Text style={{
                        alignSelf:"center",
                        color:"#337bb7"
                    }}>Select Plan</Text>
                </TouchableOpacity>




            </View>



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
             }}>STARTER PLAN</Text>
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
             }}>#41,500</Text>
             <Text style={{
                color:"white",
                fontWeight:"bold"
             }}>Duration:1 Month</Text>
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
                }}>12 ads.</Text>
                </View>

                <View style={{
                    flexDirection:"row",
                    gap:10,
                    marginHorizontal:10,
                    marginTop:10
                }}>
                <EvilIcons name="check" size={24} color="white" />
                <Text style={{
                    color:"white",
                    fontWeight:"bold"
                }}>SMS & Email notificatons on new messages.</Text>
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
                >
                    <Text style={{
                        alignSelf:"center",
                        color:"#337bb7"
                    }}>Select Plan</Text>
                </TouchableOpacity>




            </View>

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
             }}>STARTER PLAN</Text>
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
             }}>#41,500</Text>
             <Text style={{
                color:"white",
                fontWeight:"bold"
             }}>Duration:1 Month</Text>
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
                }}>12 ads.</Text>
                </View>

                <View style={{
                    flexDirection:"row",
                    gap:10,
                    marginHorizontal:10,
                    marginTop:10
                }}>
                <EvilIcons name="check" size={24} color="white" />
                <Text style={{
                    color:"white",
                    fontWeight:"bold"
                }}>SMS & Email notificatons on new messages.</Text>
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
                >
                    <Text style={{
                        alignSelf:"center",
                        color:"#337bb7"
                    }}>Select Plan</Text>
                </TouchableOpacity>




            </View>

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
             }}>STARTER PLAN</Text>
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
             }}>#41,500</Text>
             <Text style={{
                color:"white",
                fontWeight:"bold"
             }}>Duration:1 Month</Text>
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
                }}>12 ads.</Text>
                </View>

                <View style={{
                    flexDirection:"row",
                    gap:10,
                    marginHorizontal:10,
                    marginTop:10
                }}>
                <EvilIcons name="check" size={24} color="white" />
                <Text style={{
                    color:"white",
                    fontWeight:"bold"
                }}>SMS & Email notificatons on new messages.</Text>
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
                >
                    <Text style={{
                        alignSelf:"center",
                        color:"#337bb7"
                    }}>Select Plan</Text>
                </TouchableOpacity>




            </View>
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
             }}>STARTER PLAN</Text>
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
             }}>#41,500</Text>
             <Text style={{
                color:"white",
                fontWeight:"bold"
             }}>Duration:1 Month</Text>
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
                }}>12 ads.</Text>
                </View>

                <View style={{
                    flexDirection:"row",
                    gap:10,
                    marginHorizontal:10,
                    marginTop:10
                }}>
                <EvilIcons name="check" size={24} color="white" />
                <Text style={{
                    color:"white",
                    fontWeight:"bold"
                }}>SMS & Email notificatons on new messages.</Text>
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
                >
                    <Text style={{
                        alignSelf:"center",
                        color:"#337bb7"
                    }}>Select Plan</Text>
                </TouchableOpacity>




            </View>

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
             }}>STARTER PLAN</Text>
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
             }}>#41,500</Text>
             <Text style={{
                color:"white",
                fontWeight:"bold"
             }}>Duration:1 Month</Text>
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
                }}>12 ads.</Text>
                </View>

                <View style={{
                    flexDirection:"row",
                    gap:10,
                    marginHorizontal:10,
                    marginTop:10
                }}>
                <EvilIcons name="check" size={24} color="white" />
                <Text style={{
                    color:"white",
                    fontWeight:"bold"
                }}>SMS & Email notificatons on new messages.</Text>
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
                >
                    <Text style={{
                        alignSelf:"center",
                        color:"#337bb7"
                    }}>Select Plan</Text>
                </TouchableOpacity>




            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Subscriptions

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fefefe",
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