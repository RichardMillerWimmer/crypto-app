import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptoQuery } from '../services/cryptoApi';




const HomePage = () => {
    const { data, isFetching } = useGetCryptoQuery();
    console.log(data);

    return (
        <>
            <Typography.Title level={2}>Global Crypto Statistics</Typography.Title>   
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value='5'></Statistic></Col>
                <Col span={12}><Statistic title='Total Exchanges' value='5'></Statistic></Col>
                <Col span={12}><Statistic title='Total Market Cap' value='5'></Statistic></Col>
                <Col span={12}><Statistic title='Total 24 Hour Volume' value='5'></Statistic></Col>
                <Col span={12}><Statistic title='Total Markets' value='5'></Statistic></Col>
            </Row>
        </>
    )
}

export default HomePage
