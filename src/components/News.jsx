import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const News = ({ simplified }) => {
    const count = simplified ? 6 : 12;
    const { data } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count});

    console.log(data)

    if(!data?.value) return <div>Loading...</div>;

    return (
        <div>
            <Row gutter={[24, 24]}>
                {data.value.map((elem, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card hoverable className='news-card'>
                            <a href={elem.url} target='_blank' rel='noreferrer'>
                                <div className='news-image-container'>
                                    <Typography.Title className='news-title' level={4}>{elem.name}</Typography.Title>
                                    <img src={elem?.image?.thumbnail?.contentUrl || demoImage} alt='news'/>
                                    <p>{elem.description > 100 ?`${elem.description.substring(0, 100)}...` : elem.description}</p>
                                    <div className='provider-container'>
                                        <div>
                                            <Avatar src={elem.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='news'/>
                                            <Typography.Text className="provider-name">{elem.provider[0]?.name}</Typography.Text>
                                        </div>
                                        <Typography.Text>{moment(elem.datePublished).startOf('ss').fromNow()}</Typography.Text>
                                    </div>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default News
