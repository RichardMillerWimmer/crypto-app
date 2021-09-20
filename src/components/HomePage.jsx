import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';




const HomePage = () => {
    const { data, error, isFetching } = useGetCryptosQuery();
    console.log('data:', data);
    // console.log('error:', error);
    const globalStats = data?.data?.stats;

    if(isFetching) return <div>Loading...</div>

    return (
        <>
            <Typography.Title level={2}>Global Crypto Statistics</Typography.Title>   
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total}></Statistic></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={globalStats.totalExchanges}></Statistic></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={globalStats.totalMarketCap}></Statistic></Col>
                <Col span={12}><Statistic title='Total 24 Hour Volume' value={globalStats.total24hVolume}></Statistic></Col>
                <Col span={12}><Statistic title='Total Markets' value={globalStats.totalMarkets}></Statistic></Col>
            </Row>
        </>
    )
}

export default HomePage
