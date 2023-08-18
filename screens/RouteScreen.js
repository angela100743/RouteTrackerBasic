import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RouteList from '../components/RouteList';

const RouteScreen = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetchData()
    },[]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/routetracker/route-data/');
            console.log('Status Code:', response.status);
            console.log('Status Text:', response.statusText);   
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (  
        <View style={styles.screen}>
            <RouteList data={data}/>
            {/* <Text>This is the home screen</Text>
            <Button title="move to LOGO" onPress={()=>navigation.navigate('Logo')} /> */}
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
});

export default RouteScreen;