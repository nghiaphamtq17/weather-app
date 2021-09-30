import React from 'react'
import { useSelector } from 'react-redux';
import Share from './Share';

const VinhPage = () => {
    const vinh = useSelector((state) => state.weather.vinh);

    return (
        <div>
            <Share data={vinh} />
        </div>
    )
}

export default VinhPage
