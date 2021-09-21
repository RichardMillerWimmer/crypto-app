import './App.css';

import routes from './routes'
// import { Navbar, Footer } from './components/index';
import { Exchanges, HomePage, News, CryptoCurrencies, CryptoDetails, Navbar, Footer } from './components/index';
import { Switch, Route, Link } from 'react-router-dom';


import { Layout } from 'antd';

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <CryptoCurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
            {/* {routes} */}
          </div>
        </Layout>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
