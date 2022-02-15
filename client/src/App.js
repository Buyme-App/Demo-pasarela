import logo from './logo.svg';
import './App.css';
import Pending from './pending';
import Success from './success';
import Failured from './failured';
import Form from './Form';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path={'/success'} element={<Success/>}/>
        <Route path={'/pending'} element={<Pending/>}/>
        <Route path={'/failured'} element={<Failured/>}/>
        
        <Route path={'/mp'} element={<Form/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
