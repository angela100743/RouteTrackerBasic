import { View, Text, FlatList } from 'react-native';
import { dummy_data } from '../data/dummy';

const RouteList = () => {
    const renderItem = ({ item }) => {
        return <Text>{item.title}</Text>
    }
    return (
        <View>
            <FlatList
                data={dummy_data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

export default RouteList;