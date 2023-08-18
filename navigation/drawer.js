import { createDrawerNavigator } from '@react-navigation/drawer';
import { RouteStack } from './stack';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => { 
    return (
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name="RouteStack" 
                component={RouteStack} />  
                {/* options={{title:"My Routes"}}  */}
            
            {/* <Drawer.Screen name="Article" component={Article} /> */}
        </Drawer.Navigator>
    );
}