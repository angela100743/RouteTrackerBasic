export const calculateTimeElapsed =( startTime, endTime) => {
    if (!startTime || !endTime) {
        return '00:00'; // Return '00:00' if either startTime or endTime is missing
    }

    const timeDifference = endTime - startTime;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60)); // Calculate hours
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes

    // Format hours and minutes as strings with leading zeros
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
}
