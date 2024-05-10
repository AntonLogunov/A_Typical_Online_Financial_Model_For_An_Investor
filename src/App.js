import './App.css';
import Main from './main/Main';
import Start from './main/Start';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() {
  return (

      <Router>
        <Routes>
          <Route exact path='*' element={<Start/>}/>
          <Route exact path='/Main' element={<Main/>}/>
        </Routes>
      </Router>
  );
}

export default App;