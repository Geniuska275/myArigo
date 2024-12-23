import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import AuthStack from './AuthNavigator';
import CustomDrawer from '../Components/CustomDrawer';
import Request from '../Screens/Request';
import Subscriptions from '../Screens/Subscriptions';
import Messages from '../Screens/Messages';
import Mycv from '../Screens/mycv';
import { MaterialIcons } from '@expo/vector-icons';
import BottomTabs from './BottomTabNavigator';
import Business from '../Screens/Business';
import BusinessFollowed from '../Screens/BusinessFollowed';
import FollowedBusiness from '../Screens/FollowedBusiness';
import AuctionScreen from '../Screens/AuctionScreen';
import AdvertsScreen from '../Screens/AdvertsScreen';
import Refferals from '../Screens/referrals';
import Adverts from '../Screens/Adverts';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator 
    drawerContent={(props) => <CustomDrawer {...props} />}
    screenOptions={{
        headerShown: false,
        drawerPosition:'right'
    }}
    >
      <Drawer.Screen name="Home" component={BottomTabs} />
      <Drawer.Screen name="Refferals" component={Refferals} />
      <Drawer.Screen name="Register a Business/brand/Service" component={Subscriptions} />
      <Drawer.Screen name="Advertsie on Arigo" component={Adverts} />
      <Drawer.Screen name="Auction Items" component={AuctionScreen} />
      <Drawer.Screen name="Subscription" component={Subscriptions} />
      <Drawer.Screen name="My Requests" component={Request} />
      <Drawer.Screen name="Personal Profile" component={Profile} />
      {/* <Drawer.Screen name="Business" component={Business} /> */}
      <Drawer.Screen name="BusinessFollowed" component={BusinessFollowed} />
      <Drawer.Screen name="FollowedBusiness" component={FollowedBusiness} />
      <Drawer.Screen name="Messsages" component={Messages} />
      <Drawer.Screen name="My Cv" component={Mycv} />





    </Drawer.Navigator>
  );
}



