import { View, Text, FlatList, RefreshControl } from 'react-native';
import { dummy_data } from '../data/dummy';
import RouteItem from './RouteItem';

const RouteList = () => {
    const renderItem = ({ item }) => {
        return <RouteItem id={item.id} title={item.title} date_added={item.date_added} distance={item.distance} duration={item.duration} />
    }
    const handleRefresh = () => {
        console.log('Refreshing..');
    };
    return (
        <View>
            <FlatList
                data={dummy_data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => handleRefresh}
                    />
                }
            />
        </View>
    );
};

export default RouteList;