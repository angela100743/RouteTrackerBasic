import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const RouteItem = ({id, title, date_added, distance, duration}) => {
    const navigation = useNavigation()
    
    return (  
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("IndvRoute",{routeId:id, title, date_added, duration, distance})}>
            <Text>{title}</Text>
            <Text>{date_added}</Text>
            <Text>{distance} km</Text>
            <Text>{duration}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30,
    }
})

export default RouteItem;