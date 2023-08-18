import { Ionicons } from "@expo/vector-icons";
import { Image}  from "react-native";


export const navOptions = (nav) => {
    return {
        headerTintColor: '#cbd5e1',
        headerStyle: {
            backgroundColor: "green"
        },
        headerRight: () => (
            <Ionicons
                name="menu"
                size={32}
                color="white"
                onPress={()=>nav.toggleDrawer()}
            />
        ),
        headerLeft: () => (
            <Image
                style={{ marginLeft: 10, marginBottom: 5, width: 40, height: 40,resizeMode:'contain' }}
                source={require("../assets/ktmtransitlogo-circle.png")}
                            
            />
        )
    }
}
