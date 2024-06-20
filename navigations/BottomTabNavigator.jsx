import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import AuctionScreen from '../Screens/AuctionScreen';
import AdvertsScreen from '../Screens/AdvertsScreen';
import PostScreen from '../Screens/PostScreen';
import Services from '../Screens/Services';
import Products from '../Screens/Products';
import Icon from "react-native-vector-icons/Ionicons"
import ProductCategoryDetails from '../Screens/ProductCategoryDetails';
import DashboardScreen from '../Screens/DashboardScreen';






const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
      <Tab.Navigator screenOptions={({route})=>({
          headerShown:false,
          tabBarActiveTintColor:"#243c56",

          tabBarIcon:({color,size,focused})=>{
              let iconName;
              if(route.name=="Home"){
                 iconName= focused? "home":"home-outline"
              }else if(route.name=="Adverts"){
                iconName= focused? "home":"home-outline"
                 
              }else if(route.name=="Auctions"){
                iconName= focused? "home":"home-outline"
                
              }else if(route.name=="Post"){
                iconName= focused? "home":"home-outline"
                 
              }else if(route.name=="Services"){
                iconName= focused? "home":"home-outline"              
              }else if(route.name=="Products"){
                iconName= focused? "home":"home-outline"
                 
              }else if(route.name=="Homes."){
                iconName= focused? "home":"home-outline"
                 
              }else if(route.name=="Homes"){
                iconName= focused? "home":"home-outline"
                 
              }
            return <Icon name={iconName} color={color} size={22}/>
          },
      }
          
    )
    }>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Categories" component={ProductCategoryDetails} />
       <Tab.Screen name="Adverts" component={AdvertsScreen} />
      <Tab.Screen name="Auctions" component={AuctionScreen} /> 
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Services" component={Services} />

    

    </Tab.Navigator>
  );
}

export default BottomTabs;