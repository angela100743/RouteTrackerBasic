import { createDrawerNavigator } from '@react-navigation/drawer';
import { RouteStack } from './stack';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => { 
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="RouteStack" component={RouteStack} />
            {/* <Drawer.Screen name="Article" component={Article} /> */}
        </Drawer.Navigator>
    );
}