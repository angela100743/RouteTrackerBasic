import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileStack, RouteStack } from './stack';
import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView, View, Image, Linking } from 'react-native';
const Drawer = createDrawerNavigator();

export const MyDrawer = () => { 
    return (
        <Drawer.Navigator
            drawerContent={(props) => {
                return (
                    <SafeAreaView style={{ flex: 1, paddingTop: 20, backgroundColor: '#AFE1AF'}}>
                        <View style={{justifyContent:'center', alignItems:'center', height: 140}}>
                            <Image
                                style={{ width: 100, height: 100, resizeMode:'contain' }}
                                source={require("../assets/ktmtransitlogo-circle.png")}
                            
                            />
                        </View>
                        <DrawerItemList {...props} />
                        <DrawerItem 
                            label="More info"
                            onPress={()=>Linking.openURL('https://kathmandupost.com/national/2018/04/06/bus-syndicate-retreats-after-tough-govt-action')}
                        />
                    </SafeAreaView>
                );
            }}
                screenOptions={{
                    headerShown: false,
                }}
        >
            <Drawer.Screen name="Saved Routes" 
                component={RouteStack}  
                options={{title:"My Routes"}}  />
            <Drawer.Screen name="ProfileStack" 
                component={ProfileStack} 
                options={{title: "Profile"}}/>  

        </Drawer.Navigator>
    );
}