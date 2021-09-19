import './App.css';

import routes from './routes'
import {Navbar} from './components/index'

function App() {
  return (
    <div className="App">
      <div className=''>
        <Navbar />
      </div>
      <div className='navbar'>
        {routes}
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
