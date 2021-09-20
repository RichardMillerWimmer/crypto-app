import React, { useState } from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

const CryptoCurrencies = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const [ cryptos, setCryptos ] = useState(data?.data?.coins);

    console.log(cryptos)



    return (
        <div>
            CryptoCurrencies
        </div>
    )
}

export default CryptoCurrencies
