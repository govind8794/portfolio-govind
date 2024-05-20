import React, { useState, useEffect } from 'react';

const Experience = ({ startDate }) => {
    const [yearsExperience, setYearsExperience] = useState(0);

    useEffect(() => {
        const currentDate = new Date();
        const differenceMs = currentDate - new Date(startDate);
        const yearsExperience = differenceMs / (1000 * 60 * 60 * 24 * 365);
        const roundedYearsExperience = Math.floor(yearsExperience);
        setYearsExperience(roundedYearsExperience);
    }, [startDate]);

    return yearsExperience;
}

export default Experience;  