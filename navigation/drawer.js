import { createDrawerNavigator } from '@react-navigation/drawer';
import RouteScreen from '../screens/RouteScreen';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => { 
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="RouteScreen" component={RouteScreen} />
            {/* <Drawer.Screen name="Article" component={Article} /> */}
        </Drawer.Navigator>
    );
}