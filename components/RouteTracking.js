import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import * as Location from 'expo-location';
import useTracking from './LocationTracking';
import SaveButton from './SaveButton';
import { calculateTimeElapsed } from './calculateTimeElapsed';
import {getLocationName} from './getLocationName';


const RouteTracking = () => {
    const [isTracking, setIsTracking] = useState(false);
    const [startingLocation, setStartingLocation] = useState(null);
    const [endingLocation, setEndingLocation] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [distance, setDistance] = useState(0);
    const [totalTimeElapsed, setTotalTimeElapsed] = useState(0);

    const { location, history, distance: calculatedDistance } = useTracking(isTracking);

    // Update distance state with the calculatedDistance from the hook
    React.useEffect(() => {
        if (calculatedDistance) {
            setDistance(calculatedDistance);
        }
    }, [calculatedDistance]);

    const handleStartTracking = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            setIsTracking(true);
            setStartingLocation(null);
            setEndingLocation(null);
            setStartTime(new Date());
            setEndTime(null);
            setDistance(0);
            setTotalTimeElapsed(0);

            const location = await Location.getCurrentPositionAsync({});
            const startingName = await getLocationName(location.coords.latitude, location.coords.longitude);
            setStartingLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                startname: startingName
            });
        } catch (error) {
            console.error('Error starting tracking:', error);
        }
    };


    const handleStopTracking = async () => {
        setIsTracking(false);
        if (startingLocation) {
            try {
                const location = await Location.getCurrentPositionAsync();
                const endingName = await getLocationName(location.coords.latitude, location.coords.longitude);
                setEndingLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    stopname: endingName
                });
    
                // Calculate time elapsed
                const newEndTime = new Date();
                const timeElapsed = calculateTimeElapsed(startTime, newEndTime);
    
                // Update state
                setEndTime(newEndTime);
                setTotalTimeElapsed(timeElapsed);
            } catch (error) {
                console.error('Error capturing ending location:', error);
            }
        }
    };

    const handleCancel = () => {
        // Clear tracking data
        setStartingLocation(null);
        setEndingLocation(null);
        setStartTime(null);
        setEndTime(null);
        setDistance(0);
        setTotalTimeElapsed(0);
    };

    return (
        <View>
            <Button title="Start" onPress={handleStartTracking} />
            <Button title="Stop" onPress={handleStopTracking} />
            <SaveButton
                startingLocation={startingLocation}
                endingLocation={endingLocation}
                startTime={startTime}
                endTime={endTime}
                distance={distance}
                totalTimeElapsed={totalTimeElapsed}
                onSave={() => {
                    // Clear tracking data
                    setStartingLocation(null);
                    setEndingLocation(null);
                    setStartTime(null);
                    setEndTime(null);
                    setDistance(0);
                    setTotalTimeElapsed(0);
                }}
            />
            <Button title="Cancel" onPress={handleCancel} />

            {/* Render captured data */}
            {startingLocation && (
                <View>
                    <Text>Starting Location: {JSON.stringify(startingLocation)}</Text>
                    <Text>Ending Location: {JSON.stringify(endingLocation)}</Text>
                    <Text>Start Time: {startTime && startTime.toString()}</Text>
                    <Text>End Time: {endTime && endTime.toString()}</Text>
                    <Text>Distance: {distance} km</Text>
                    <Text>Total Time Elapsed: {totalTimeElapsed} ms</Text>
                </View>
            )}
        </View>
    );
};

export default RouteTracking;
