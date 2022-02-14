import logo from './logo.svg';
import './App.css';
import Pending from './pending';
import Success from './success';
import Failured from './failured';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path={'/success'} element={<Success/>}/>
        <Route path={'/pending'} element={<Pending/>}/>
        <Route path={'/failured'} element={<Failured/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
