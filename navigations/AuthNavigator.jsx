import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import SignupScreen from "../Screens/SignupScreen";
import BottomTabs from "./BottomTabNavigator";
import ProductDetails from "../Screens/ProductDetails";
import StoreScreen from "../Screens/StoreScreen";
import Messages from "../Screens/Messages";
import Notification from "../Screens/Notification";
import AddScreen from "../Screens/AddScreen";
import DashboardScreen from "../Screens/DashboardScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerStack from "./DrawerNavigator";
import Products from "../Screens/Products";
import HomeScreen from "../Screens/HomeScreen";
import AdvertsScreen from "../Screens/AdvertsScreen";
import AdvertScreen from "../Screens/AdvertScreen";
import Product from "../Screens/Product";
import Auction from "../Screens/Auction";
import Post from "../Screens/Post";
import Information from "../Screens/Information";
import Adverts from "../Screens/Adverts";
import Details from "../Screens/Details";









const Stack=createStackNavigator()

function AuthStack(){
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }} initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen"  component={HomeScreen}/>

            <Stack.Screen name="Signup"  component={SignupScreen}/>
            <Stack.Screen name="Login"  component={LoginScreen}/>
            <Stack.Screen name="Home"  component={DrawerStack}/>
            <Stack.Screen name="ProductDetails"  component={ProductDetails}/>
            <Stack.Screen name="StoreDetails"  component={StoreScreen}/>
            <Stack.Screen name="messages"  component={Messages}/>
            <Stack.Screen name="notification"  component={Notification}/>
            <Stack.Screen name="AddScreen"  component={AddScreen}/>
            <Stack.Screen name="Products"  component={Products}/>
            {/* <Stack.Screen name="Advert" component={AdvertScreen} /> */}
            <Stack.Screen name="Adverts" component={Adverts} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Auction" component={Auction} />
            <Stack.Screen name="Post" component={Post} />
            <Stack.Screen name="Information" component={Information} />
            <Stack.Screen name="Details" component={Details} />






                

        </Stack.Navigator>
    )
}

export default AuthStack;