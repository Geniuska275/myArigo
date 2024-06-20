import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import AuthStack from './AuthNavigator';
import CustomDrawer from '../Components/CustomDrawer';
import Request from '../Screens/Request';
import Subscriptions from '../Screens/Subscriptions';
import Messages from '../Screens/Messages';
import Mycv from '../Screens/mycv';
const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator 
    drawerContent={(props) => <CustomDrawer {...props} />}
    screenOptions={{
        headerShown: false,
    }}
    >
      <Drawer.Screen name="Dashboard" component={AuthStack} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Request" component={Request} />

      <Drawer.Screen name="Subscription" component={Subscriptions} />
      <Drawer.Screen name="Messsages" component={Messages} />
      <Drawer.Screen name="My Cv" component={Mycv} />





    </Drawer.Navigator>
  );
}



