import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const News = ({ simplified }) => {
    const count = simplified ? 6 : 12;
    const { data } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count});

    console.log(data)

    return (
        <div>
            News
        </div>
    )
}

export default News
