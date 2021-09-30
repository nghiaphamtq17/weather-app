import React from 'react'
import { useSelector } from 'react-redux';
import Share from './Share';

const HaNoiPage = () => {
    const hn = useSelector((state) => state.weather.hn);

    return (
        <div>
            <Share data={hn} />
        </div>
    )
}

export default HaNoiPage
