import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, Exchanges, CryptoCurrencies, CryptoDetails, News } from './components/index';

export default (
    <Switch>
        <Route exact to='/' component={HomePage}/>
        <Route to='/exchanges' component={Exchanges}/>
        <Route to='/cryptocurrencies' component={CryptoCurrencies}/>
        <Route to='/crypto/:coinId' component={CryptoDetails}/>
        <Route to='/news' component={News}/>
    </Switch>
)