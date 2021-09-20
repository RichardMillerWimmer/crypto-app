import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Title } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { CryptoCurrencies, News } from './index';


const HomePage = () => {
    const { data, error, isFetching } = useGetCryptosQuery(10);
    console.log('data:', data);
    // console.log('error:', error);
    const globalStats = data?.data?.stats;

    if(isFetching) return <div>Loading...</div>

    return (
        <>
            <Typography.Title level={2} className='heading'>Global Crypto Statistics</Typography.Title>   
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total}></Statistic></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)}></Statistic></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}></Statistic></Col>
                <Col span={12}><Statistic title='Total 24 Hour Volume' value={millify(globalStats.total24hVolume)}></Statistic></Col>
                <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}></Statistic></Col>
            </Row>
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies</Typography.Title>
                <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Typography.Title>
            </div>
            <CryptoCurrencies simplified />
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title'>Latest Crypto News</Typography.Title>
                <Typography.Title level={3} className='show-more'><Link to='/news'>Show More</Link></Typography.Title>
            </div>
            <News simplified />
        </>
    )
}

export default HomePage
