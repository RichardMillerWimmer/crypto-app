import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

const CryptoCurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(data?.data?.coins);

    //   useEffect(() =>{
    //       setCryptos(data?.data?.coins)
    //   }, [data])

    console.log(cryptos);

    return (
        <>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((elem) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={elem.id}>
                        <Link to={`/crypto/${elem.id}`}>
                            <Card
                                title={`${elem.rank}. ${elem.name}`}
                                extra={<img className='crypto-image' src={elem.iconUrl} />}
                                hoverable
                            >
                                <p>Price: {millify(elem.price)}</p>
                                <p>Market Cap: {millify(elem.marketCap)}</p>
                                <p>Change: {millify(elem.change)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default CryptoCurrencies;
