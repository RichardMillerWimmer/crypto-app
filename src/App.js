import './App.css';

import routes from './routes'
import { Navbar, Footer } from './components/index'
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
            {routes}
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
