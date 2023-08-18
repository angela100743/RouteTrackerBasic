import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';

const SaveButton = ({
    startingLocation,
    endingLocation,
    startTime,
    endTime,
    distance,
    totalTimeElapsed,
    onSave,
}) => {
    const navigation = useNavigation();
    const handleSave = async () => {
        if (startingLocation && endingLocation && startTime && endTime) {
            const apiUrl = 'http://127.0.0.1:8000/routetracker/route-data/';

            const requestData = {
                startingLocation: JSON.stringify(startingLocation),
                endingLocation: JSON.stringify(endingLocation),
                startTime: startTime.toISOString(),
                endTime: endTime.toISOString(),
                distance: distance.toString(),
                totalTimeElapsed: totalTimeElapsed.toString(),
            };

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams(requestData).toString(),
                });

                if (response.ok) {
                    onSave(); // Call the provided onSave callback
                    navigation.navigate('EvalScreen');
                } else {
                    console.error('Failed to save data');
                }
            } catch (error) {
                console.error('Error while saving data:', error);
            }
        }
    };

    return <Button title="Save" onPress={handleSave} />;
};

export default SaveButton;
